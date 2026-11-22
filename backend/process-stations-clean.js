import fs from 'fs';

/**
 * Clean processor for Tesla Supercharger data
 * Filters: NACS partner or other EV support only
 * Excludes: Tesla-only, coming_soon, destination chargers
 */

// Geographic boundaries for TX, NM, CO, CA
const GEO_BOUNDS = {
  TX: { latMin: 25.8, latMax: 36.5, lonMin: -106.6, lonMax: -93.5 },
  NM: { latMin: 31.3, latMax: 37, lonMin: -109, lonMax: -103 },
  CO: { latMin: 37, latMax: 41, lonMin: -109, lonMax: -102 },
  CA: { latMin: 32.5, latMax: 42, lonMin: -124.4, lonMax: -114.1 }
};

function isInRegion(lat, lon) {
  return Object.values(GEO_BOUNDS).some(bounds =>
    lat >= bounds.latMin && lat <= bounds.latMax &&
    lon >= bounds.lonMin && lon <= bounds.lonMax
  );
}

function hourLabel(n) { return String(n).padStart(2, '0') + ':00'; }

// Occupancy pricing varies by how full the site is. Project it onto the day's hourly
// congestion curve so it becomes ordinary time-of-use pricing: each hour's congestion %
// selects the matching band's rate. Approximate by design — based on typical busyness.
function projectOccupancy(bands, congestion) {
  const rateAt = occ => {
    for (const b of bands) if (occ >= b.min && (occ < b.max || b.max === 100)) return b.rate;
    return bands[bands.length - 1].rate;
  };
  const hourly = congestion.map(v => rateAt(v * 100));
  const windows = [];
  let start = 0;
  for (let h = 1; h <= 24; h++) {
    if (h === 24 || hourly[h] !== hourly[start]) {
      windows.push({
        rate: hourly[start],
        startTime: hourLabel(start),
        endTime: h === 24 ? '24:00' : hourLabel(h),
        isTou: true,
        occupancyDerived: true
      });
      start = h;
    }
  }
  return windows;
}

