import fs from 'fs';

/**
 * Merge missing-details.json into raw-details-all.json
 */

function mergeDetails() {
  console.log('🔄 Merging missing details...\n');

  const missingPath = './data/missing-details.json';
  const allDetailsPath = './data/raw-details-all.json';

  if (!fs.existsSync(missingPath)) {
    console.error('❌ missing-details.json not found in data/');
    console.log('\nMove the downloaded file:');
    console.log('  mv ~/Downloads/missing-details.json backend/data/');
    return;
  }

  // Load files
  const missingDetails = JSON.parse(fs.readFileSync(missingPath, 'utf-8'));
  let allDetails = {};

  if (fs.existsSync(allDetailsPath)) {
    allDetails = JSON.parse(fs.readFileSync(allDetailsPath, 'utf-8'));
  }

  const beforeCount = Object.keys(allDetails).length;
  const newCount = Object.keys(missingDetails).length;

  // Merge
  Object.assign(allDetails, missingDetails);

  const afterCount = Object.keys(allDetails).length;

  // Save
  fs.writeFileSync(allDetailsPath, JSON.stringify(allDetails, null, 2));

  console.log('✓ Merge complete!');
  console.log(`  Before: ${beforeCount} stations`);
  console.log(`  Added: ${newCount} new stations`);
  console.log(`  After: ${afterCount} total stations\n`);

  // Clean up
  fs.unlinkSync(missingPath);
  console.log('✓ Cleaned up missing-details.json\n');

  console.log('💡 Next steps:');
  console.log('  1. node scraper-simplified.js');
  console.log('  2. rm -f data/stations.db && node database.js');
  console.log('  3. Restart server and refresh frontend\n');
}

try {
  mergeDetails();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
