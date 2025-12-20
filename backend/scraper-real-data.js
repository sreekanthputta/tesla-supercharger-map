import fs from 'fs';

/**
 * Helper script to process real Tesla API data from browser DevTools
 *
 * Instructions:
 * 1. Visit https://www.tesla.com/findus in your browser
 * 2. Open DevTools (F12) → Network tab
 * 3. Copy the response from get-locations API call
 * 4. Save it as: backend/data/raw-locations.json
 * 5. For each station, copy get-charger-details responses
 * 6. Save them as: backend/data/raw-details/ (one file per station)
 * 7. Run this script: node scraper-real-data.js
 */

// Target states
const TARGET_STATES = ['NM', 'TX', 'CO'];

function parseVehicleCompatibility(location) {
  const result = {
    tesla_compatible: 1, // All Tesla superchargers support Tesla
    nacs_partner: 0,
    other_ev: 0
  };

  // Check location_type for NACS
  if (location.location_type?.includes('nacs')) {
    result.nacs_partner = 1;
  }

  // Check supercharger_function data
  if (location.supercharger_function) {
    const sf = location.supercharger_function;

    // Check open_to_non_tesla flag
    if (sf.open_to_non_tesla === true) {
      result.other_ev = 1;
    }

    // Check charging_accessibility
    if (sf.charging_accessibility) {
      const accessibility = sf.charging_accessibility.toLowerCase();

      if (accessibility.includes('nacs partner')) {
        result.nacs_partner = 1;
      }

      if (accessibility.includes('all vehicles')) {
        result.other_ev = 1;
        result.nacs_partner = 1; // All vehicles includes NACS
      }
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
    tiers: [] // All pricing tiers with times
  };

  if (!details?.effectivePricebooks) return pricing;

  // Find Tesla pricing (TSLA)
  const teslaPricing = details.effectivePricebooks.filter(
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
      // Determine label based on rate and time
      let label = 'Standard';
      if (tier.rateBase === pricing.peak_rate) {
        label = 'Peak';
      } else if (tier.rateBase === pricing.off_peak_rate) {
        label = 'Off-Peak';
      }

      // Format times
      const startTime = tier.startTime || '00:00';
      const endTime = tier.endTime || '24:00';

      return {
        rate: tier.rateBase,
        startTime: startTime,
        endTime: endTime,
        label: label
      };
    }).sort((a, b) => {
      // Sort by start time
      return a.startTime.localeCompare(b.startTime);
    });
  } else {
    // Flat rate pricing
    const flatRate = teslaPricing.find(pb => pb.isTou === false);
    if (flatRate) {
      pricing.usd_per_kwh = flatRate.rateBase;
      // Create a single tier for flat rate
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

function processRealData() {
  console.log('Processing real Tesla API data...\n');

  // Load locations
  const locationsPath = './data/raw-locations.json';
  if (!fs.existsSync(locationsPath)) {
    console.error('❌ Error: raw-locations.json not found');
    console.log('\nPlease:');
    console.log('1. Visit https://www.tesla.com/findus');
    console.log('2. Open DevTools → Network tab');
    console.log('3. Find the get-locations API call');
    console.log('4. Copy the response JSON');
    console.log('5. Save to backend/data/raw-locations.json');
    return;
  }

  const rawLocations = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));
  console.log(`✓ Loaded ${rawLocations.length} locations`);

  // Filter for superchargers in target states
  const targetLocations = rawLocations.filter(location => {
    const isSupercharger = location.location_type?.includes('supercharger') ||
                          location.location_type?.includes('party') ||
                          location.location_type?.includes('nacs');
    const state = location.address?.state || location.supercharger_function?.address?.state;
    const isTargetState = TARGET_STATES.includes(state);
    return isSupercharger && isTargetState;
  });

  console.log(`✓ Found ${targetLocations.length} stations in NM, TX, CO\n`);

  // Process each location
  const processedStations = [];
  let detailsFound = 0;

  for (const location of targetLocations) {
    const station = {
      location_id: location.uuid,
      location_slug: location.location_url_slug,
      name: location.name || location.supercharger_function?.coming_soon_name || 'Unknown',
      address: {
        line1: location.address?.street || '',
        city: location.address?.city || '',
        state: location.address?.state || '',
        zip: location.address?.postalCode || '',
        country: location.address?.countryCode || 'US'
      },
      latitude: location.latitude,
      longitude: location.longitude,
      location_type: location.location_type || [],
      open_soon: false,
      coming_soon: false,
      details: null
    };

    // Parse vehicle compatibility from location data
    const vehicleCompat = parseVehicleCompatibility(location);

    // Try to load details file
    const detailsPath = `./data/raw-details/${location.uuid}.json`;
    if (fs.existsSync(detailsPath)) {
      const details = JSON.parse(fs.readFileSync(detailsPath, 'utf-8'));
      const detailsData = details.data?.data || details;

      const pricing = parsePricing(detailsData);

      // Update vehicle compatibility from details
      if (detailsData.openToNonTeslas === true) {
        vehicleCompat.other_ev = 1;
        vehicleCompat.nacs_partner = 1;
      }

      station.details = {
        total_stalls: detailsData.publicStallCount || 0,
        available_stalls: null, // Not available in static data
        site_closed: false,
        amenities: detailsData.amenities || [],
        pricing: {
          type: 'per_kwh',
          rates: pricing
        },
        nacs_partner: vehicleCompat.nacs_partner,
        other_ev_support: vehicleCompat.other_ev
      };

      detailsFound++;
    } else {
      // No details file, use basic info from location
      station.details = {
        total_stalls: 0,
        available_stalls: null,
        site_closed: false,
        amenities: [],
        pricing: null,
        nacs_partner: vehicleCompat.nacs_partner,
        other_ev_support: vehicleCompat.other_ev
      };
    }

    processedStations.push(station);
  }

  console.log(`✓ Processed ${processedStations.length} stations`);
  console.log(`✓ Found detailed data for ${detailsFound} stations\n`);

  // Save processed data
  const outputPath = './data/stations.json';
  fs.writeFileSync(outputPath, JSON.stringify(processedStations, null, 2));

  console.log(`✓ Saved to ${outputPath}`);

  // Print summary
  console.log('\n📊 Summary by state:');
  TARGET_STATES.forEach(state => {
    const count = processedStations.filter(s => s.address.state === state).length;
    console.log(`   ${state}: ${count} stations`);
  });

  console.log('\n🚗 Vehicle compatibility:');
  const teslaOnly = processedStations.filter(s => s.details.nacs_partner === 0 && s.details.other_ev_support === 0).length;
  const nacsEnabled = processedStations.filter(s => s.details.nacs_partner === 1).length;
  const allVehicles = processedStations.filter(s => s.details.other_ev_support === 1).length;
  console.log(`   Tesla Only: ${teslaOnly}`);
  console.log(`   NACS Partner: ${nacsEnabled}`);
  console.log(`   All Vehicles: ${allVehicles}`);

  console.log('\n💡 Next step: Run "node database.js" to import into database');
}

// Run
try {
  processRealData();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
