import Database from 'better-sqlite3';
import fs from 'fs';

const db = new Database('./data/stations.db');

// Create tables
function initDatabase() {
  console.log('Initializing database...');

  // Stations table
  db.exec(`
    CREATE TABLE IF NOT EXISTS stations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      location_id TEXT UNIQUE NOT NULL,
      location_slug TEXT,
      name TEXT NOT NULL,
      address_line1 TEXT,
      address_line2 TEXT,
      city TEXT,
      state TEXT NOT NULL,
      zip TEXT,
      country TEXT,
      latitude REAL NOT NULL,
      longitude REAL NOT NULL,
      location_type TEXT,
      open_soon INTEGER DEFAULT 0,
      coming_soon INTEGER DEFAULT 0,

      -- Charger details
      total_stalls INTEGER,
      available_stalls INTEGER,
      site_closed INTEGER DEFAULT 0,

      -- Amenities
      amenities TEXT,

      -- Pricing
      pricing_type TEXT,
      pricing_notes TEXT,
      usd_per_kwh REAL,
      peak_rate REAL,
      off_peak_rate REAL,
      peak_hours TEXT,
      pricing_tiers TEXT, -- JSON array of all pricing tiers with times

      -- Vehicle compatibility
      tesla_compatible INTEGER DEFAULT 1,
      nacs_partner INTEGER DEFAULT 0,
      other_ev INTEGER DEFAULT 0,

      -- Additional info
      raw_data TEXT,
      last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log('Database initialized successfully!');
}

function importStationsFromJSON() {
  const jsonPath = './data/stations.json';

  if (!fs.existsSync(jsonPath)) {
    console.error('stations.json not found. Please run scraper first.');
    return;
  }

  console.log('Loading stations from JSON...');
  const stations = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  console.log(`Importing ${stations.length} stations...`);

  const insert = db.prepare(`
    INSERT OR REPLACE INTO stations (
      location_id, location_slug, name, address_line1, address_line2,
      city, state, zip, country, latitude, longitude, location_type,
      open_soon, coming_soon, total_stalls, available_stalls,
      site_closed, amenities, pricing_type, pricing_notes,
      usd_per_kwh, peak_rate, off_peak_rate, peak_hours, pricing_tiers,
      tesla_compatible, nacs_partner, other_ev, raw_data
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
  `);

  let imported = 0;

  for (const station of stations) {
    try {
      const details = station.details || {};
      const address = station.address || {};

      // Extract pricing info
      let pricingType = null;
      let usdPerKwh = null;
      let peakRate = null;
      let offPeakRate = null;
      let peakHours = null;
      let pricingTiers = null;

      if (details.pricing) {
        pricingType = details.pricing.type;

        if (details.pricing.rates) {
          usdPerKwh = details.pricing.rates.usd_per_kwh;
          peakRate = details.pricing.rates.peak_usd_per_kwh;
          offPeakRate = details.pricing.rates.off_peak_usd_per_kwh;
          peakHours = details.pricing.rates.peak_hours;
        }

        // Store all pricing tiers if available
        if (details.pricing.tiers) {
          pricingTiers = JSON.stringify(details.pricing.tiers);
        }
      }

      // Determine vehicle compatibility
      const teslaCompatible = 1;
      const nacsPartner = details.nacs_partner || 0;
      const otherEv = details.other_ev_support || 0;

      insert.run(
        station.location_id || '',
        station.location_slug || '',
        station.name || '',
        address.line1 || '',
        address.line2 || '',
        address.city || '',
        address.state || '',
        address.zip || '',
        address.country || 'US',
        station.latitude || 0,
        station.longitude || 0,
        station.location_type?.join(', ') || '',
        station.open_soon ? 1 : 0,
        station.coming_soon ? 1 : 0,
        details.total_stalls || 0,
        details.available_stalls || 0,
        details.site_closed ? 1 : 0,
        details.amenities ? JSON.stringify(details.amenities) : null,
        pricingType,
        details.pricing?.notes || null,
        usdPerKwh,
        peakRate,
        offPeakRate,
        peakHours,
        pricingTiers,
        teslaCompatible,
        nacsPartner,
        otherEv,
        JSON.stringify(station)
      );

      imported++;
    } catch (error) {
      console.error(`Error importing station ${station.location_id}:`, error.message);
    }
  }

  console.log(`Successfully imported ${imported} stations!`);
}

// Initialize and import
initDatabase();
importStationsFromJSON();

// Close database
db.close();
console.log('Database closed.');
