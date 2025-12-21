# Scraping Examples

Common scenarios for extending the scraping workflow.

## Example 1: Add California Stations

### Step 1: Update Config

Edit `scraping/config.js`:

```javascript
export const CONFIG = {
  regions: {
    TX: { latMin: 25.8, latMax: 36.5, lonMin: -106.6, lonMax: -93.5 },
    NM: { latMin: 31.3, latMax: 37.0, lonMin: -109.0, lonMax: -103.0 },
    CO: { latMin: 37.0, latMax: 41.0, lonMin: -109.0, lonMax: -102.0 },
    CA: { latMin: 32.5, latMax: 42.0, lonMin: -124.4, lonMax: -114.1 }  // ADD THIS
  },
  chargerTypes: ['nacs', 'party'],
  // ... rest of config
};
```

### Step 2: Run Workflow

```bash
node scraping/1-discover-stations.js
# Output: Found ~400 stations (TX: 171, CO: 46, NM: 6, CA: ~180)

node scraping/2-generate-browser-script.js
# Generates script for all 400 stations

# Open browser, run script, save output to data/raw-details-fetched.json

node scraping/3-merge-details.js
# Merges CA stations with existing cache
# Output: New stations added: 180, Existing updated: 220
```

### Step 3: Update Processing

Edit `process-stations-clean.js` line ~117:

```javascript
if (!['TX', 'NM', 'CO', 'CA'].includes(state)) {
  excluded.wrongState++;
  continue;
}
```

### Step 4: Process and View

```bash
node process-stations-clean.js
# Output: Processed 380+ stations (TX: 149, CO: 46, NM: 12, CA: 175+)

# Restart server
lsof -ti:3001 | xargs kill -9; node server-simple.js &
```

---

## Example 2: Include All Supercharger Types

Want to show ALL superchargers, not just NACS/party?

### Update Config

Edit `scraping/config.js`:

```javascript
chargerTypes: ['nacs', 'party', 'supercharger']  // Added 'supercharger'
```

### Update Processing

Edit `process-stations-clean.js`, remove lines 139-142:

```javascript
// REMOVE THIS:
// Only include NACS and party chargers (exclude regular superchargers)
if (chargerType !== 'nacs' && chargerType !== 'party') {
  excluded.destination++;
  continue;
}
```

### Run Workflow

```bash
node scraping/1-discover-stations.js
# Output: Found 973 stations (includes all superchargers now)

node scraping/2-generate-browser-script.js
# ... run browser script ...

node scraping/3-merge-details.js
node process-stations-clean.js
```

---

## Example 3: Weekly Data Updates

Keep your data fresh with weekly updates:

### Week 1 (Initial)

```bash
node scraping/1-discover-stations.js
# ... browser fetch ...
node scraping/3-merge-details.js
# Cache: 223 stations
```

### Week 2 (Update)

```bash
# Same commands - fetches all stations again
node scraping/1-discover-stations.js
node scraping/2-generate-browser-script.js
# ... browser fetch ...
node scraping/3-merge-details.js
# Output:
#   New stations added: 5 (new stations opened)
#   Existing updated: 218 (refreshed prices, amenities)
#   Total in cache: 228
```

The merge script:
- ✓ Updates pricing (prices change over time)
- ✓ Updates amenities (stations add facilities)
- ✓ Adds new stations (Tesla opens new ones)
- ✓ Never deletes data (keeps historical info)

---

## Example 4: Fetch Only New Stations

Want to fetch ONLY stations not in cache?

### Create Custom Discovery Script

Create `scraping/1-discover-new-only.js`:

