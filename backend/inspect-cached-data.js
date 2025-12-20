import fs from 'fs';

/**
 * Inspect cached raw API responses to see what fields are available
 * Use this to discover new fields you can extract
 *
 * Usage: node inspect-cached-data.js
 */

function inspectCachedData() {
  console.log('🔍 Inspecting cached API responses...\n');

  const stationsPath = './data/stations.json';

  if (!fs.existsSync(stationsPath)) {
    console.error('❌ stations.json not found.');
    return;
  }

  const stations = JSON.parse(fs.readFileSync(stationsPath, 'utf-8'));
  console.log(`✓ Loaded ${stations.length} stations\n`);

  // Find a station with complete data
  const sampleStation = stations.find(s => s.raw_details_data);

  if (!sampleStation) {
    console.error('❌ No stations with cached data found');
    return;
  }

  console.log('📊 Sample Station:', sampleStation.name);
  console.log('=' .repeat(60));

  // Show location data structure
  if (sampleStation.raw_location_data) {
    console.log('\n📍 raw_location_data fields:');
    console.log(JSON.stringify(sampleStation.raw_location_data, null, 2).slice(0, 2000));
    console.log('\n... (truncated)\n');

    // List all top-level keys
    console.log('Top-level keys in raw_location_data:');
    Object.keys(sampleStation.raw_location_data).forEach(key => {
      const value = sampleStation.raw_location_data[key];
      const type = Array.isArray(value) ? 'array' : typeof value;
      console.log(`   - ${key}: ${type}`);
    });
  }

  // Show details data structure
  if (sampleStation.raw_details_data) {
    console.log('\n💎 raw_details_data fields:');
    console.log(JSON.stringify(sampleStation.raw_details_data, null, 2).slice(0, 2000));
    console.log('\n... (truncated)\n');

    // List all top-level keys
    console.log('Top-level keys in raw_details_data:');
    Object.keys(sampleStation.raw_details_data).forEach(key => {
      const value = sampleStation.raw_details_data[key];
      const type = Array.isArray(value) ? 'array' : typeof value;
      console.log(`   - ${key}: ${type}`);
    });
  }

  // Show what fields we're currently extracting
  console.log('\n✅ Currently extracted fields:');
  console.log('   From location:');
  console.log('   - name, latitude, longitude, location_type');
  console.log('   - vehicle compatibility (tesla/nacs/other)');

  console.log('\n   From details:');
  console.log('   - total_stalls, amenities');
  console.log('   - pricing (rates + tiers)');
  console.log('   - nacs_partner, other_ev_support');

  console.log('\n💡 Available fields you could extract:');

  if (sampleStation.raw_details_data) {
    const details = sampleStation.raw_details_data;
    const suggestions = [];

    if (details.maxPowerKw) suggestions.push('   - maxPowerKw (charging power)');
    if (details.chargerType) suggestions.push('   - chargerType');
    if (details.hours) suggestions.push('   - hours (operating hours)');
    if (details.siteDescription) suggestions.push('   - siteDescription');
    if (details.address) suggestions.push('   - address details (street, postal code)');
    if (details.amenitiesDetails) suggestions.push('   - amenitiesDetails (detailed amenity info)');
    if (details.directionsLink) suggestions.push('   - directionsLink (maps URL)');
    if (details.geocode) suggestions.push('   - geocode (precise coordinates)');

    if (suggestions.length > 0) {
      suggestions.forEach(s => console.log(s));
    } else {
      console.log('   (Explore the JSON above to find more fields)');
    }
  }

  console.log('\n📝 To extract new fields:');
  console.log('   1. Edit re-extract-from-cache.js');
  console.log('   2. Add your field extraction logic');
  console.log('   3. Run: node re-extract-from-cache.js');
  console.log('   4. Update database schema if needed');
  console.log('   5. Run: node database.js\n');
}

// Run
try {
  inspectCachedData();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
