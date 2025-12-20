# API Response Caching Guide

## Overview

All Tesla API responses are automatically cached in `data/stations.json` so you can extract additional fields later without re-fetching from the API.

## Cached Data Structure

Each station in `stations.json` contains:

```json
{
  "location_id": "32790069",
  "name": "Plano, TX",
  "latitude": 33.037701,
  "longitude": -96.707066,

  // ... currently extracted fields ...

  "raw_location_data": { /* Complete response from get-locations */ },
  "raw_details_data": { /* Complete response from get-charger-details */ }
}
```

## Why Cache?

1. **Avoid Re-fetching**: Tesla's API has rate limits and bot detection
2. **Quick Iterations**: Add new features without waiting for scraping
3. **Data Exploration**: Discover available fields without API access
4. **Version Control**: Track what data was available when

## Workflow

### 1. Initial Data Collection

```bash
# Fetch all data from browser (one time)
# Run EXTRACT_DATA_SCRIPT_FIXED.js in browser console
# This caches all raw responses
```

### 2. Inspect Available Fields

```bash
# See what fields are available in cached data
node inspect-cached-data.js
```

This shows you:
- Sample raw API responses
- All available fields
- Currently extracted fields
- Suggestions for new fields

### 3. Extract New Fields

Edit `re-extract-from-cache.js`:

```javascript
function extractNewFields(station) {
  const updates = {};

  // Extract from raw_location_data
  if (station.raw_location_data) {
    const loc = station.raw_location_data;

    // Your new fields here
    updates.coming_soon = loc.supercharger_function?.coming_soon;
    updates.access_type = loc.supercharger_function?.access_type;
  }

  // Extract from raw_details_data
  if (station.raw_details_data) {
    const details = station.raw_details_data;

    // Your new fields here
    updates.max_power_kw = details.maxPowerKw;
    updates.hours = details.hours;
    updates.directions_link = details.directionsLink;
  }

  return updates;
}
```

Then run:

```bash
node re-extract-from-cache.js
```

### 4. Update Database Schema

Edit `database.js` to add new columns:

```javascript
db.exec(`
  CREATE TABLE IF NOT EXISTS stations (
    -- ... existing columns ...

    -- New columns
    max_power_kw INTEGER,
    hours TEXT,
    directions_link TEXT,

    -- ...
  )
`);
```

And update the insert statement:

```javascript
const insert = db.prepare(`
  INSERT OR REPLACE INTO stations (
    -- ... existing fields ...
    max_power_kw, hours, directions_link
  ) VALUES (
    -- ... existing values ...
    ?, ?, ?
  )
`);

// In the loop:
insert.run(
  // ... existing values ...
  station.max_power_kw || null,
  station.hours || null,
  station.directions_link || null
);
```

### 5. Rebuild Database

```bash
rm -f data/stations.db
node database.js
```

### 6. Update API/Frontend

Update `server.js` and `frontend/app.js` to use the new fields.

## Example: Adding Operating Hours

### Step 1: Check if field exists

```bash
node inspect-cached-data.js
```

Look for `hours` in the output.

### Step 2: Extract it

Edit `re-extract-from-cache.js`:

```javascript
function extractNewFields(station) {
  const updates = {};

  if (station.raw_details_data?.hours) {
    updates.operating_hours = station.raw_details_data.hours;
  }

  return updates;
}
```

Run:
```bash
node re-extract-from-cache.js
```

### Step 3: Add to database

Add to schema:
```sql
operating_hours TEXT
```

Add to insert.

### Step 4: Show in frontend

Update tooltip:
```javascript
if (station.operating_hours) {
  html += `<div>Hours: ${station.operating_hours}</div>`;
}
```

## Available Fields Reference

### From raw_location_data

- `uuid` - Unique station ID
- `latitude`, `longitude` - Coordinates
- `location_type` - Array: ['supercharger'], ['nacs'], ['party']
- `location_url_slug` - URL-friendly identifier
- `supercharger_function`:
  - `coming_soon_name` - Display name
  - `access_type` - "Public", "Private", etc.
  - `open_to_non_tesla` - Boolean
  - `charging_accessibility` - "Tesla Only", "NACS Partner", "All Vehicles"
  - `site_status` - "open", "coming_soon", etc.
  - `project_status` - Current status
  - `vote_winner_quarter` - Community vote info

### From raw_details_data

- `publicStallCount` - Number of charging stalls
- `amenities` - Array of amenity codes
- `amenitiesDetails` - Detailed amenity info
- `maxPowerKw` - Maximum charging power
- `chargerType` - Type of chargers
- `hours` - Operating hours
- `siteDescription` - Description text
- `address` - Full address details
  - `street`, `city`, `state`, `postalCode`
- `directionsLink` - Google Maps URL
- `effectivePricebooks` - Complete pricing data
  - `vehicleMakeType` - "TSLA" or "NTSLA"
  - `isTou` - Time-of-use pricing
  - `rateBase` - Price per kWh
  - `startTime`, `endTime` - Pricing period

## Best Practices

1. **Always inspect first** - Run `inspect-cached-data.js` before extracting
2. **Test on sample** - Test extraction on one station before processing all
3. **Version control** - Commit `stations.json` so you have the raw data
4. **Document fields** - Add comments explaining what each field means
5. **Handle nulls** - Not all stations have all fields, always check
6. **Keep raw data** - Don't delete `raw_location_data` and `raw_details_data`

## Troubleshooting

**Q: Field is undefined for some stations**
A: Not all stations have all fields. Always use optional chaining (`?.`) and provide defaults.

**Q: I want to re-fetch from API**
A: Run the browser script again. It will overwrite cached data.

**Q: stations.json is too large**
A: This is normal (~10-20MB with cached responses). The raw data is valuable for future features.

**Q: Can I delete raw_location_data and raw_details_data?**
A: Yes, but you'll need to re-fetch from API to add new features later.

## Quick Reference

```bash
# Inspect available fields
node inspect-cached-data.js

# Extract new fields from cache
node re-extract-from-cache.js

# Rebuild database with new fields
rm -f data/stations.db && node database.js

# Restart server
pkill -f "node server.js" && node server.js
```

## Cache Files

- `data/raw-locations.json` - Complete get-locations response (all 23K+ locations)
- `data/raw-details-all.json` - get-charger-details responses (keyed by UUID)
- `data/stations.json` - Processed stations with cached raw responses
- `data/stations.db` - SQLite database (can be regenerated)

Keep the first 3, you can always regenerate the database from them!