// Build one vehicle type's pricing as a uniform {rate, startTime, endTime, isTou} list.
// Three source models collapse to this shape: occupancy (projected onto congestion),
// time-of-use (used directly), and flat/free (one full-day window).
// The null-occupancy fallback pricebook is ignored: if banded tiers are present, they apply.
function buildTiers(books, congestion) {
  if (books.length === 0) return [{ rate: 0, startTime: '00:00', endTime: '24:00', isTou: false }];

  const occ = books
    .filter(pb => pb.minSiteOccupancy != null)
    .map(pb => ({ min: pb.minSiteOccupancy, max: pb.maxSiteOccupancy, rate: pb.rateBase }))
    .sort((a, b) => a.min - b.min);
  if (occ.length > 0 && congestion && congestion.length === 24) {
    return projectOccupancy(occ, congestion);
  }

  const tou = books.filter(pb => pb.startTime && pb.startTime !== '');
  if (tou.length > 0) {
    const seen = new Set();
    return tou
      .slice()
      .sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''))
      .filter(pb => {
        const key = `${pb.startTime}|${pb.endTime}|${pb.rateBase}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map(pb => ({ rate: pb.rateBase, startTime: pb.startTime, endTime: pb.endTime || '24:00', isTou: true }));
  }

  const rate = Math.max(...books.map(pb => pb.rateBase));
  return [{ rate, startTime: '00:00', endTime: '24:00', isTou: false }];
}

function parsePricing(effectivePricebooks, congestion) {
  if (!effectivePricebooks || effectivePricebooks.length === 0) {
    const free = { rate: 0, startTime: '00:00', endTime: '24:00', isTou: false };
    return { tesla: [{ ...free }], nonTesla: [{ ...free }], congestion: null, occupancyBands: null };
  }

  const charging = effectivePricebooks.filter(pb => pb.feeType === 'CHARGING');
  const congestionFee = effectivePricebooks.find(pb => pb.feeType === 'CONGESTION');
  const teslaCharging = charging.filter(pb => pb.vehicleMakeType === 'TSLA');

  // The raw occupancy ladder (site-busyness % → rate) that the time windows are
  // projected from. Tesla-only; null when the site isn't occupancy-priced.
  const occupancyBands = teslaCharging
    .filter(pb => pb.minSiteOccupancy != null)
    .map(pb => ({ min: pb.minSiteOccupancy, max: pb.maxSiteOccupancy, rate: pb.rateBase }))
    .sort((a, b) => a.min - b.min);

  return {
    tesla: buildTiers(teslaCharging, congestion),
    nonTesla: buildTiers(charging.filter(pb => pb.vehicleMakeType === 'NTSLA'), congestion),
    congestion: congestionFee ? { rate: congestionFee.rateBase, unit: congestionFee.uom } : null,
    occupancyBands: occupancyBands.length > 0 ? occupancyBands : null
  };
}

function mapAmenityToEmoji(amenity) {
  const map = {
    'AMENITIES_RESTROOMS': '🚻',
    'AMENITIES_CAFE': '☕',
    'AMENITIES_RESTAURANT': '🍴',
    'AMENITIES_SHOPPING': '🛍️',
    'AMENITIES_WIFI': '📶',
    'AMENITIES_LODGING': '🏨',
    'AMENITIES_PLAYGROUND': '🎮'
  };
  return map[amenity] || '✓';
}

function determineChargerType(locationType) {
  if (!locationType || locationType.length === 0) return 'other';
  // Use .some() to check if any element contains the substring
  if (locationType.some(t => t.includes('destination_charger'))) return 'destination';
  if (locationType.some(t => t.includes('nacs'))) return 'nacs';
  if (locationType.some(t => t.includes('party'))) return 'party';
  if (locationType.some(t => t.includes('supercharger'))) return 'supercharger';
  return 'other';
}

function processStations() {
  console.log('🔄 Processing stations for map...\n');
  console.log('═'.repeat(50));

  // Load data
  const rawLocations = JSON.parse(fs.readFileSync('./data/raw-locations.json', 'utf-8'));
  const rawDetails = JSON.parse(fs.readFileSync('./data/raw-details-all.json', 'utf-8'));

  console.log(`✓ Loaded ${rawLocations.length.toLocaleString()} locations`);
  console.log(`✓ Loaded ${Object.keys(rawDetails).length.toLocaleString()} station details\n`);

  const processedStations = [];
  let excluded = { teslaOnly: 0, comingSoon: 0, destination: 0, noDetails: 0, wrongState: 0, invalidData: 0 };

  // Process each location that has details
  for (const [uuid, detailsWrapper] of Object.entries(rawDetails)) {
    // Handle both old format (direct data) and new format (with success flag)
    let details;

    if (detailsWrapper.success === false) {
      // Failed fetch in new format
      excluded.invalidData++;
      continue;
    } else if (detailsWrapper.success === true) {
      // New format with success flag - try both nested levels
      details = detailsWrapper.data?.data?.data || detailsWrapper.data?.data;
    } else {
      // Old format (direct data field)
      details = detailsWrapper.data?.data;
    }

    if (!details) {
      excluded.invalidData++;
      continue;
    }

    // Filter by state (from API response)
    const state = details.address?.state;
    if (!['TX', 'NM', 'CO', 'CA'].includes(state)) {
      excluded.wrongState++;
      continue;
    }

    // Find matching location
    const location = rawLocations.find(loc => loc.uuid === uuid);
    if (!location) {
      excluded.noDetails++;
      continue;
    }

    const locationType = location.location_type || [];
    const chargerType = determineChargerType(locationType);

    // Only include NACS, party, and destination chargers (exclude regular superchargers)
    if (chargerType !== 'nacs' && chargerType !== 'party' && chargerType !== 'destination') {
      excluded.destination++;
      continue;
    }

    // Exclude coming soon
    if (locationType.includes('coming_soon_supercharger')) {
      excluded.comingSoon++;
      continue;
    }

    // For superchargers/NACS/party: exclude Tesla-only
    // For destination chargers: include both Tesla-only and open to non-Tesla
    const isDestination = chargerType === 'destination';
    if (!isDestination && !details.openToNonTeslas) {
      excluded.teslaOnly++;
      continue;
    }

    // Get current day congestion data (may be null for destination chargers).
    // congestionValue is UTC-indexed; local hour L maps to UTC hour L+shift, which
    // rolls into the next UTC day once it passes 24. Stitch currentDay + nextDay so
    // the stored array is a true local day (local midnight at index 0).
    const TZ_SHIFT = { CA: 8, TX: 6, CO: 7, NM: 7 };
    const now = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[now.getDay()];
    const nextDay = dayNames[(now.getDay() + 1) % 7];
    const profile = details.availabilityProfile?.availabilityProfile;
    const congToday = profile?.[currentDay]?.congestionValue || [];
    const congNext = profile?.[nextDay]?.congestionValue || [];
    const shift = TZ_SHIFT[state] ?? 0;
    const congestionData = (congToday.length === 24 && congNext.length === 24)
      ? Array.from({ length: 24 }, (_, L) => {
          const idx = L + shift;
          return idx < 24 ? congToday[idx] : congNext[idx - 24];
        })
      : congToday;

    // Parse pricing (occupancy pricing is projected onto the day's congestion curve)
    const pricing = parsePricing(details.effectivePricebooks, congestionData);

    // Determine vehicle compatibility
    const vehicleSupport = {
      tesla: true,  // All chargers support Tesla
      nacs: details.openToNonTeslas === true,
      otherEv: details.openToNonTeslas === true,
      teslaOnly: details.openToNonTeslas === false
    };

    // Build station object
    const station = {
      id: uuid,
      slug: location.location_url_slug,
      name: details.name,
      commonName: details.commonSiteName || '',
      address: {
        street: `${details.address.streetNumber || ''} ${details.address.street || ''}`.trim(),
        city: details.address.city,
        state: details.address.state,
        zip: details.address.postalCode,
        full: `${details.address.streetNumber || ''} ${details.address.street || ''}, ${details.address.city}, ${details.address.state} ${details.address.postalCode}`
      },
      location: {
        lat: location.latitude,
        lon: location.longitude
      },
      chargerType: chargerType,
      stallCount: details.publicStallCount || 0,
      maxPowerKw: details.maxPowerKw || 0,
      accessType: details.accessType || 'Unknown',
      accessHours: details.accessHours?.twentyFourSeven
        ? '24/7'
        : 'Limited Hours',
      amenities: (details.amenities || []).map(a => ({
        code: a,
        emoji: mapAmenityToEmoji(a),
        name: a.replace('AMENITIES_', '').toLowerCase()
      })),
      pricing: pricing,
      congestionData: congestionData,
      openToNonTeslas: details.openToNonTeslas,
      vehicleSupport: vehicleSupport
    };

    // Print the projected occupancy split for this location
    if (pricing.tesla.some(t => t.occupancyDerived)) {
      const split = pricing.tesla.map(t => `${t.startTime}-${t.endTime} $${t.rate.toFixed(2)}`).join('  ');
      console.log(`  ${details.name} (${state}): ${split}`);
    }

    processedStations.push(station);
  }

  // Save processed data
  fs.writeFileSync('./data/map-stations.json', JSON.stringify(processedStations, null, 2));

  // Also copy to frontend data directory
  fs.writeFileSync('../frontend/data/map-stations.json', JSON.stringify(processedStations, null, 2));

  console.log('═'.repeat(50));
  console.log(`✅ Processed ${processedStations.length} stations\n`);
  console.log('Excluded:');
  console.log(`  Tesla-only: ${excluded.teslaOnly}`);
  console.log(`  Coming soon: ${excluded.comingSoon}`);
  console.log(`  Destination chargers: ${excluded.destination}`);
  console.log(`  Wrong state: ${excluded.wrongState}`);
  console.log(`  Invalid/failed data: ${excluded.invalidData}`);
  console.log(`  No location data: ${excluded.noDetails}\n`);

  console.log('Station types:');
  const types = {};
  processedStations.forEach(s => {
    types[s.chargerType] = (types[s.chargerType] || 0) + 1;
  });
  Object.entries(types).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
  });

  console.log('\nStates:');
  const states = {};
  processedStations.forEach(s => {
    states[s.address.state] = (states[s.address.state] || 0) + 1;
  });
  Object.entries(states).sort().forEach(([state, count]) => {
    console.log(`  ${state}: ${count}`);
  });

  // Data quality checks
  console.log('\nData Quality:');
  let noPricing = 0;
  let noAmenities = 0;
  let noCongestion = 0;

  processedStations.forEach(s => {
    if (s.pricing.tesla.length === 0 && s.pricing.nonTesla.length === 0) {
      noPricing++;
    }
    if (s.amenities.length === 0) {
      noAmenities++;
    }
    if (!s.congestionData || s.congestionData.length === 0) {
      noCongestion++;
    }
  });

  if (noPricing === 0) {
    console.log('  ✓ All stations have pricing');
  } else {
    console.log(`  ⚠ ${noPricing} stations missing pricing`);
  }

  if (noAmenities === 0) {
    console.log('  ✓ All stations have amenities');
  } else {
    console.log(`  ⚠ ${noAmenities} stations missing amenities`);
  }

  if (noCongestion === 0) {
    console.log('  ✓ All stations have congestion data');
  } else {
    console.log(`  ⚠ ${noCongestion} stations missing congestion data`);
  }

  console.log('═'.repeat(50));
  console.log(`\n✓ Saved to: data/map-stations.json`);
  console.log('✓ Copied to: ../frontend/data/map-stations.json');
  console.log('✓ Ready to serve on map\n');
}

try {
  processStations();
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
