import fs from 'fs';

/**
 * Re-extract data from cached raw API responses
 * Use this when you want to add new fields without re-fetching from Tesla API
 *
 * Usage:
 * 1. Modify the extractNewFields() function to extract your new data
 * 2. Run: node re-extract-from-cache.js
 * 3. Run: node database.js to update the database
 */

function extractNewFields(station) {
  const updates = {};

  // Example: Extract new fields from raw_location_data
  if (station.raw_location_data) {
    const loc = station.raw_location_data;

    // Example: Extract actual vs coming_soon coordinates
    if (loc.supercharger_function) {
      updates.actual_latitude = loc.supercharger_function.actual_latitude;
      updates.actual_longitude = loc.supercharger_function.actual_longitude;
      updates.access_type = loc.supercharger_function.access_type;
      updates.site_status = loc.supercharger_function.site_status;
    }
  }

  // Example: Extract new fields from raw_details_data
  if (station.raw_details_data) {
    const details = station.raw_details_data;

    // Example: Extract power level info
    updates.max_power_kw = details.maxPowerKw;
    updates.charger_type = details.chargerType;

    // Example: Extract address from details if available
    if (details.address) {
      updates.street_address = details.address.street;
      updates.postal_code = details.address.postalCode;
    }

    // Example: Extract hours of operation
    if (details.hours) {
      updates.hours_of_operation = details.hours;
    }

    // Example: Extract site description
    updates.site_description = details.siteDescription;

    // Example: Extract all available amenities with details
    updates.amenities_detailed = details.amenitiesDetails;
  }

  return updates;
}

function reExtractData() {
  console.log('🔄 Re-extracting data from cached responses...\n');

  const stationsPath = './data/stations.json';

  if (!fs.existsSync(stationsPath)) {
    console.error('❌ stations.json not found. Run scraper-simplified.js first.');
    return;
  }

  const stations = JSON.parse(fs.readFileSync(stationsPath, 'utf-8'));
  console.log(`✓ Loaded ${stations.length} stations from cache\n`);

  let updated = 0;
  const enhancedStations = stations.map(station => {
    const newFields = extractNewFields(station);

    if (Object.keys(newFields).length > 0) {
      updated++;

      // Merge new fields into station
      return {
        ...station,
        ...newFields
      };
    }

    return station;
  });

  // Save enhanced data
  fs.writeFileSync(stationsPath, JSON.stringify(enhancedStations, null, 2));

  console.log(`✓ Enhanced ${updated} stations with new fields`);
  console.log(`✓ Updated ${stationsPath}\n`);

  // Print example of new fields
  const firstEnhanced = enhancedStations.find(s =>
    s.raw_details_data && Object.keys(extractNewFields(s)).length > 0
  );

  if (firstEnhanced) {
    console.log('📋 Example enhanced station:');
    console.log(`   Name: ${firstEnhanced.name}`);
    const newFields = extractNewFields(firstEnhanced);
    Object.entries(newFields).forEach(([key, value]) => {
      console.log(`   ${key}: ${JSON.stringify(value).slice(0, 80)}`);
    });
  }

  console.log('\n💡 Next steps:');
  console.log('   1. Update database.js to handle new fields');
  console.log('   2. Run: node database.js');
  console.log('   3. Update API/frontend to use new fields\n');
}

// Run
try {
  reExtractData();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
