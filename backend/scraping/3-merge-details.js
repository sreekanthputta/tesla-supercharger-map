import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Step 3: Merge newly fetched details with existing cache
 *
 * Safely combines raw-details-fetched.json with raw-details-all.json
 * - Backs up existing data
 * - Validates structure
 * - Reports stats
 * - Handles both new and updated stations
 */

console.log('Step 3: Merging fetched details with cache\n');
console.log('═'.repeat(50));

// Load existing cache (if exists)
let existingDetails = {};
const cacheFile = path.join(__dirname, '..', CONFIG.paths.detailsCache);
const backupFile = path.join(__dirname, '..', CONFIG.paths.detailsBackup);

if (fs.existsSync(cacheFile)) {
  existingDetails = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
  console.log(`✓ Loaded existing cache: ${Object.keys(existingDetails).length} stations`);

  // Create backup
  fs.writeFileSync(backupFile, JSON.stringify(existingDetails, null, 2));
  console.log(`✓ Backup saved to: ${CONFIG.paths.detailsBackup}`);
} else {
  console.log('ℹ️  No existing cache found (fresh start)');
}

// Load newly fetched data
const fetchedFile = path.join(__dirname, '..', CONFIG.paths.fetchedDetails);
if (!fs.existsSync(fetchedFile)) {
  console.error(`\n❌ Error: ${CONFIG.paths.fetchedDetails} not found!`);
  console.error('   Please run the browser fetch script first.\n');
  process.exit(1);
}

const fetchedDetails = JSON.parse(fs.readFileSync(fetchedFile, 'utf-8'));
console.log(`✓ Loaded fetched data: ${Object.keys(fetchedDetails).length} stations\n`);

// Merge data
let newCount = 0;
let updatedCount = 0;
let errorCount = 0;
const errors = [];

for (const [uuid, details] of Object.entries(fetchedDetails)) {
  // Skip failed fetches
  if (!details.success) {
    errorCount++;
    errors.push({
      uuid: uuid,
      error: details.error,
      station: details.station
    });
    continue;
  }

  // Check if this is new or update
  if (existingDetails[uuid]) {
    updatedCount++;
  } else {
    newCount++;
  }

  // Add to merged data
  existingDetails[uuid] = details;
}

// Save merged data
fs.writeFileSync(cacheFile, JSON.stringify(existingDetails, null, 2));

// Report
console.log('═'.repeat(50));
console.log('✅ MERGE COMPLETE\n');
console.log('Results:');
console.log(`  New stations added: ${newCount}`);
console.log(`  Existing updated: ${updatedCount}`);
console.log(`  Failed fetches: ${errorCount}`);
console.log(`  Total in cache: ${Object.keys(existingDetails).length}\n`);

if (errorCount > 0) {
  console.log('⚠️  Failed stations:');
  errors.forEach((err, idx) => {
    console.log(`  ${idx + 1}. ${err.station?.slug || err.uuid}: ${err.error}`);
  });

  // Save error log
  const errorLogPath = path.join(__dirname, '..', 'data', 'fetch-errors.json');
  fs.writeFileSync(errorLogPath, JSON.stringify(errors, null, 2));
  console.log(`\n✓ Error details saved to: data/fetch-errors.json\n`);
}

// Data validation
console.log('Validating data quality...\n');

let validCount = 0;
let hasPricingCount = 0;
let openToNonTeslaCount = 0;

for (const [uuid, wrapper] of Object.entries(existingDetails)) {
  if (!wrapper.success) continue;

  const data = wrapper.data?.data?.data || wrapper.data?.data;
  if (!data) continue;

  validCount++;

  if (data.effectivePricebooks && data.effectivePricebooks.length > 0) {
    hasPricingCount++;
  }

  if (data.openToNonTeslas === true) {
    openToNonTeslaCount++;
  }
}

console.log('Data Quality:');
console.log(`  Valid structure: ${validCount}/${Object.keys(existingDetails).length}`);
console.log(`  Has pricing: ${hasPricingCount}/${validCount}`);
console.log(`  Open to non-Tesla: ${openToNonTeslaCount}/${validCount}\n`);

console.log('═'.repeat(50));
console.log(`\n✓ Saved to: ${CONFIG.paths.detailsCache}`);
console.log('\n📋 Next step: Process stations for map');
console.log('   node process-stations-clean.js\n');
