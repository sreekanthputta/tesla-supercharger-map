import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG, getRegion, hasDesiredChargerType } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Step 1: Discover stations matching configured criteria
 *
 * Filters raw-locations.json by:
 * - Geographic coordinate boxes (from config)
 * - Charger types (from config)
 *
 * Outputs: stations-to-fetch.json
 */

console.log('Step 1: Discovering stations\n');
console.log('═'.repeat(50));

// Show configuration
console.log('Regions:', Object.keys(CONFIG.regions).join(', '));
console.log('Charger types:', CONFIG.chargerTypes.join(', '));
console.log('');

// Load raw locations
const rawLocationsPath = path.join(__dirname, '..', CONFIG.paths.rawLocations);
const rawLocations = JSON.parse(fs.readFileSync(rawLocationsPath, 'utf-8'));
console.log(`✓ Loaded ${rawLocations.length.toLocaleString()} total locations\n`);

// Filter by coordinates AND charger type
const stationsInRegion = rawLocations.filter(location => {
  // Must be in coordinate box
  if (getRegion(location.latitude, location.longitude) === null) {
    return false;
  }

  // Must have desired charger type
  return hasDesiredChargerType(location.location_type);
});

console.log(`✓ Found ${stationsInRegion.length} matching stations\n`);

// Group by region
const byRegion = {};
Object.keys(CONFIG.regions).forEach(region => byRegion[region] = 0);

stationsInRegion.forEach(loc => {
  const region = getRegion(loc.latitude, loc.longitude);
  byRegion[region]++;
});

console.log('Breakdown by region:');
Object.entries(byRegion).forEach(([region, count]) => {
  console.log(`  ${region}: ${count}`);
});

// Prepare output for fetching
const output = {
  total: stationsInRegion.length,
  generated: new Date().toISOString(),
  config: {
    regions: CONFIG.regions,
    chargerTypes: CONFIG.chargerTypes
  },
  regions: byRegion,
  stations: stationsInRegion.map(loc => ({
    uuid: loc.uuid,
    slug: loc.location_url_slug,
    lat: loc.latitude,
    lon: loc.longitude,
    locationType: loc.location_type  // Needed to determine programType
  }))
};

// Save
const outputPath = path.join(__dirname, '..', CONFIG.paths.stationsToFetch);
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`\n✓ Saved to: ${CONFIG.paths.stationsToFetch}`);
console.log('\n' + '═'.repeat(50));
console.log('\n📋 Next step: Generate browser fetch script');
console.log('   node scraping/2-generate-browser-script.js\n');
