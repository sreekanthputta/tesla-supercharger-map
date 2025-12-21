# Tesla Supercharger Map

An interactive map application for finding Tesla Supercharger stations in New Mexico, Texas, and Colorado with detailed information and powerful filtering capabilities.

## Features

- **Interactive Map**: View all Supercharger stations on an interactive map
- **Hover Tooltips**: See station details by hovering over markers
- **Advanced Filters**:
  - Vehicle Type (Tesla, NACS Partner, Other EV)
  - States (NM, TX, CO)
  - Price Range
  - Peak Pricing Availability
- **Search**: Find stations by name, city, state, or ZIP code
- **Real-time Data**: Scraped directly from Tesla's API
- **Multi-threaded Scraping**: Fast parallel data fetching

## Live Demo

View the live application: **[Tesla Supercharger Map](https://sreekanthputta.github.io/tesla-supercharger-map/)**

The map is automatically deployed via GitHub Actions whenever changes are pushed to the main branch.

## Deployment

- **URL**: https://sreekanthputta.github.io/tesla-supercharger-map/
- **Source**: `frontend/` directory deployed as static site
- **Method**: Automated via GitHub Actions on push to main
- **Update Data**: Copy updated `map-stations.json` from backend/data/ to frontend/data/, commit, and push

## Project Structure

```
tesla-supercharger-map/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment
├── backend/
│   ├── data/
│   │   ├── map-stations.json   # Processed data (522KB)
│   │   └── raw-*.json          # Raw data (excluded from deployment)
│   ├── scraping/                # Data collection scripts
│   ├── server-simple.js         # Local dev server
│   └── package.json
├── frontend/                    # Deployed to GitHub Pages
│   ├── index.html
│   ├── app.js
│   ├── data/
│   │   └── map-stations.json   # Station data
│   └── .nojekyll
└── README.md
```

## Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd tesla-supercharger-map/backend
```

2. Install dependencies:
```bash
npm install
```

3. Run the scraper to fetch Tesla Supercharger data:
```bash
npm run scrape
```

This will:
- Fetch all US Tesla locations
- Filter for Superchargers in NM, TX, and CO
- Fetch detailed information for each station (prices, peak times, etc.)
- Save data to `data/stations.json`
- Use 10 parallel requests for fast scraping

4. Import data into the database:
```bash
node database.js
```

5. Start the API server:
```bash
npm start
```

The API will be available at `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd tesla-supercharger-map/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## API Endpoints

### GET /api/stations
Get all stations with optional filters.

**Query Parameters:**
- `state`: Comma-separated state codes (e.g., `NM,TX,CO`)
- `vehicle_type`: Comma-separated types (`tesla,nacs,other_ev`)
- `min_price`: Minimum price per kWh
- `max_price`: Maximum price per kWh
- `has_peak_pricing`: `true` or `false`

**Example:**
```bash
curl "http://localhost:3001/api/stations?state=CO&vehicle_type=tesla"
```

### GET /api/stations/:id
Get details for a specific station.

**Example:**
```bash
curl "http://localhost:3001/api/stations/19160"
```

### GET /api/filters
Get available filter options.

### GET /api/stats
Get statistics about stations.

### GET /api/health
Health check endpoint.

## Database Schema

The SQLite database contains a `stations` table with the following fields:

- **Location Info**: `location_id`, `name`, `address`, `city`, `state`, `zip`, `latitude`, `longitude`
- **Charger Details**: `total_stalls`, `available_stalls`, `site_closed`
- **Pricing**: `usd_per_kwh`, `peak_rate`, `off_peak_rate`, `peak_hours`
- **Compatibility**: `tesla_compatible`, `nacs_partner`, `other_ev`
- **Metadata**: `amenities`, `raw_data`, `last_updated`

## Usage

1. **View All Stations**: The map loads with all Superchargers in NM, TX, and CO
2. **Hover for Details**: Move your mouse over any marker to see station information
3. **Click for More**: Click markers for a persistent popup
4. **Filter**:
   - Select vehicle types you're interested in
   - Choose specific states
   - Set price range
   - Filter by peak pricing availability
   - Click "Apply Filters"
5. **Search**: Type in the search box to find specific stations by name or location
6. **Reset**: Click "Reset" to clear all filters

## Extending to Destination Chargers

To add Destination Chargers support:

1. Update `scraper.js`:
   - Modify the filter to include destination chargers:
   ```javascript
   const isCharger = location.location_type?.includes('supercharger') ||
                     location.location_type?.includes('destination charger');
   ```

2. Update the API URL in scraper:
   - For destination chargers, use:
   ```
   programType=destination_charger
   ```

3. Update the database schema to handle destination charger specific fields

4. Update the frontend UI to allow filtering between Superchargers and Destination Chargers

## Technologies Used

### Backend
- **Node.js**: Runtime environment
- **Express**: API server
- **Axios**: HTTP client for scraping
- **better-sqlite3**: Embedded database
- **p-limit**: Parallel request management

### Frontend
- **Vanilla JavaScript**: No framework overhead
- **Leaflet**: Interactive maps
- **Vite**: Fast development server
- **OpenStreetMap**: Map tiles

## Performance

- **Scraping Speed**: ~50-100 stations scraped in parallel within seconds
- **Database**: SQLite for fast queries and zero configuration
- **Map Rendering**: Efficient marker management with Leaflet
- **Filtering**: Real-time filtering with debounced search

## Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm run dev  # Hot reload enabled
```

### Re-scraping Data
To update the data:
```bash
cd backend
npm run scrape && node database.js
```

## Troubleshooting

### "Database not found" error
Make sure you've run the scraper and database import:
```bash
cd backend
npm run scrape
node database.js
```

### API 403 errors during scraping
The scraper uses browser-like headers. If Tesla blocks requests, try:
- Reducing the concurrent request limit in `scraper.js`
- Adding delays between requests
- Checking your IP isn't rate-limited

### Map not loading
- Ensure the backend API is running on port 3001
- Check browser console for CORS errors
- Verify the API_BASE_URL in `frontend/app.js`

### No stations displayed
- Check that filters aren't too restrictive
- Verify data was scraped for NM, TX, CO
- Check browser console for errors

## License

MIT

## Notes

- Data is scraped from Tesla's public API
- Prices and availability are subject to change
- This is an educational project demonstrating web scraping, APIs, and interactive maps
- Not affiliated with Tesla, Inc.
