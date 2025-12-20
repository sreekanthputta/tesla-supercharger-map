import fs from 'fs';

/**
 * Simplified scraper that works with:
 * - raw-locations.json (all locations)
 * - raw-details-all.json (combined details file) OR
 * - raw-details/<uuid>.json (individual detail files)
 */

// Target states
const TARGET_STATES = ['NM', 'TX', 'CO'];

function parseVehicleCompatibility(location, details = null) {
  const result = {
    tesla_compatible: 1, // All Tesla superchargers support Tesla
    nacs_partner: 0,
    other_ev: 0
  };

  // Check location_type for NACS
  if (location.location_type?.includes('nacs')) {
    result.nacs_partner = 1;
  }

  // Check supercharger_function data from location
  if (location.supercharger_function) {
    const sf = location.supercharger_function;

    if (sf.open_to_non_tesla === true) {
      result.other_ev = 1;
    }

    if (sf.charging_accessibility) {
      const accessibility = sf.charging_accessibility.toLowerCase();

      if (accessibility.includes('nacs partner')) {
        result.nacs_partner = 1;
      }

      if (accessibility.includes('all vehicles')) {
        result.other_ev = 1;
        result.nacs_partner = 1;
      }
    }
  }

  // Override with details if available
  if (details) {
    const detailsData = details.data?.data || details;

    if (detailsData.openToNonTeslas === true) {
      result.other_ev = 1;
      result.nacs_partner = 1;
    }
  }

  return result;
}

function parsePricing(details) {
  const pricing = {
    usd_per_kwh: null,
    peak_rate: null,
    off_peak_rate: null,
    peak_hours: null,
    tiers: []
  };

  if (!details) return pricing;

  const detailsData = details.data?.data || details;

  if (!detailsData?.effectivePricebooks) return pricing;

  // Find Tesla pricing (TSLA)
  const teslaPricing = detailsData.effectivePricebooks.filter(
    pb => pb.vehicleMakeType === 'TSLA' && pb.feeType === 'CHARGING'
  );

  if (teslaPricing.length === 0) return pricing;

  // Check if Time-of-Use pricing exists
  const touPricing = teslaPricing.filter(pb => pb.isTou === true);

  if (touPricing.length > 0) {
    // Has peak/off-peak pricing
    const sortedByRate = [...touPricing].sort((a, b) => a.rateBase - b.rateBase);
    pricing.off_peak_rate = sortedByRate[0].rateBase;
    pricing.peak_rate = sortedByRate[sortedByRate.length - 1].rateBase;

    // Build peak hours description
    const peakPeriod = sortedByRate[sortedByRate.length - 1];
    if (peakPeriod.startTime && peakPeriod.endTime) {
      pricing.peak_hours = `${peakPeriod.startTime}-${peakPeriod.endTime}`;
    }

    // Extract all pricing tiers with times
    pricing.tiers = touPricing.map(tier => {
      let label = 'Standard';
      if (tier.rateBase === pricing.peak_rate) {
        label = 'Peak';
      } else if (tier.rateBase === pricing.off_peak_rate) {
        label = 'Off-Peak';
      }

      const startTime = tier.startTime || '00:00';
      const endTime = tier.endTime || '24:00';

      return {
        rate: tier.rateBase,
        startTime: startTime,
        endTime: endTime,
        label: label
      };
    }).sort((a, b) => a.startTime.localeCompare(b.startTime));
  } else {
    // Flat rate pricing
    const flatRate = teslaPricing.find(pb => pb.isTou === false);
    if (flatRate) {
      pricing.usd_per_kwh = flatRate.rateBase;
      pricing.tiers = [{
        rate: flatRate.rateBase,
        startTime: '00:00',
        endTime: '24:00',
        label: 'All Day'
      }];
    }
  }

  return pricing;
}

