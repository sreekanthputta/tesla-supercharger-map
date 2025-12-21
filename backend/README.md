# Tesla Supercharger Backend

Backend services for the Tesla Supercharger map application.

## Quick Start

```bash
# Start the web server
node server-simple.js

# Open browser to http://localhost:3001
```

## Components

### 1. Data Scraping (`scraping/`)

Extensible workflow for fetching station data from Tesla's API.

**📚 Full Documentation**: See `scraping/README.md`
**📖 Examples**: See `scraping/EXAMPLES.md`

**Quick workflow:**

```bash
node scraping/1-discover-stations.js      # Find stations
node scraping/2-generate-browser-script.js # Generate fetch script
# Run browser script manually...
node scraping/3-merge-details.js          # Merge with cache
node process-stations-clean.js            # Process for map
```

**To extend**: Edit `scraping/config.js` to add regions or charger types

### 2. Data Processing (`process-stations-clean.js`)

Processes raw station details into map-ready format:
- Filters by state and charger type
- Parses pricing (time-of-use and flat-rate)
- Extracts amenities and congestion data
- Outputs `data/map-stations.json`

```bash
node process-stations-clean.js
```

### 3. Web Server (`server-simple.js`)

Serves the frontend map application and data files.

```bash
node server-simple.js
# Server running on http://localhost:3001
```

## File Structure

```
backend/
├── scraping/                        # Data collection workflow
│   ├── config.js                    # Configuration (regions, types, API)
│   ├── 1-discover-stations.js       # Step 1: Find stations
│   ├── 2-generate-browser-script.js # Step 2: Generate fetch script
│   ├── 3-merge-details.js           # Step 3: Merge with cache
│   ├── browser-fetch-script.js      # Generated (run in browser)
│   ├── README.md                    # Full scraping docs
│   └── EXAMPLES.md                  # Extension examples
├── process-stations-clean.js        # Process raw → map format
├── server-simple.js                 # Web server
├── package.json
└── data/
    ├── raw-locations.json           # Source: all Tesla locations
    ├── stations-to-fetch.json       # Generated: stations to fetch
    ├── raw-details-all.json         # Cache: fetched station details
    └── map-stations.json            # Output: processed for frontend
```

## Current Data

**Regions**: Texas, Colorado, New Mexico
**Charger Types**: NACS, Party
**Stations**: 207 total
- TX: 149 stations
- CO: 46 stations
- NM: 12 stations

## Common Tasks

### Fetch New Stations

```bash
node scraping/1-discover-stations.js
node scraping/2-generate-browser-script.js
# Run browser script, save to data/raw-details-fetched.json
node scraping/3-merge-details.js
node process-stations-clean.js
```

### Add New Region (e.g., California)

1. Edit `scraping/config.js`:
   ```javascript
   regions: {
     TX: { ... },
     CA: { latMin: 32.5, latMax: 42.0, lonMin: -124.4, lonMax: -114.1 }
   }
   ```

2. Update `process-stations-clean.js` line ~117:
   ```javascript
   if (!['TX', 'NM', 'CO', 'CA'].includes(state)) {
   ```

3. Run workflow (see above)

### Update Existing Data

Same commands as "Fetch New Stations" - the merge script will:
- Update pricing (if changed)
- Add new stations
- Keep existing data

### Restart Server

```bash
lsof -ti:3001 | xargs kill -9
node server-simple.js
```

## Dependencies

```bash
npm install
# Installs: express, cors
```

## Notes

- **Browser script required**: Tesla's API blocks automated requests, so manual browser console step is necessary
- **Incremental merging**: The workflow never deletes data, only adds/updates
- **Extensible config**: All regions and types are in `scraping/config.js`
- **Backup automatic**: Merge script creates backups before updating cache

## Troubleshooting

**"Module not found"**
→ Run from `backend/` directory

**"No stations found"**
→ Check `scraping/config.js` coordinate bounds

**"Cannot find raw-details-fetched.json"**
→ Must run browser script and save output manually

**Stations missing pricing**
→ Already fixed! Processing includes both time-of-use and flat-rate pricing
