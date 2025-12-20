const API_BASE_URL = 'http://localhost:3001/api';

let map;
let markers = [];
let allStations = [];

// Initialize map
function initMap() {
  map = L.map('map').setView([34.5, -105.5], 6); // Center on NM/CO/TX region

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);
}

// Create custom marker icon
function createMarkerIcon(color = '#e82127') {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${color};
      width: 28px;
      height: 28px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      position: relative;
    ">
      <div style="
        position: absolute;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "></div>
    </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28]
  });
}

// Format tooltip content
function formatTooltip(station) {
  const vehicleTypes = [];
  if (station.tesla_compatible) vehicleTypes.push('Tesla');
  if (station.nacs_partner) vehicleTypes.push('NACS Partner');
  if (station.other_ev) vehicleTypes.push('Other EV');

  let priceInfo = 'Price not available';

  // Check if we have pricing tiers
  if (station.pricing_tiers && station.pricing_tiers.length > 0) {
    priceInfo = '<div class="pricing-tiers">';
    station.pricing_tiers.forEach(tier => {
      priceInfo += `
        <div class="tier-row">
          <span class="tier-time">${tier.startTime} - ${tier.endTime}</span>
          <span class="tier-price">$${tier.rate.toFixed(3)}/kWh</span>
          <span class="tier-label">${tier.label}</span>
        </div>
      `;
    });
    priceInfo += '</div>';
  } else if (station.usd_per_kwh) {
    priceInfo = `$${station.usd_per_kwh.toFixed(3)}/kWh`;
  } else if (station.peak_rate && station.off_peak_rate) {
    priceInfo = `Peak: $${station.peak_rate.toFixed(3)}/kWh<br>Off-Peak: $${station.off_peak_rate.toFixed(3)}/kWh`;
    if (station.peak_hours) {
      priceInfo += `<br><small>Peak hours: ${station.peak_hours}</small>`;
    }
  }

  return `
    <div class="station-tooltip">
      <div class="name">${station.name}</div>
      <div class="address">
        ${station.address_line1 || ''}<br>
        ${station.city}, ${station.state} ${station.zip}
      </div>
      <div class="info-row">
        <span class="info-label">Stalls:</span>
        <span class="info-value">${station.total_stalls || 'N/A'}</span>
      </div>
      <div class="info-section">
        <div class="info-label">Pricing:</div>
        <div class="info-value price">${priceInfo}</div>
      </div>
      ${vehicleTypes.length > 0 ? `
        <div class="vehicle-types">
          ${vehicleTypes.map(type => `<span class="vehicle-badge">${type}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// Add markers to map
function addMarkersToMap(stations) {
  // Clear existing markers
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];

  // Add new markers
  stations.forEach(station => {
    if (station.latitude && station.longitude) {
      const marker = L.marker(
        [station.latitude, station.longitude],
        { icon: createMarkerIcon() }
      );

      // Tooltip on hover
      marker.bindTooltip(formatTooltip(station), {
        direction: 'top',
        offset: [0, -20],
        opacity: 0.95
      });

      // Popup on click
      marker.bindPopup(formatTooltip(station), {
        maxWidth: 300
      });

      marker.addTo(map);
      markers.push(marker);
    }
  });

  // Update stats
  updateStats(stations.length);

  // Fit bounds if there are markers
  if (markers.length > 0) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }
}

// Fetch stations with filters
async function fetchStations(filters = {}) {
  showLoading(true);

  try {
    // Check if no vehicle types are selected - show nothing
    const vehicleTypeChecked = document.querySelectorAll('input[name="vehicle_type"]:checked').length;
    if (vehicleTypeChecked === 0) {
      allStations = [];
      addMarkersToMap([]);
      showLoading(false);
      return;
    }

    const params = new URLSearchParams();

    // Add filters to params
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params.append(key, value);
      }
    });

    const response = await fetch(`${API_BASE_URL}/stations?${params}`);
    const data = await response.json();

    allStations = data.stations;
    addMarkersToMap(allStations);
  } catch (error) {
    console.error('Error fetching stations:', error);
    alert('Failed to load stations. Please ensure the backend server is running.');
  } finally {
    showLoading(false);
  }
}

// Get current filters from UI
function getCurrentFilters() {
  const filters = {};

  // Vehicle types
  const vehicleTypes = Array.from(
    document.querySelectorAll('input[name="vehicle_type"]:checked')
  ).map(input => input.value);

  // Always send vehicle type filter, even if all are checked
  // This ensures proper filtering behavior
  if (vehicleTypes.length > 0) {
    filters.vehicle_type = vehicleTypes.join(',');
  }

  // States
  const states = Array.from(
    document.querySelectorAll('input[name="state"]:checked')
  ).map(input => input.value);

  if (states.length > 0 && states.length < 3) {
    filters.state = states.join(',');
  }

  // Price range
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;

  if (minPrice) filters.min_price = minPrice;
  if (maxPrice) filters.max_price = maxPrice;

  // Peak pricing
  const peakPricing = document.querySelector('input[name="peak_pricing"]:checked').value;
  if (peakPricing === 'peak') {
    filters.has_peak_pricing = 'true';
  } else if (peakPricing === 'no_peak') {
    filters.has_peak_pricing = 'false';
  }

  return filters;
}

// Apply filters
function applyFilters() {
  const filters = getCurrentFilters();
  fetchStations(filters);
}

// Reset filters
function resetFilters() {
  // Reset checkboxes
  document.querySelectorAll('input[name="vehicle_type"]').forEach(input => {
    input.checked = input.value === 'tesla';
  });

  document.querySelectorAll('input[name="state"]').forEach(input => {
    input.checked = true;
  });

  // Reset price inputs
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';

  // Reset charging time
  document.getElementById('chargingTime').value = '';

  // Reset peak pricing
  document.querySelector('input[name="peak_pricing"][value="all"]').checked = true;

  // Fetch all stations
  fetchStations();
}

// Update stats
function updateStats(displayedCount) {
  document.getElementById('displayedStations').textContent = displayedCount;
}

// Show/hide loading
function showLoading(show) {
  const loading = document.getElementById('loading');
  if (show) {
    loading.classList.remove('hidden');
  } else {
    loading.classList.add('hidden');
  }
}

// Fetch total stations count
async function fetchTotalStats() {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`);
    const data = await response.json();
    document.getElementById('totalStations').textContent = data.overall.total_stations;
  } catch (error) {
    console.error('Error fetching stats:', error);
  }
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  let searchTimeout;

  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      const searchTerm = e.target.value.toLowerCase().trim();

      if (searchTerm === '') {
        // Show all stations
        addMarkersToMap(allStations);
        return;
      }

      // Filter stations by search term
      const filtered = allStations.filter(station => {
        return (
          station.name.toLowerCase().includes(searchTerm) ||
          station.city.toLowerCase().includes(searchTerm) ||
          station.state.toLowerCase().includes(searchTerm) ||
          station.zip.includes(searchTerm)
        );
      });

      addMarkersToMap(filtered);
    }, 300);
  });
}

// Initialize app
async function init() {
  initMap();

  // Event listeners
  document.getElementById('applyFilters').addEventListener('click', applyFilters);
  document.getElementById('resetFilters').addEventListener('click', resetFilters);

  setupSearch();

  // Fetch initial data
  await fetchTotalStats();
  await fetchStations();
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
