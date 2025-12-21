import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG, getRegion } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Step 1: Discover ONLY destination chargers
 *
 * Filters for destination_charger and destination_charger_nontesla only
 * Excludes NACS and party chargers (already fetched)
 *
 * Outputs: stations-to-fetch.json
 */

console.log('Step 1: Discovering DESTINATION CHARGERS ONLY\n');
console.log('═'.repeat(50));

// Show configuration
console.log('Regions:', Object.keys(CONFIG.regions).join(', '));
console.log('Charger types: destination_charger, destination_charger_nontesla');
console.log('');

// Load raw locations
const rawLocationsPath = path.join(__dirname, '..', CONFIG.paths.rawLocations);
const rawLocations = JSON.parse(fs.readFileSync(rawLocationsPath, 'utf-8'));
console.log(`✓ Loaded ${rawLocations.length.toLocaleString()} total locations\n`);

// Filter for ONLY destination chargers
const destinationChargers = rawLocations.filter(location => {
  // Must be in coordinate box
  if (getRegion(location.latitude, location.longitude) === null) {
    return false;
  }

  const locationType = location.location_type || [];

  // Must have destination_charger OR destination_charger_nontesla
  const isDestination = locationType.some(t =>
    t.includes('destination_charger') || t.includes('destination_charger_nontesla')
  );

  return isDestination;
});

console.log(`✓ Found ${destinationChargers.length} destination chargers\n`);

// Group by region
const byRegion = {};
Object.keys(CONFIG.regions).forEach(region => byRegion[region] = 0);

destinationChargers.forEach(loc => {
  const region = getRegion(loc.latitude, loc.longitude);
  byRegion[region]++;
});

console.log('Breakdown by region:');
Object.entries(byRegion).forEach(([region, count]) => {
  console.log(`  ${region}: ${count}`);
});

// Group by type
const byType = {};
destinationChargers.forEach(loc => {
  loc.location_type.forEach(type => {
    if (type.includes('destination')) {
      byType[type] = (byType[type] || 0) + 1;
    }
  });
});

console.log('\nBreakdown by type:');
Object.entries(byType).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});

// Prepare output for fetching
const output = {
  total: destinationChargers.length,
  generated: new Date().toISOString(),
  note: 'Destination chargers ONLY (excluding NACS and party)',
  config: {
    regions: CONFIG.regions,
    chargerTypes: ['destination_charger', 'destination_charger_nontesla']
  },
  regions: byRegion,
  stations: destinationChargers.map(loc => ({
    uuid: loc.uuid,
    slug: loc.location_url_slug,
    lat: loc.latitude,
    lon: loc.longitude,
    locationType: loc.location_type
  }))
};

// Save
const outputPath = path.join(__dirname, '..', CONFIG.paths.stationsToFetch);
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`\n✓ Saved to: ${CONFIG.paths.stationsToFetch}`);
console.log('\n' + '═'.repeat(50));
console.log('\n📋 Next step: Generate browser fetch script');
console.log('   node scraping/2-generate-browser-script.js\n');