```javascript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG, getRegion, hasDesiredChargerType } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load existing cache
const existingCache = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', CONFIG.paths.detailsCache), 'utf-8')
);
const existingUuids = new Set(Object.keys(existingCache));

// Load raw locations
const rawLocations = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', CONFIG.paths.rawLocations), 'utf-8')
);

// Filter for NEW stations only
const newStations = rawLocations.filter(location => {
  if (existingUuids.has(location.uuid)) return false;  // Already cached
  if (!getRegion(location.latitude, location.longitude)) return false;
  return hasDesiredChargerType(location.location_type);
});

console.log(`Found ${newStations.length} NEW stations to fetch`);

// Save output
const output = {
  total: newStations.length,
  generated: new Date().toISOString(),
  note: 'Only includes stations not in cache',
  stations: newStations.map(loc => ({
    uuid: loc.uuid,
    slug: loc.location_url_slug,
    lat: loc.latitude,
    lon: loc.longitude
  }))
};

fs.writeFileSync(
  path.join(__dirname, '..', CONFIG.paths.stationsToFetch),
  JSON.stringify(output, null, 2)
);
```

### Run It

```bash
node scraping/1-discover-new-only.js
# Output: Found 5 NEW stations to fetch (instead of 223)

node scraping/2-generate-browser-script.js
# Generates script for only 5 stations (much faster!)
```

---

## Example 5: Multi-Region Staged Rollout

Fetch regions one at a time, then combine:

### Stage 1: Texas Only

```javascript
// config.js
regions: { TX: { ... } }
```

```bash
node scraping/1-discover-stations.js  # 171 stations
# ... fetch ...
node scraping/3-merge-details.js      # Cache: 171
```

### Stage 2: Add Colorado

```javascript
// config.js
regions: {
  TX: { ... },
  CO: { ... }  // ADD
}
```

```bash
node scraping/1-discover-stations.js  # 217 stations (TX + CO)
# ... fetch ...
node scraping/3-merge-details.js      # Cache: 217 (merged)
```

### Stage 3: Add New Mexico

```javascript
// config.js
regions: {
  TX: { ... },
  CO: { ... },
  NM: { ... }  // ADD
}
```

```bash
node scraping/1-discover-stations.js  # 223 stations (all 3)
# ... fetch ...
node scraping/3-merge-details.js      # Cache: 223 (merged)
```

**Benefit**: Smaller fetches, easier to debug, incremental progress.

---

## Example 6: Custom API Parameters

Want to fetch data in a different locale?

### Update Config

```javascript
// config.js
api: {
  endpoint: 'https://www.tesla.com/api/findus/get-charger-details',
  params: {
    programType: 'supercharger',
    locale: 'es-MX',  // Spanish/Mexico
    isInHkMoTw: false
  },
  delayMs: 500
}
```

The generated browser script will use Spanish locale.

---

## Example 7: Export Stations List

Want a CSV of all stations for analysis?

Create `scraping/export-csv.js`:

```javascript
import fs from 'fs';

const details = JSON.parse(fs.readFileSync('./data/raw-details-all.json', 'utf-8'));

const rows = [['UUID', 'Name', 'State', 'City', 'Lat', 'Lon', 'Stalls', 'Open to Non-Tesla']];

for (const [uuid, wrapper] of Object.entries(details)) {
  if (!wrapper.success) continue;
  const data = wrapper.data?.data?.data || wrapper.data?.data;
  if (!data) continue;

  rows.push([
    uuid,
    data.name,
    data.address?.state,
    data.address?.city,
    data.entryPoint?.latitude,
    data.entryPoint?.longitude,
    data.publicStallCount,
    data.openToNonTeslas
  ]);
}

const csv = rows.map(row => row.join(',')).join('\n');
fs.writeFileSync('./data/stations-export.csv', csv);
console.log('Exported to data/stations-export.csv');
```

```bash
node scraping/export-csv.js
# Opens in Excel/Numbers
```

---

## Tips

1. **Start small**: Test with one region first
2. **Backup often**: Merge script auto-creates backups
3. **Monitor cache size**: `du -h data/raw-details-all.json`
4. **Check errors**: Review `data/fetch-errors.json` after merge
5. **Incremental is safer**: Add regions one at a time
