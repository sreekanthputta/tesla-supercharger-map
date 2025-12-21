/**
 * Scraping Configuration
 *
 * Modify these settings to scrape different regions or types
 */

export const CONFIG = {
  // Geographic regions to scrape
  regions: {
    TX: { latMin: 25.8, latMax: 36.5, lonMin: -106.6, lonMax: -93.5 },
    NM: { latMin: 31.3, latMax: 37.0, lonMin: -109.0, lonMax: -103.0 },
    CO: { latMin: 37.0, latMax: 41.0, lonMin: -109.0, lonMax: -102.0 }
  },

  // Charger types to include (location_type field)
  chargerTypes: ['nacs', 'party', 'destination_charger', 'destination_charger_nontesla'],

  // API configuration
  // Note: programType is determined dynamically based on charger type
  api: {
    endpoint: 'https://www.tesla.com/api/findus/get-charger-details',
    params: {
      locale: 'en-US',
      isInHkMoTw: false
    },
    delayMs: 500  // Delay between requests
  },

  // File paths (relative to backend/)
  paths: {
    rawLocations: './data/raw-locations.json',
    stationsToFetch: './data/stations-to-fetch.json',
    fetchedDetails: './data/raw-details-fetched.json',
    detailsCache: './data/raw-details-all.json',
    detailsBackup: './data/raw-details-all.backup.json',
    browserScript: './scraping/browser-fetch-script.js'
  }
};

/**
 * Helper function to check if location is in any configured region
 */
export function getRegion(lat, lon) {
  for (const [region, bounds] of Object.entries(CONFIG.regions)) {
    if (lat >= bounds.latMin && lat <= bounds.latMax &&
        lon >= bounds.lonMin && lon <= bounds.lonMax) {
      return region;
    }
  }
  return null;
}

/**
 * Helper function to check if location has desired charger types
 */
export function hasDesiredChargerType(locationType) {
  if (!locationType || locationType.length === 0) return false;
  return CONFIG.chargerTypes.some(type =>
    locationType.some(t => t.includes(type))
  );
}

/**
 * Determine API programType based on location type
 * Destination chargers use 'charger', others use 'supercharger'
 */
export function getProgramType(locationType) {
  if (!locationType) return 'supercharger';
  const isDestination = locationType.some(t => t.includes('destination_charger'));
  return isDestination ? 'charger' : 'supercharger';
}
