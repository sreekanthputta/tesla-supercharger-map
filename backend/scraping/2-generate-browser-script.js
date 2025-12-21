import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG, getProgramType } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Step 2: Generate browser console script to fetch all station details
 *
 * Loads stations-to-fetch.json and creates a browser script that:
 * - Fetches details from Tesla API for each station
 * - Shows progress (X/Y)
 * - Handles errors gracefully
 * - Saves incrementally
 * - Outputs final JSON to copy
 */

console.log('Step 2: Generating browser fetch script\n');
console.log('═'.repeat(50));

// Load stations to fetch
const toFetchPath = path.join(__dirname, '..', CONFIG.paths.stationsToFetch);
const toFetch = JSON.parse(fs.readFileSync(toFetchPath, 'utf-8'));
console.log(`✓ Loaded ${toFetch.total} stations to fetch\n`);

// Build API URL
const apiUrl = new URL(CONFIG.api.endpoint);
Object.entries(CONFIG.api.params).forEach(([key, value]) => {
  apiUrl.searchParams.append(key, value);
});

// Generate browser script
const browserScript = `
/**
 * TESLA SUPERCHARGER DETAIL FETCHER
 * Generated: ${new Date().toISOString()}
 *
 * Copy and paste this entire script into browser console at:
 * https://www.tesla.com/findus
 *
 * This will fetch details for ${toFetch.total} stations.
 * Estimated time: ~${Math.ceil(toFetch.total * CONFIG.api.delayMs / 1000 / 60)} minutes
 */

(async function() {
  console.clear();
  console.log('═'.repeat(60));
  console.log('🚀 Tesla Supercharger Detail Fetcher');
  console.log('═'.repeat(60));
  console.log('Total stations to fetch: ${toFetch.total}');
  console.log('Estimated time: ~${Math.ceil(toFetch.total * CONFIG.api.delayMs / 1000 / 60)} minutes\\n');

  const API_BASE = '${CONFIG.api.endpoint}';
  const API_PARAMS = new URLSearchParams(${JSON.stringify(CONFIG.api.params)});
  const DELAY_MS = ${CONFIG.api.delayMs};

  const stations = ${JSON.stringify(toFetch.stations, null, 2)};

  const results = {};
  let successCount = 0;
  let errorCount = 0;

  // Helper function to sleep
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Helper to determine programType for each station
  function getProgramType(locationType) {
    if (!locationType) return 'supercharger';
    const isDestination = locationType.some(t => t.includes('destination_charger'));
    return isDestination ? 'charger' : 'supercharger';
  }

  // Fetch with retry logic
  async function fetchStationDetails(station, retries = 3) {
    const programType = getProgramType(station.locationType);
    const url = \`\${API_BASE}?\${API_PARAMS}&programType=\${programType}&locationSlug=\${station.slug}\`;

    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          return { success: true, data };
        } else if (response.status === 429) {
          // Rate limited, wait longer
          console.warn(\`  ⚠️ Rate limited, waiting \${Math.pow(2, attempt + 1)}s...\`);
          await sleep(Math.pow(2, attempt + 1) * 1000);
        } else {
          console.warn(\`  ⚠️ HTTP \${response.status} for \${station.slug}\`);
          if (attempt === retries - 1) {
            return { success: false, error: \`HTTP \${response.status}\` };
          }
        }
      } catch (error) {
        console.warn(\`  ⚠️ Network error: \${error.message}\`);
        if (attempt === retries - 1) {
          return { success: false, error: error.message };
        }
        await sleep(Math.pow(2, attempt) * 1000);
      }
    }
  }

  // Main fetch loop
  console.log('\\nStarting fetch...\\n');
  const startTime = Date.now();

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];
    const progress = \`[\${i + 1}/\${stations.length}]\`;

    console.log(\`\${progress} Fetching: \${station.slug}\`);

    const result = await fetchStationDetails(station);

    if (result.success) {
      results[station.uuid] = result;
      successCount++;
    } else {
      console.error(\`  ❌ Failed: \${result.error}\`);
      errorCount++;
      // Still save the error info
      results[station.uuid] = {
        success: false,
        error: result.error,
        station: station
      };
    }

    // Show checkpoint every 50 stations
    if ((i + 1) % 50 === 0) {
      const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
      console.log(\`\\n📊 Checkpoint: \${i + 1}/\${stations.length} - \${elapsed}m elapsed\`);
      console.log(\`   Success: \${successCount} | Errors: \${errorCount}\\n\`);
    }

    // Delay before next request
    await sleep(DELAY_MS);
  }

  // Final summary
  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log('\\n' + '═'.repeat(60));
  console.log('✅ FETCH COMPLETE');
  console.log('═'.repeat(60));
  console.log(\`Total time: \${totalTime} minutes\`);
  console.log(\`Success: \${successCount}\`);
  console.log(\`Errors: \${errorCount}\`);
  console.log(\`Total: \${stations.length}\\n\`);

  // Save to variable for copying
  window.stationDetails = results;

  console.log('📋 Data saved to window.stationDetails');
  console.log('\\nTo save the data:');
  console.log('1. Run: copy(JSON.stringify(window.stationDetails))');
  console.log('2. Paste into: backend/data/raw-details-fetched.json');
  console.log('3. Run: node scraping/3-merge-details.js\\n');

})();
`;

// Save the browser script
const scriptPath = path.join(__dirname, '..', CONFIG.paths.browserScript);
fs.writeFileSync(scriptPath, browserScript);

console.log(`✓ Generated browser script: ${CONFIG.paths.browserScript}\n`);
console.log('═'.repeat(50));
console.log('\n📋 Instructions:\n');
console.log('1. Open browser to: https://www.tesla.com/findus');
console.log('2. Open DevTools Console (F12 or Cmd+Opt+J)');
console.log('3. Copy contents of: scraping/browser-fetch-script.js');
console.log('4. Paste into console and press Enter');
console.log(`5. Wait ~${Math.ceil(toFetch.total * CONFIG.api.delayMs / 1000 / 60)} minutes for completion`);
console.log('6. Run in console: copy(JSON.stringify(window.stationDetails))');
console.log('7. Save to: data/raw-details-fetched.json');
console.log('8. Run: node scraping/3-merge-details.js\n');
