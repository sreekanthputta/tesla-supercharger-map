import puppeteer from 'puppeteer';
import fs from 'fs';
import pLimit from 'p-limit';

// State codes for filtering
const TARGET_STATES = ['NM', 'TX', 'CO'];

// Parallel request limiter (5 concurrent to avoid detection)
const limit = pLimit(5);

let browser;
let page;

async function initBrowser() {
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

  page = await browser.newPage();

  // Set realistic viewport and user agent
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36');

  // Remove webdriver flag
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false
    });
  });

  console.log('Browser launched successfully!');
}

async function fetchAllLocations() {
  console.log('\nFetching all Tesla locations...');

  try {
    // Navigate to the findus page first to establish session
    console.log('Visiting Tesla website to establish session...');
    await page.goto('https://www.tesla.com/findus', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Small delay
    await page.waitForTimeout(2000);

    // Now fetch the API data
    console.log('Fetching location data from API...');
    const response = await page.goto('https://www.tesla.com/api/findus/get-locations?country=US&view=map', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    const data = await response.json();
    console.log(`Total locations fetched: ${data.length}`);

    // Filter for superchargers in target states only
    const superchargers = data.filter(location => {
      const isSupercharger = location.location_type?.includes('supercharger');
      const isTargetState = TARGET_STATES.includes(location.address?.state);
      return isSupercharger && isTargetState;
    });

    console.log(`Superchargers in NM, TX, CO: ${superchargers.length}`);

    return superchargers;
  } catch (error) {
    console.error('Error fetching locations:', error.message);
    throw error;
  }
}

async function fetchChargerDetails(locationSlug) {
  try {
    // Create a new page for this request to allow parallel fetching
    const detailPage = await browser.newPage();
    await detailPage.setViewport({ width: 1920, height: 1080 });
    await detailPage.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36');

    const url = `https://www.tesla.com/api/findus/get-charger-details?locationSlug=${locationSlug}&programType=supercharger&locale=en-US&isInHkMoTw=false`;

    const response = await detailPage.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    const details = await response.json();
    await detailPage.close();

    return details;
  } catch (error) {
    console.error(`Error fetching details for ${locationSlug}:`, error.message);
    return null;
  }
}

async function scrapeAllData() {
  console.log('Starting Tesla Supercharger scraper...\n');
  console.log('='.repeat(50));

  try {
    // Step 1: Initialize browser
    await initBrowser();

    // Step 2: Get all locations
    const locations = await fetchAllLocations();

    // Step 3: Fetch details for each location in parallel
    console.log('\nFetching detailed information for each station...');
    console.log('Using 5 parallel requests to avoid rate limiting...\n');

    let completed = 0;
    const total = locations.length;

    const detailedLocations = await Promise.all(
      locations.map(location =>
        limit(async () => {
          const details = await fetchChargerDetails(location.location_id);
          completed++;

          // Show progress
          const progress = ((completed / total) * 100).toFixed(1);
          const bar = '█'.repeat(Math.floor(progress / 2)) + '░'.repeat(50 - Math.floor(progress / 2));
          process.stdout.write(`\r[${bar}] ${completed}/${total} (${progress}%)`);

          return {
            ...location,
            details: details
          };
        })
      )
    );

    console.log('\n\n' + '='.repeat(50));
    console.log('Scraping completed!\n');

    // Step 4: Save to JSON file
    const dataDir = './data';
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const outputPath = './data/stations.json';
    fs.writeFileSync(outputPath, JSON.stringify(detailedLocations, null, 2));

    console.log(`✓ Data saved to: ${outputPath}`);
    console.log(`✓ Total stations scraped: ${detailedLocations.length}`);

    // Print summary by state
    console.log('\n📊 Summary by state:');
    TARGET_STATES.forEach(state => {
      const count = detailedLocations.filter(l => l.address?.state === state).length;
      console.log(`   ${state}: ${count} stations`);
    });

    return detailedLocations;
  } finally {
    // Always close browser
    if (browser) {
      await browser.close();
      console.log('\n✓ Browser closed.');
    }
  }
}

// Run scraper
scrapeAllData()
  .then(() => {
    console.log('\n' + '='.repeat(50));
    console.log('✅ Scraping finished successfully!');
    console.log('='.repeat(50));
    process.exit(0);
  })
  .catch(error => {
    console.error('\n' + '='.repeat(50));
    console.error('❌ Scraping failed:', error.message);
    console.error('='.repeat(50));
    process.exit(1);
  });
