# Quick Start Guide

## Fast Setup (3 steps)

### 1. Install Backend Dependencies
```bash
cd tesla-supercharger-map/backend
npm install
```

### 2. Scrape Data & Setup Database
```bash
npm run scrape
node database.js
```

This will:
- Initialize a session with Tesla's website to get cookies
- Fetch all Supercharger locations in NM, TX, and CO
- Scrape detailed information for each station (using 10 parallel requests)
- Save everything to a SQLite database

Expected time: ~30 seconds - 2 minutes depending on your connection

### 3. Start Backend API
```bash
npm start
```

API will run on http://localhost:3001

---

### 4. Install Frontend Dependencies (New Terminal)
```bash
cd tesla-supercharger-map/frontend
npm install
```

### 5. Start Frontend
```bash
npm run dev
```

App will open at http://localhost:3000

---

## What You'll See

The scraper will show progress like this:
```
Starting Tesla Supercharger scraper...

Initializing session with Tesla website...
Session initialized successfully!
Fetching all Tesla locations...
Total locations fetched: 2847
Superchargers in NM, TX, CO: 187

Fetching detailed information for each station...
Using parallel requests for faster scraping...

Progress: 187/187 (100.0%)

Scraping completed!

Data saved to: ./data/stations.json
Total stations scraped: 187

Summary by state:
  NM: 25 stations
  TX: 118 stations
  CO: 44 stations

✓ Scraping finished successfully!
```

## Features You Can Use

1. **View Map** - See all stations on interactive map
2. **Hover Markers** - Get station info on hover
3. **Filter by Vehicle Type** - Tesla, NACS Partner, Other EV
4. **Filter by State** - NM, TX, CO
5. **Filter by Price** - Set min/max $/kWh
6. **Peak Pricing Filter** - Find stations with/without peak pricing
7. **Search** - Find stations by name, city, or ZIP

## Troubleshooting

### If scraping fails with 403 errors:
The scraper now properly handles cookies, but if you still get errors:
- Try running the scraper again (cookies may have expired)
- Reduce concurrent requests in `scraper.js` (change `pLimit(10)` to `pLimit(5)`)

### If "Database not found":
Make sure you ran both commands:
```bash
npm run scrape
node database.js
```

### If map doesn't load:
- Check that backend is running on port 3001
- Open browser console to see any errors
- Make sure both backend and frontend are running

## Re-scraping Data

To update with fresh data:
```bash
cd backend
npm run scrape
node database.js
```

The API will automatically use the updated database.

## API Examples

Get all stations:
```bash
curl http://localhost:3001/api/stations
```

Filter by state:
```bash
curl "http://localhost:3001/api/stations?state=TX"
```

Filter by vehicle type and price:
```bash
curl "http://localhost:3001/api/stations?vehicle_type=tesla&max_price=0.35"
```

Get statistics:
```bash
curl http://localhost:3001/api/stats
```
