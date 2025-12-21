# Tesla Supercharger Scraping Workflow

Clean, extensible workflow for fetching Tesla Supercharger station details.

## Quick Start

```bash
# Step 1: Discover stations based on config
node scraping/1-discover-stations.js

# Step 2: Generate browser fetch script
node scraping/2-generate-browser-script.js

# Step 3: Run browser script (manual)
# - Open https://www.tesla.com/findus
# - Paste scraping/browser-fetch-script.js in console
# - Copy output to data/raw-details-fetched.json

# Step 4: Merge with existing cache
node scraping/3-merge-details.js

# Step 5: Process for map
node process-stations-clean.js
```

## Configuration

Edit `scraping/config.js` to customize:

### Add New Regions

```javascript
regions: {
  TX: { latMin: 25.8, latMax: 36.5, lonMin: -106.6, lonMax: -93.5 },
  CA: { latMin: 32.5, latMax: 42.0, lonMin: -124.4, lonMax: -114.1 },  // Add CA
  // ... add more
}
```

### Change Charger Types

```javascript
chargerTypes: ['nacs', 'party', 'supercharger']  // Include all types
```

### Adjust API Settings

```javascript
api: {
  delayMs: 500  // Increase to avoid rate limiting
}
```

## Workflow Details

### Step 1: Discovery (1-discover-stations.js)

**What it does:**
- Loads `data/raw-locations.json` (all global Tesla locations)
- Filters by geographic coordinate boxes (from config)
- Filters by charger types (from config)
- Outputs `data/stations-to-fetch.json`

**Output format:**
```json
{
  "total": 223,
  "generated": "2025-12-20T...",
  "config": { ... },
  "regions": { "TX": 171, "NM": 6, "CO": 46 },
  "stations": [
    { "uuid": "...", "slug": "...", "lat": 35.1, "lon": -101.9 }
  ]
}
```

### Step 2: Generate Script (2-generate-browser-script.js)

**What it does:**
- Loads `data/stations-to-fetch.json`
- Generates `scraping/browser-fetch-script.js` with:
  - All stations to fetch
  - Progress tracking
  - Retry logic
  - Rate limiting
  - Checkpoint logging

**Why browser console?**
- Tesla API has bot detection
- Browser session bypasses it
- Simple copy/paste workflow
- Reliable and proven

### Step 3: Merge (3-merge-details.js)

**What it does:**
- Loads existing `data/raw-details-all.json` (if exists)
- Creates backup: `data/raw-details-all.backup.json`
- Merges newly fetched data from `data/raw-details-fetched.json`
- Updates existing stations (keeps cache fresh)
- Adds new stations
- Validates data quality
- Logs any fetch errors

**Merge behavior:**
- New stations: Added to cache
- Existing stations: Updated with new data
- Failed fetches: Logged but don't overwrite existing good data

## Extending for More Stations

### Example: Add California Stations

1. **Edit `scraping/config.js`:**

```javascript
regions: {
  TX: { latMin: 25.8, latMax: 36.5, lonMin: -106.6, lonMax: -93.5 },
  NM: { latMin: 31.3, latMax: 37.0, lonMin: -109.0, lonMax: -103.0 },
  CO: { latMin: 37.0, latMax: 41.0, lonMin: -109.0, lonMax: -102.0 },
  CA: { latMin: 32.5, latMax: 42.0, lonMin: -124.4, lonMax: -114.1 }  // NEW
}
```

2. **Run the workflow:**

```bash
node scraping/1-discover-stations.js
# Output: Found 500+ stations (includes CA now)

node scraping/2-generate-browser-script.js
# Generates script for all stations

# Run browser script...

node scraping/3-merge-details.js
# Merges CA stations with existing TX/NM/CO cache
```

3. **Update processing filter:**

Edit `process-stations-clean.js` line ~117:

```javascript
// OLD:
if (!['TX', 'NM', 'CO'].includes(state)) {

// NEW:
if (!['TX', 'NM', 'CO', 'CA'].includes(state)) {
```

### Example: Include All Supercharger Types

1. **Edit `scraping/config.js`:**

```javascript
chargerTypes: ['nacs', 'party', 'supercharger']
```

2. **Run discovery:**

```bash
node scraping/1-discover-stations.js
# Output: More stations found (includes regular superchargers)
```

3. **Update processing:**

Remove the charger type filter in `process-stations-clean.js` (lines 139-142)

## Incremental Updates

The workflow supports incremental updates without losing existing data:

```bash
# Week 1: Fetch TX stations
node scraping/1-discover-stations.js  # 171 stations
# ... run browser script ...
node scraping/3-merge-details.js      # Cache: 171 stations

# Week 2: Add CA, keep TX
# Edit config to include CA
node scraping/1-discover-stations.js  # 500+ stations (TX + CA)
# ... run browser script ...
node scraping/3-merge-details.js      # Cache: 500+ stations (merged)
```

The merge script:
- ✓ Keeps existing TX data
- ✓ Adds new CA data
- ✓ Updates any changed TX data
- ✓ Never deletes data (only adds/updates)

## File Paths

All paths are configured in `config.js` and relative to `backend/`:

- `data/raw-locations.json` - Source data (don't modify)
- `data/stations-to-fetch.json` - Generated discovery output
- `scraping/browser-fetch-script.js` - Generated browser script
- `data/raw-details-fetched.json` - Browser script output (manual)
- `data/raw-details-all.json` - Merged cache (main storage)
- `data/raw-details-all.backup.json` - Backup before merge
- `data/map-stations.json` - Processed output for frontend

## Error Handling

### Failed Fetches

If some stations fail to fetch:
1. They're logged in console
2. Saved to `data/fetch-errors.json`
3. Don't overwrite existing good data
4. Can retry later by re-running workflow

### Rate Limiting

If you hit rate limits:
1. Increase `api.delayMs` in config.js
2. The browser script has automatic retry with backoff
3. Wait 1-2 hours and resume

## Best Practices

1. **Always backup**: Merge script auto-creates backups
2. **Incremental updates**: Run workflow periodically to keep data fresh
3. **Test small first**: Start with one region, then expand
4. **Monitor console**: Watch for errors during browser fetch
5. **Keep config in sync**: Update processing script when changing config

## Troubleshooting

**Problem**: "Module not found" error
**Solution**: Run from `backend/` directory: `node scraping/1-discover-stations.js`

**Problem**: No stations found
**Solution**: Check coordinate bounds in config.js, verify raw-locations.json exists

**Problem**: Browser script fails
**Solution**: Ensure you're on https://www.tesla.com/findus, check console for errors

**Problem**: Merge fails
**Solution**: Verify raw-details-fetched.json exists and is valid JSON
