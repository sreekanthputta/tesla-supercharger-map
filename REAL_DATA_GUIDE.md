# How to Get Real Tesla Supercharger Data

Since Tesla's API blocks automated scraping, you need to manually extract the data from your browser. This takes about 5-10 minutes.

## Step 1: Get Locations Data

1. **Open Tesla's website:**
   - Go to https://www.tesla.com/findus
   - Wait for the map to load completely

2. **Open DevTools:**
   - Press `F12` or `Cmd+Option+I` (Mac)
   - Click the **Network** tab

3. **Find the API call:**
   - Look for a request named `get-locations?country=US&view=map`
   - Click on it
   - Click the **Response** tab

4. **Copy the data:**
   - Right-click in the response area
   - Select "Copy value" or "Copy response"
   - Or select all (Cmd+A) and copy (Cmd+C)

5. **Save the file:**
   ```bash
   # Create directory
   mkdir -p backend/data/raw-details

   # Paste the copied JSON into this file
   nano backend/data/raw-locations.json
   # (Or use any text editor)
   ```

## Step 2: Get Charger Details (Optional but Recommended)

For detailed pricing and amenities data for each station:

1. **In Tesla's website:**
   - Click on a station marker on the map
   - This loads the charger details

2. **In DevTools Network tab:**
   - Find the `get-charger-details?locationSlug=...` request
   - Copy the response JSON

3. **Save with station ID as filename:**
   ```bash
   # Replace STATION_ID with the actual UUID from the response
   nano backend/data/raw-details/STATION_ID.json
   ```

4. **Repeat for multiple stations:**
   - You don't need ALL stations
   - Get at least 10-20 representative ones
   - Focus on NM, TX, CO states

### Quick Method for Multiple Stations:

Instead of clicking each station individually:

1. **Use browser console:**
   - Open Console tab in DevTools
   - Paste this script:
   ```javascript
   // This will log all API calls
   const originalFetch = window.fetch;
   window.fetch = async (...args) => {
     const response = await originalFetch(...args);
     const url = args[0];

     if (url.includes('get-charger-details')) {
       const clone = response.clone();
       const data = await clone.json();
       console.log('STATION_DATA:', JSON.stringify(data));
     }

     return response;
   };
   ```

2. **Click stations:**
   - Click on various station markers
   - Each click will log the data to console
   - Copy the logged JSON data

3. **Save each one:**
   - Look for the `uuid` or `location_id` in the data
   - Save to `backend/data/raw-details/{uuid}.json`

## Step 3: Process the Data

Once you have the raw JSON files:

```bash
cd backend
node scraper-real-data.js
```

This will:
- ✅ Parse all locations
- ✅ Filter for NM, TX, CO
- ✅ Extract vehicle compatibility
- ✅ Parse pricing (peak/off-peak)
- ✅ Extract amenities
- ✅ Save to `data/stations.json`

## Step 4: Import to Database

```bash
node database.js
```

This creates the SQLite database from the processed data.

## Step 5: Restart Backend

```bash
npm start
```

Your map will now show real data!

---

## What Data Gets Extracted

### Vehicle Compatibility:
- **Tesla**: Always supported (all superchargers)
- **NACS Partner**: From `charging_accessibility` or `location_type: ["nacs"]`
- **Other EV**: From `open_to_non_tesla: true` or `charging_accessibility: "All Vehicles"`

### Pricing:
- **Flat rate**: Single `rateBase` value
- **Peak/Off-peak**: From Time-of-Use (TOU) pricebooks
- **Peak hours**: Extracted from TOU time ranges

### Other Data:
- Station name and address
- Coordinates (lat/long)
- Stall count
- Amenities
- Access hours
- Max power (kW)

---

## Troubleshooting

### "raw-locations.json not found"
Make sure you saved the file in the correct location:
```
backend/data/raw-locations.json
```

### "No stations found"
Check that the JSON is valid. It should be an array:
```json
[
  { "latitude": ..., "location_type": [...], ... },
  { ... }
]
```

### "Details not found"
Details files are optional. The script will work with just locations data, but you'll miss pricing information.

---

## Alternative: Use Sample Data

If you don't want to extract real data, the application works fine with the sample data already provided. Just use it to test the features!

---

## Example File Structure

```
backend/
├── data/
│   ├── raw-locations.json          # All US locations from API
│   ├── raw-details/                # Detailed data per station
│   │   ├── 12915005.json          # Georgetown, TX
│   │   ├── 58900.json             # Amarillo, TX
│   │   └── ...
│   ├── stations.json               # Processed data (auto-generated)
│   └── stations.db                 # SQLite database (auto-generated)
└── scraper-real-data.js
```

---

## Tips

1. **Start small**: Extract 5-10 stations first to test
2. **Focus on one state**: Get all TX stations first, then expand
3. **Use console script**: The fetch interceptor makes it easier
4. **Check validity**: Make sure JSON is properly formatted
5. **Backup files**: Keep copies of your raw data files

---

Good luck! Once you have real data, the filters will work perfectly with actual vehicle compatibility information! 🚗⚡
