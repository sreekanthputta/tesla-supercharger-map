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
  if (!effectivePricebooks) return { tesla: [], nonTesla: [], congestion: null };

  const charging = effectivePricebooks.filter(pb => pb.feeType === 'CHARGING');
  const congestion = effectivePricebooks.find(pb => pb.feeType === 'CONGESTION');

  // Only include Time-of-Use pricing, skip flat rates
  const teslaPricing = charging
    .filter(pb => pb.vehicleMakeType === 'TSLA' && pb.isTou === true)
    .map(pb => ({
      rate: pb.rateBase,
      startTime: pb.startTime || '00:00',
      endTime: pb.endTime || '24:00'
    }))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const nonTeslaPricing = charging
    .filter(pb => pb.vehicleMakeType === 'NTSLA' && pb.isTou === true)
    .map(pb => ({
      rate: pb.rateBase,
      startTime: pb.startTime || '00:00',
      endTime: pb.endTime || '24:00'
    }))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

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
  if (locationType.includes('supercharger')) return 'supercharger';
  if (locationType.includes('nacs')) return 'nacs';
  if (locationType.includes('party')) return 'party';
  if (locationType.includes('destination_charger')) return 'destination';
  return 'other';
}

function processStations() {
  console.log('🔄 Processing stations for map...\n');

  // Load data
  const rawLocations = JSON.parse(fs.readFileSync('./data/raw-locations.json', 'utf-8'));
  const rawDetails = JSON.parse(fs.readFileSync('./data/raw-details-all.json', 'utf-8'));

  console.log(`✓ Loaded ${rawLocations.length} locations`);
  console.log(`✓ Loaded ${Object.keys(rawDetails).length} station details\n`);

  const processedStations = [];
  let excluded = { teslaOnly: 0, comingSoon: 0, destination: 0, noDetails: 0 };

  // Process each location that has details
  for (const [uuid, detailsWrapper] of Object.entries(rawDetails)) {
    const details = detailsWrapper.data?.data;
    if (!details) continue;

    // Filter by state
    const state = details.address?.state;
    if (!['TX', 'NM', 'CO'].includes(state)) continue;

    // Find matching location
    const location = rawLocations.find(loc => loc.uuid === uuid);
    if (!location) {
      excluded.noDetails++;
      continue;
    }

    const locationType = location.location_type || [];
    const chargerType = determineChargerType(locationType);

    // Exclude destination chargers
    if (chargerType === 'destination') {
      excluded.destination++;
      continue;
    }

    // Exclude coming soon
    if (locationType.includes('coming_soon_supercharger')) {
      excluded.comingSoon++;
      continue;
    }

    // Exclude Tesla-only (must be open to non-Tesla)
    if (!details.openToNonTeslas) {
      excluded.teslaOnly++;
      continue;
    }

    // Parse pricing
    const pricing = parsePricing(details.effectivePricebooks);

    // Get current day congestion data
    const now = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[now.getDay()];
    const congestionData = details.availabilityProfile?.availabilityProfile?.[currentDay]?.congestionValue || [];

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
      vehicleSupport: {
        tesla: true,
        nacs: details.openToNonTeslas,
        otherEv: details.openToNonTeslas
      }
    };

    processedStations.push(station);
  }

  // Save processed data
  fs.writeFileSync('./data/map-stations.json', JSON.stringify(processedStations, null, 2));

  console.log(`✓ Processed ${processedStations.length} stations\n`);
  console.log('Excluded:');
  console.log(`  Tesla-only: ${excluded.teslaOnly}`);
  console.log(`  Coming soon: ${excluded.comingSoon}`);
  console.log(`  Destination chargers: ${excluded.destination}`);
  console.log(`  No location data: ${excluded.noDetails}\n`);

  console.log('Station types:');
  const types = {};
  processedStations.forEach(s => {
    types[s.chargerType] = (types[s.chargerType] || 0) + 1;
  });
  Object.entries(types).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
  });

  console.log(`\n✓ Saved to data/map-stations.json`);
}

try {
  processStations();
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
