import fs from 'fs';

/**
 * Clean processor for Tesla Supercharger data
 * Filters: NACS partner or other EV support only
 * Excludes: Tesla-only, coming_soon, destination chargers
 */

// Geographic boundaries for TX, NM, CO
const GEO_BOUNDS = {
  TX: { latMin: 25.8, latMax: 36.5, lonMin: -106.6, lonMax: -93.5 },
  NM: { latMin: 31.3, latMax: 37, lonMin: -109, lonMax: -103 },
  CO: { latMin: 37, latMax: 41, lonMin: -109, lonMax: -102 }
};

function isInRegion(lat, lon) {
  return Object.values(GEO_BOUNDS).some(bounds =>
    lat >= bounds.latMin && lat <= bounds.latMax &&
    lon >= bounds.lonMin && lon <= bounds.lonMax
  );
}

function parsePricing(effectivePricebooks) {
  if (!effectivePricebooks || effectivePricebooks.length === 0) {
    // No pricing data = FREE
    return {
      tesla: [{ rate: 0, startTime: '00:00', endTime: '24:00', isTou: false, isFree: true }],
      nonTesla: [{ rate: 0, startTime: '00:00', endTime: '24:00', isTou: false, isFree: true }],
      congestion: null
    };
  }

  const charging = effectivePricebooks.filter(pb => pb.feeType === 'CHARGING');
  const congestion = effectivePricebooks.find(pb => pb.feeType === 'CONGESTION');

  // Include both Time-of-Use and flat-rate pricing
  const teslaPricing = charging
    .filter(pb => pb.vehicleMakeType === 'TSLA')
    .map(pb => ({
      rate: pb.rateBase,
      startTime: pb.startTime || '00:00',
      endTime: pb.endTime || '24:00',
      isTou: pb.isTou,
      isFree: pb.rateBase === 0
    }))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const nonTeslaPricing = charging
    .filter(pb => pb.vehicleMakeType === 'NTSLA')
    .map(pb => ({
      rate: pb.rateBase,
      startTime: pb.startTime || '00:00',
      endTime: pb.endTime || '24:00',
      isTou: pb.isTou,
      isFree: pb.rateBase === 0
    }))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  // If no Tesla pricing found, assume free
  if (teslaPricing.length === 0) {
    teslaPricing.push({ rate: 0, startTime: '00:00', endTime: '24:00', isTou: false, isFree: true });
  }

  // If no non-Tesla pricing found, assume free
  if (nonTeslaPricing.length === 0) {
    nonTeslaPricing.push({ rate: 0, startTime: '00:00', endTime: '24:00', isTou: false, isFree: true });
  }

  return {
    tesla: teslaPricing,
    nonTesla: nonTeslaPricing,
    congestion: congestion ? {
      rate: congestion.rateBase,
      unit: congestion.uom
    } : null
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
    if (!['TX', 'NM', 'CO'].includes(state)) {
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

    // Parse pricing
    const pricing = parsePricing(details.effectivePricebooks);

    // Get current day congestion data (may be null for destination chargers)
    const now = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[now.getDay()];
    const congestionData = details.availabilityProfile?.availabilityProfile?.[currentDay]?.congestionValue || [];

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
