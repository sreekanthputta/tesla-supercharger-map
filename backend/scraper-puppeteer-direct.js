import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapeWithPuppeteer() {
  console.log('🚀 Starting Puppeteer scraper...\n');

  let browser;
  try {
    // Launch browser
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled'
      ]
    });

    const page = await browser.newPage();

    // Set realistic user agent and viewport
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1920, height: 1080 });

    // Go to the main findus page first to get cookies
    console.log('Loading Tesla Find Us page...');
    await page.goto('https://www.tesla.com/findus', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    console.log('Page loaded, waiting a moment...');
    await page.waitForTimeout(3000);

    // Now fetch the locations API from within the page context
    console.log('Fetching locations data...');
    const locationsData = await page.evaluate(async () => {
      const response = await fetch('https://www.tesla.com/api/findus/get-locations?country=US&view=map');
      return await response.json();
    });

    console.log(`✓ Got ${locationsData.length} locations\n`);

    // Save locations
    fs.writeFileSync('./data/raw-locations.json', JSON.stringify(locationsData, null, 2));
    console.log('✓ Saved raw-locations.json');

    // Filter for target states
    const TARGET_STATES = ['NM', 'TX', 'CO'];
    const targetLocations = locationsData.filter(loc => {
      const state = loc.address?.state || loc.supercharger_function?.address?.state;
      const isTarget = TARGET_STATES.includes(state);
      const isSupercharger = loc.location_type?.includes('supercharger') ||
                            loc.location_type?.includes('party') ||
                            loc.location_type?.includes('nacs');
      return isTarget && isSupercharger;
    });

    console.log(`✓ Found ${targetLocations.length} superchargers in NM, TX, CO\n`);

    // Fetch details for each station
    console.log('Fetching detailed data for each station...');
    const allDetails = {};
    let count = 0;

    for (const loc of targetLocations) {
      try {
        const details = await page.evaluate(async (uuid) => {
          const response = await fetch(`https://www.tesla.com/api/findus/get-charger-details?id=${uuid}`);
          return await response.json();
        }, loc.uuid);

        allDetails[loc.uuid] = details;
        count++;

        if (count % 20 === 0) {
          console.log(`   Progress: ${count}/${targetLocations.length}`);
        }

        // Small delay between requests
        await page.waitForTimeout(300);

      } catch (error) {
        console.error(`   ⚠️  Failed for ${loc.name}:`, error.message);
      }
    }

    console.log(`✓ Fetched details for ${count} stations\n`);

    // Save details
    fs.writeFileSync('./data/raw-details-all.json', JSON.stringify(allDetails, null, 2));
    console.log('✓ Saved raw-details-all.json\n');

    // Summary
    console.log('📊 Summary:');
    TARGET_STATES.forEach(state => {
      const stateCount = targetLocations.filter(loc => {
        const locState = loc.address?.state || loc.supercharger_function?.address?.state;
        return locState === state;
      }).length;
      console.log(`   ${state}: ${stateCount} stations`);
    });

    console.log('\n✅ Scraping complete!');
    console.log('\n💡 Next steps:');
    console.log('   node scraper-simplified.js');
    console.log('   node database.js');

  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run
scrapeWithPuppeteer().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
