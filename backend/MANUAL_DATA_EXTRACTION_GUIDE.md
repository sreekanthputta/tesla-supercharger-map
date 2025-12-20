# Manual Data Extraction Guide

Since Tesla's API has strong bot detection that blocks automated curl requests, you'll need to manually extract the data from your browser (which has valid session cookies).

## Step 1: Extract Location List

1. **Open Tesla Find Us page**:
   - Visit: https://www.tesla.com/findus
   - Make sure the map loads completely

2. **Open DevTools**:
   - Press `F12` or `Cmd+Option+I` (Mac)
   - Go to the **Network** tab
   - Filter by "XHR" or "Fetch"

3. **Find the locations API call**:
   - Look for: `get-locations?country=US&view=map`
   - Click on it
   - Go to the **Response** tab
   - You should see a huge JSON array with thousands of locations

4. **Copy the response**:
   - Right-click on the response JSON
   - Select "Copy value" or "Copy response"
   - Save it to: `backend/data/raw-locations.json`

## Step 2: Extract Detailed Pricing for Each Station

This is the important part - we need detailed pricing information (including all time-based tiers) for each station.

### Option A: Extract All Details at Once (Recommended)

1. **Open Tesla Find Us page**: https://www.tesla.com/findus
2. **Open Browser Console** (not DevTools Network tab):
   - Press `F12` → Click "Console" tab
3. **Run this script** - paste this entire code into the console:

```javascript
// States we want
const TARGET_STATES = ['NM', 'TX', 'CO'];

// Extract locations from page
const locations = [];
// Look for the window.SUPERCHARGER_DATA or similar global variable
// You might need to scroll the map to load all stations first

// Alternative: Extract from API response
fetch('https://www.tesla.com/api/findus/get-locations?country=US&view=map')
  .then(r => r.json())
  .then(async (allLocations) => {
    // Filter for our states and superchargers
    const targetLocations = allLocations.filter(loc => {
      const state = loc.address?.state || loc.supercharger_function?.address?.state;
      const isTarget = TARGET_STATES.includes(state);
      const isSupercharger = loc.location_type?.includes('supercharger') ||
                            loc.location_type?.includes('party') ||
                            loc.location_type?.includes('nacs');
      return isTarget && isSupercharger;
    });

    console.log(`Found ${targetLocations.length} stations in NM, TX, CO`);

    // Fetch details for each
    const allDetails = {};
    let count = 0;

    for (const loc of targetLocations) {
      try {
        const response = await fetch(`https://www.tesla.com/api/findus/get-charger-details?id=${loc.uuid}`);
        const data = await response.json();
        allDetails[loc.uuid] = data;
        count++;
        console.log(`${count}/${targetLocations.length}: ${loc.name}`);

        // Wait 500ms between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Failed for ${loc.name}:`, error);
      }
    }

    // Download all data as JSON files
    const blob1 = new Blob([JSON.stringify(allLocations, null, 2)], { type: 'application/json' });
    const url1 = URL.createObjectURL(blob1);
    const a1 = document.createElement('a');
    a1.href = url1;
    a1.download = 'raw-locations.json';
    a1.click();

    const blob2 = new Blob([JSON.stringify(allDetails, null, 2)], { type: 'application/json' });
    const url2 = URL.createObjectURL(blob2);
    const a2 = document.createElement('a');
    a2.href = url2;
    a2.download = 'raw-details-all.json';
    a2.click();

    console.log('✅ Downloads complete!');
    console.log(`📊 Total locations: ${allLocations.length}`);
    console.log(`📊 Target stations: ${targetLocations.length}`);
    console.log(`📊 Details fetched: ${Object.keys(allDetails).length}`);
  });
```

4. **Wait for downloads**:
   - The script will automatically download 2 files:
     - `raw-locations.json` - All US locations
     - `raw-details-all.json` - Detailed info for NM/TX/CO stations
   - Move both files to `backend/data/`

### Option B: Manual Download Per Station (Slower)

If the above script doesn't work:

1. **Get the list of station UUIDs**:
   - Extract the locations JSON as described in Step 1
   - Filter it manually or use the scraper to identify NM/TX/CO stations

2. **For each station**:
   - Open DevTools Network tab
   - Visit the Tesla Find Us page
   - Click on each station marker on the map
   - Look for the API call: `get-charger-details?id=<UUID>`
   - Copy the response
   - Save to: `backend/data/raw-details/<UUID>.json`

## Step 3: Process the Data

Once you have the files:

```bash
cd backend
node scraper-real-data.js
```

This will:
- Parse all location data
- Filter for NM, TX, CO superchargers only
- Extract pricing tiers from effectivePricebooks
- Parse vehicle compatibility
- Create `data/stations.json`

## Step 4: Import to Database

```bash
node database.js
```

This will:
- Create/reset the SQLite database
- Import all processed stations
- Store all pricing tiers

## Step 5: Restart and Test

```bash
# Start backend
node server.js

# Open frontend
cd ../frontend
# Open index.html in browser
```

You should now see ~187 stations for NM/TX/CO with complete pricing tier information!

## Expected Results

- **New Mexico**: ~20-30 stations
- **Texas**: ~120-140 stations
- **Colorado**: ~30-40 stations
- **Total**: ~187 stations

All stations should have complete pricing information including all time-based tiers (if available).