function processData() {
  console.log('🚀 Processing Tesla Supercharger data...\n');

  // Load locations
  const locationsPath = './data/raw-locations.json';
  if (!fs.existsSync(locationsPath)) {
    console.error('❌ Error: raw-locations.json not found');
    console.log('\n📝 Please follow the manual extraction guide:');
    console.log('   See: MANUAL_DATA_EXTRACTION_GUIDE.md\n');
    return;
  }

  const rawLocations = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));
  console.log(`✓ Loaded ${rawLocations.length} locations`);

  // Filter for superchargers in target states
  const targetLocations = rawLocations.filter(location => {
    const isSupercharger = location.location_type?.includes('supercharger') ||
                          location.location_type?.includes('party') ||
                          location.location_type?.includes('nacs');

    // Extract state from various possible locations
    let state = location.address?.state ||
                location.supercharger_function?.address?.state;

    // If no state, try to extract from coming_soon_name (e.g., "Verona, NY")
    if (!state && location.supercharger_function?.coming_soon_name) {
      const nameParts = location.supercharger_function.coming_soon_name.split(', ');
      if (nameParts.length > 1) {
        state = nameParts[nameParts.length - 1].trim(); // Get last part and trim whitespace
      }
    }

    const isTargetState = TARGET_STATES.includes(state);
    return isSupercharger && isTargetState;
  });

  console.log(`✓ Found ${targetLocations.length} superchargers in ${TARGET_STATES.join(', ')}\n`);

  // Check for combined details file or individual files
  let allDetails = {};
  const combinedPath = './data/raw-details-all.json';

  if (fs.existsSync(combinedPath)) {
    console.log('📦 Loading combined details file...');
    allDetails = JSON.parse(fs.readFileSync(combinedPath, 'utf-8'));
    console.log(`✓ Loaded details for ${Object.keys(allDetails).length} stations\n`);
  } else {
    console.log('📁 No combined details file found, will check individual files...\n');
  }

  // Process each location
  const processedStations = [];
  let detailsFound = 0;
  let pricingFound = 0;

  for (const location of targetLocations) {
    const uuid = location.uuid;

    // Get name from coming_soon_name
    const fullName = location.supercharger_function?.coming_soon_name || location.name || 'Unknown';

    // Parse city and state from name (e.g., "Plano, TX" -> city: "Plano", state: "TX")
    let city = '';
    let state = '';
    if (fullName.includes(', ')) {
      const parts = fullName.split(', ');
      if (parts.length >= 2) {
        city = parts[0].trim();
        state = parts[parts.length - 1].trim();
      }
    }

    const station = {
      location_id: uuid,
      location_slug: location.location_url_slug,
      name: fullName,
      address: {
        line1: location.address?.street || '',
        city: city || location.address?.city || '',
        state: state || location.address?.state || '',
        zip: location.address?.postalCode || '',
        country: location.address?.countryCode || 'US'
      },
      latitude: location.latitude,
      longitude: location.longitude,
      location_type: location.location_type || [],
      open_soon: false,
      coming_soon: location.supercharger_function?.coming_soon || false,
      details: null
    };

    // Try to get details
    let details = null;

    // Check combined file first
    if (allDetails[uuid]) {
      details = allDetails[uuid];
      detailsFound++;
    } else {
      // Check individual file
      const detailsPath = `./data/raw-details/${uuid}.json`;
      if (fs.existsSync(detailsPath)) {
        details = JSON.parse(fs.readFileSync(detailsPath, 'utf-8'));
        detailsFound++;
      }
    }

    // Parse vehicle compatibility
    const vehicleCompat = parseVehicleCompatibility(location, details);

    // Parse pricing if we have details
    const pricing = parsePricing(details);

    if (pricing.tiers.length > 0) {
      pricingFound++;
    }

    // Build station details
    const detailsData = details?.data?.data || details;

    station.details = {
      total_stalls: detailsData?.publicStallCount || 0,
      available_stalls: null,
      site_closed: false,
      amenities: detailsData?.amenities || [],
      pricing: {
        type: 'per_kwh',
        rates: {
          usd_per_kwh: pricing.usd_per_kwh,
          peak_usd_per_kwh: pricing.peak_rate,
          off_peak_usd_per_kwh: pricing.off_peak_rate,
          peak_hours: pricing.peak_hours
        },
        tiers: pricing.tiers
      },
      nacs_partner: vehicleCompat.nacs_partner,
      other_ev_support: vehicleCompat.other_ev
    };

    // Store complete raw API responses for future use
    station.raw_location_data = location;
    station.raw_details_data = detailsData;

    processedStations.push(station);
  }

  console.log(`✓ Processed ${processedStations.length} stations`);
  console.log(`✓ Found detailed data for ${detailsFound} stations`);
  console.log(`✓ Found pricing tiers for ${pricingFound} stations\n`);

  // Save processed data
  const outputPath = './data/stations.json';
  fs.writeFileSync(outputPath, JSON.stringify(processedStations, null, 2));
  console.log(`✓ Saved to ${outputPath}\n`);

  // Print summary
  console.log('📊 Summary by state:');
  TARGET_STATES.forEach(state => {
    const stations = processedStations.filter(s => s.address.state?.trim() === state);
    const withPricing = stations.filter(s => s.details.pricing.tiers.length > 0).length;
    console.log(`   ${state}: ${stations.length} stations (${withPricing} with pricing)`);
  });

  console.log('\n🚗 Vehicle compatibility:');
  const teslaOnly = processedStations.filter(s =>
    s.details.nacs_partner === 0 && s.details.other_ev_support === 0
  ).length;
  const nacsEnabled = processedStations.filter(s => s.details.nacs_partner === 1).length;
  const allVehicles = processedStations.filter(s => s.details.other_ev_support === 1).length;
  console.log(`   Tesla Only: ${teslaOnly}`);
  console.log(`   NACS Partner: ${nacsEnabled}`);
  console.log(`   All Vehicles: ${allVehicles}`);

  if (detailsFound < processedStations.length) {
    console.log('\n⚠️  Warning: Missing detailed data for some stations');
    console.log(`   Stations without details: ${processedStations.length - detailsFound}`);
    console.log('   These will still appear on the map but without pricing info.');
  }

  console.log('\n💡 Next step: Run "node database.js" to import into database');
}

// Run
try {
  processData();
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
