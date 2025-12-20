/**
 * Tesla Supercharger Data Extraction Script
 *
 * INSTRUCTIONS:
 * 1. Open https://www.tesla.com/findus in your browser
 * 2. Wait for the map to fully load
 * 3. Press F12 to open DevTools
 * 4. Click on the "Console" tab
 * 5. Copy and paste this ENTIRE script into the console
 * 6. Press Enter to run
 * 7. Wait for downloads (2 files will be automatically downloaded)
 * 8. Move both files to: backend/data/
 * 9. Run: node scraper-simplified.js
 */

(async function extractTeslaData() {
  console.log('🚀 Starting Tesla Supercharger data extraction...\n');

  const TARGET_STATES = ['NM', 'TX', 'CO'];

  try {
    // Step 1: Fetch all locations
    console.log('📍 Step 1: Fetching all US locations...');
    const locationsResponse = await fetch('https://www.tesla.com/api/findus/get-locations?country=US&view=map');

    if (!locationsResponse.ok) {
      throw new Error(`Failed to fetch locations: ${locationsResponse.status}`);
    }

    const allLocations = await locationsResponse.json();
    console.log(`✓ Found ${allLocations.length} total locations\n`);

    // Step 2: Filter for target states and superchargers
    console.log('🔍 Step 2: Filtering for NM, TX, CO superchargers...');
    const targetLocations = allLocations.filter(loc => {
      const state = loc.address?.state || loc.supercharger_function?.address?.state;
      const isTarget = TARGET_STATES.includes(state);
      const isSupercharger = loc.location_type?.includes('supercharger') ||
                            loc.location_type?.includes('party') ||
                            loc.location_type?.includes('nacs');
      return isTarget && isSupercharger;
    });

    console.log(`✓ Found ${targetLocations.length} superchargers in NM, TX, CO\n`);

    // Print breakdown by state
    TARGET_STATES.forEach(state => {
      const count = targetLocations.filter(loc => {
        const locState = loc.address?.state || loc.supercharger_function?.address?.state;
        return locState === state;
      }).length;
      console.log(`   ${state}: ${count} stations`);
    });

    // Step 3: Fetch detailed information for each station
    console.log('\n💎 Step 3: Fetching detailed pricing data for each station...');
    console.log('⏳ This will take a few minutes (please wait)...\n');

    const allDetails = {};
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < targetLocations.length; i++) {
      const loc = targetLocations[i];
      const uuid = loc.uuid;

      try {
        const detailsUrl = `https://www.tesla.com/api/findus/get-charger-details?id=${uuid}`;
        const response = await fetch(detailsUrl);

        if (response.ok) {
          const data = await response.json();
          allDetails[uuid] = data;
          successCount++;

          // Progress indicator
          if (successCount % 10 === 0) {
            console.log(`   Progress: ${successCount}/${targetLocations.length} stations...`);
          }
        } else {
          console.warn(`   ⚠️  Failed for ${loc.name}: HTTP ${response.status}`);
          errorCount++;
        }

        // Wait 400ms between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 400));

      } catch (error) {
        console.error(`   ❌ Error for ${loc.name}:`, error.message);
        errorCount++;
      }
    }

    console.log(`\n✓ Completed! Success: ${successCount}, Failed: ${errorCount}\n`);

    // Step 4: Send data to local server (or download if server not available)
    console.log('💾 Step 4: Saving data...\n');

    // Try uploading to local server first
    try {
      console.log('Uploading locations to local server...');
      const locResponse = await fetch('http://localhost:3002/upload-locations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allLocations)
      });

      if (locResponse.ok) {
        console.log('✓ Uploaded locations to server');

        console.log('Uploading details to local server...');
        const detResponse = await fetch('http://localhost:3002/upload-details', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(allDetails)
        });

        if (detResponse.ok) {
          console.log('✓ Uploaded details to server');
          console.log('\n✅ DATA SENT TO SERVER!\n');
        }
      }
    } catch (uploadError) {
      console.log('⚠️  Server not available, downloading files instead...\n');

      // Download locations file
      const locationsBlob = new Blob([JSON.stringify(allLocations, null, 2)], { type: 'application/json' });
      const locationsUrl = URL.createObjectURL(locationsBlob);
      const locationsLink = document.createElement('a');
      locationsLink.href = locationsUrl;
      locationsLink.download = 'raw-locations.json';
      document.body.appendChild(locationsLink);
      locationsLink.click();
      document.body.removeChild(locationsLink);
      URL.revokeObjectURL(locationsUrl);
      console.log('✓ Downloaded: raw-locations.json');

      // Wait a moment before second download
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Download details file
      const detailsBlob = new Blob([JSON.stringify(allDetails, null, 2)], { type: 'application/json' });
      const detailsUrl = URL.createObjectURL(detailsBlob);
      const detailsLink = document.createElement('a');
      detailsLink.href = detailsUrl;
      detailsLink.download = 'raw-details-all.json';
      document.body.appendChild(detailsLink);
      detailsLink.click();
      document.body.removeChild(detailsLink);
      URL.revokeObjectURL(detailsUrl);
      console.log('✓ Downloaded: raw-details-all.json');
    }

    // Summary
    console.log('\n✅ EXTRACTION COMPLETE!\n');
    console.log('📊 Summary:');
    console.log(`   Total locations extracted: ${allLocations.length}`);
    console.log(`   Target superchargers: ${targetLocations.length}`);
    console.log(`   Detailed data fetched: ${successCount}`);
    console.log(`   Failed requests: ${errorCount}`);

    console.log('\n📝 Next Steps:');
    console.log('   1. Move downloaded files to: backend/data/');
    console.log('   2. Run: cd backend');
    console.log('   3. Run: node scraper-simplified.js');
    console.log('   4. Run: node database.js');
    console.log('   5. Restart server: node server.js');
    console.log('\n🎉 Your map will have all real data with pricing tiers!\n');

  } catch (error) {
    console.error('❌ Fatal error:', error);
    console.error('\nTroubleshooting:');
    console.error('- Make sure you are on https://www.tesla.com/findus');
    console.error('- Try refreshing the page and running the script again');
    console.error('- Check your internet connection');
  }
})();
