import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import fs from 'fs';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
let db;

function initDB() {
  if (!fs.existsSync('./data/stations.db')) {
    console.error('Database not found. Please run: npm run scrape && node database.js');
    process.exit(1);
  }
  db = new Database('./data/stations.db', { readonly: true });
  console.log('Database connected');
}

// API Routes

// Get all stations with optional filters
app.get('/api/stations', (req, res) => {
  try {
    const {
      state,
      vehicle_type,
      min_price,
      max_price,
      has_peak_pricing
    } = req.query;

    let query = 'SELECT * FROM stations WHERE 1=1';
    const params = [];

    // Filter by state
    if (state) {
      const states = state.split(',');
      query += ` AND state IN (${states.map(() => '?').join(',')})`;
      params.push(...states);
    }

    // Filter by vehicle type
    // If no types selected, show all. If types selected, show only matching stations
    if (vehicle_type) {
      const types = vehicle_type.split(',');
      const conditions = [];

      // Build conditions: station must match AT LEAST ONE selected type
      if (types.includes('tesla')) {
        conditions.push('tesla_compatible = 1');
      }
      if (types.includes('nacs')) {
        conditions.push('nacs_partner = 1');
      }
      if (types.includes('other_ev')) {
        conditions.push('other_ev = 1');
      }

      if (conditions.length > 0) {
        query += ` AND (${conditions.join(' OR ')})`;
      }
    }

    // Filter by price range
    if (min_price) {
      query += ' AND (usd_per_kwh >= ? OR off_peak_rate >= ?)';
      params.push(parseFloat(min_price), parseFloat(min_price));
    }

    if (max_price) {
      query += ' AND (usd_per_kwh <= ? OR peak_rate <= ?)';
      params.push(parseFloat(max_price), parseFloat(max_price));
    }

    // Filter by peak pricing availability
    if (has_peak_pricing === 'true') {
      query += ' AND peak_rate IS NOT NULL';
    } else if (has_peak_pricing === 'false') {
      query += ' AND peak_rate IS NULL';
    }

    const stmt = db.prepare(query);
    const stations = stmt.all(...params);

    // Parse JSON fields
    const parsedStations = stations.map(station => ({
      ...station,
      amenities: station.amenities ? JSON.parse(station.amenities) : null,
      location_type: station.location_type ? station.location_type.split(', ') : [],
      pricing_tiers: station.pricing_tiers ? JSON.parse(station.pricing_tiers) : null
    }));

    res.json({
      count: parsedStations.length,
      stations: parsedStations
    });
  } catch (error) {
    console.error('Error fetching stations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single station by ID
app.get('/api/stations/:id', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM stations WHERE location_id = ?');
    const station = stmt.get(req.params.id);

    if (!station) {
      return res.status(404).json({ error: 'Station not found' });
    }

    // Parse JSON fields
    station.amenities = station.amenities ? JSON.parse(station.amenities) : null;
    station.location_type = station.location_type ? station.location_type.split(', ') : [];
    station.raw_data = station.raw_data ? JSON.parse(station.raw_data) : null;

    res.json(station);
  } catch (error) {
    console.error('Error fetching station:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get filter options (for UI)
app.get('/api/filters', (req, res) => {
  try {
    // Get unique states
    const states = db.prepare('SELECT DISTINCT state FROM stations ORDER BY state').all();

    // Get price range
    const priceRange = db.prepare(`
      SELECT
        MIN(COALESCE(usd_per_kwh, off_peak_rate)) as min_price,
        MAX(COALESCE(peak_rate, usd_per_kwh)) as max_price
      FROM stations
      WHERE usd_per_kwh IS NOT NULL OR off_peak_rate IS NOT NULL
    `).get();

    // Get vehicle type counts
    const vehicleTypes = db.prepare(`
      SELECT
        SUM(tesla_compatible) as tesla_count,
        SUM(nacs_partner) as nacs_count,
        SUM(other_ev) as other_ev_count
      FROM stations
    `).get();

    res.json({
      states: states.map(s => s.state),
      priceRange: priceRange,
      vehicleTypes: vehicleTypes
    });
  } catch (error) {
    console.error('Error fetching filters:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Stats endpoint
app.get('/api/stats', (req, res) => {
  try {
    const stats = db.prepare(`
      SELECT
        COUNT(*) as total_stations,
        SUM(total_stalls) as total_stalls,
        AVG(usd_per_kwh) as avg_price,
        COUNT(CASE WHEN peak_rate IS NOT NULL THEN 1 END) as stations_with_peak_pricing
      FROM stations
    `).get();

    const byState = db.prepare(`
      SELECT state, COUNT(*) as count
      FROM stations
      GROUP BY state
      ORDER BY count DESC
    `).all();

    res.json({
      overall: stats,
      byState: byState
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
initDB();

app.listen(PORT, () => {
  console.log(`\n🚀 Tesla Supercharger API server running on http://localhost:${PORT}`);
  console.log(`\nAvailable endpoints:`);
  console.log(`  GET /api/stations - Get all stations with filters`);
  console.log(`  GET /api/stations/:id - Get single station details`);
  console.log(`  GET /api/filters - Get available filter options`);
  console.log(`  GET /api/stats - Get statistics`);
  console.log(`  GET /api/health - Health check\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Closing database connection...');
  db.close();
  process.exit(0);
});
