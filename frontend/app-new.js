// Global state
let allStations = [];
let map = null;
let markers = [];

// Initialize map
function initMap() {
  // Center on Texas/NM/CO region
  map = L.map('map').setView([33.5, -103], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);
}

// Create custom marker icon
function createMarkerIcon(station) {
  let className = 'custom-marker';
  let icon = '⚡';

  // Determine type and icon
  if (station.chargerType === 'nacs') {
    className += ' marker-nacs';
    icon = '🟣';
  } else if (station.chargerType === 'party') {
    className += ' marker-party';
    icon = '🟠';
  }

  // Show fast charging
  if (station.maxPowerKw >= 250) {
    icon = '⚡';
  }

  const iconHtml = `<div class="${className}">${icon}</div>`;

  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
}

// Create pricing table (Tesla's horizontal design)
function createPricingTable(pricing) {
  const tesla = pricing.tesla || [];
  const nonTesla = pricing.nonTesla || [];

  if (tesla.length === 0 && nonTesla.length === 0) {
    return '<div class="congestion-fee">⚠️ Pricing information not available</div>';
  }

  // Find min/max to determine peak/off-peak
  const allRates = [...tesla, ...nonTesla].map(t => t.rate);
  const minRate = Math.min(...allRates);
  const maxRate = Math.max(...allRates);

  function createPriceRow(tiers, label, colorClass) {
    if (tiers.length === 0) return '';

    const cells = tiers.map(tier => {
      const isPeak = tier.rate >= (minRate + maxRate) / 2;
      return `
        <div class="price-cell ${isPeak ? 'peak' : 'off-peak'}">
          <div class="price-tooltip">${tier.startTime}-${tier.endTime}</div>
          $${tier.rate.toFixed(2)}
        </div>
      `;
    }).join('');

    return `
      <div class="pricing-row">
        <div class="pricing-row-label ${colorClass}">${label}</div>
        ${cells}
      </div>
    `;
  }

  return `
    <div class="pricing-table">
      ${createPriceRow(tesla, 'TESLA', 'tesla')}
      ${createPriceRow(nonTesla, 'NON-TESLA', 'non-tesla')}
    </div>
  `;
}

// Create unified congestion chart with pricing partitions
function createCongestionChart(congestionData, pricing) {
  if (!congestionData || congestionData.length === 0) {
    return '';
  }

  // Rotate data to start at 4am
  const rotatedCongestionData = [...congestionData.slice(4), ...congestionData.slice(0, 4)];

  const now = new Date().getHours();
  // Adjust current hour for 4am start
  const adjustedCurrentHour = now >= 4 ? now - 4 : now + 20;

  const tesla = pricing.tesla || [];
  const nonTesla = pricing.nonTesla || [];

  // Build hourly pricing map (original hours, not rotated yet)
  const hourlyPricing = new Array(24).fill(null);
  tesla.forEach(tier => {
    let startHour = parseInt(tier.startTime.split(':')[0]);
    let endHour = parseInt(tier.endTime.split(':')[0]);
    if (endHour === 0) endHour = 24;
    for (let hour = startHour; hour < endHour; hour++) {
      hourlyPricing[hour] = tier.rate;
    }
  });

  // Rotate pricing to start at 4am
  const rotatedHourlyPricing = [...hourlyPricing.slice(4), ...hourlyPricing.slice(0, 4)];

  // Determine min/max for color coding
  const validPrices = hourlyPricing.filter(p => p !== null);
  const minPrice = Math.min(...validPrices);
  const maxPrice = Math.max(...validPrices);
  const midPrice = (minPrice + maxPrice) / 2;

  // Create price labels row (Tesla) - adjusted for 4am start
  let teslaPriceLabels = '';
  let nonTeslaPriceLabels = '';

  // Group consecutive hours with same price
  const teslaPriceGroups = [];
  let currentGroup = null;

  for (let i = 0; i < 24; i++) {
    const price = rotatedHourlyPricing[i];
    if (currentGroup && currentGroup.price === price) {
      currentGroup.count++;
    } else {
      if (currentGroup) teslaPriceGroups.push(currentGroup);
      currentGroup = { price, count: 1 };
    }
  }
  if (currentGroup) teslaPriceGroups.push(currentGroup);

  teslaPriceGroups.forEach((group, index) => {
    if (group.price === null) return; // Skip null prices

    const widthPercent = (group.count / 24) * 100;
    const isPeak = group.price >= midPrice;
    const bgColor = isPeak ? '#e8e8e8' : '#f5f5f5';
    const borderRight = index < teslaPriceGroups.length - 1 ? 'border-right: 2px solid #fff;' : '';

    teslaPriceLabels += `
      <div style="flex: 0 0 ${widthPercent}%; text-align: center; font-size: 12px; font-weight: 600; color: #1a1a1a; background: ${bgColor}; padding: 8px 4px; ${borderRight}">
        $${group.price.toFixed(2)}
      </div>
    `;
  });

  // Create price labels row (Non-Tesla) - adjusted for 4am start
  // Build hourly pricing map for non-Tesla
  const hourlyPricingNonTesla = new Array(24).fill(null);
  nonTesla.forEach(tier => {
    let startHour = parseInt(tier.startTime.split(':')[0]);
    let endHour = parseInt(tier.endTime.split(':')[0]);
    if (endHour === 0) endHour = 24;
    for (let hour = startHour; hour < endHour; hour++) {
      hourlyPricingNonTesla[hour] = tier.rate;
    }
  });

  // Rotate non-Tesla pricing to start at 4am
  const rotatedHourlyPricingNonTesla = [...hourlyPricingNonTesla.slice(4), ...hourlyPricingNonTesla.slice(0, 4)];

  // Determine min/max for non-Tesla
  const nonTeslaPrices = nonTesla.map(t => t.rate);
  const minNonTesla = nonTeslaPrices.length > 0 ? Math.min(...nonTeslaPrices) : 0;
  const maxNonTesla = nonTeslaPrices.length > 0 ? Math.max(...nonTeslaPrices) : 0;
  const midNonTesla = (minNonTesla + maxNonTesla) / 2;

  // Group consecutive hours with same price for non-Tesla
  const nonTeslaPriceGroups = [];
  let currentNonTeslaGroup = null;

  for (let i = 0; i < 24; i++) {
    const price = rotatedHourlyPricingNonTesla[i];
    if (currentNonTeslaGroup && currentNonTeslaGroup.price === price) {
      currentNonTeslaGroup.count++;
    } else {
      if (currentNonTeslaGroup) nonTeslaPriceGroups.push(currentNonTeslaGroup);
      currentNonTeslaGroup = { price, count: 1 };
    }
  }
  if (currentNonTeslaGroup) nonTeslaPriceGroups.push(currentNonTeslaGroup);

  nonTeslaPriceGroups.forEach((group, index) => {
    if (group.price === null) return; // Skip null prices

    const widthPercent = (group.count / 24) * 100;
    const isPeak = group.price >= midNonTesla;
    const bgColor = isPeak ? '#e8e8e8' : '#f5f5f5';
    const borderRight = index < nonTeslaPriceGroups.length - 1 ? 'border-right: 2px solid #fff;' : '';

    nonTeslaPriceLabels += `
      <div style="flex: 0 0 ${widthPercent}%; text-align: center; font-size: 12px; font-weight: 600; color: #1a1a1a; background: ${bgColor}; padding: 8px 4px; ${borderRight}">
        $${group.price.toFixed(2)}
      </div>
    `;
  });

  // Create background partitions for pricing windows
  let backgroundHtml = '';

  // Filter out null groups first to get proper indexing for margins
  const validTeslaPriceGroups = teslaPriceGroups.filter(g => g.price !== null);
  const numPartitions = validTeslaPriceGroups.length;
  const gapSize = 2; // 2px gap between partitions
  const totalGaps = (numPartitions - 1) * gapSize; // Total gap width in px

  validTeslaPriceGroups.forEach((group, index) => {
    const widthPercent = (group.count / 24) * 100;
    const isPeak = group.price >= midPrice;
    const bgColor = isPeak ? 'rgba(139, 92, 246, 0.08)' : 'rgba(196, 181, 253, 0.08)';
    const marginRight = index < numPartitions - 1 ? `${gapSize}px` : '0';

    // Adjust width to account for gaps: each partition loses its proportional share of total gap space
    const gapAdjustment = (totalGaps / numPartitions);

    backgroundHtml += `
      <div style="flex: 0 0 calc(${widthPercent}% - ${gapAdjustment}px); background: ${bgColor}; margin-right: ${marginRight};"></div>
    `;
  });

  // Create bars (rotated to start at 4am)
  let barsHtml = '';
  for (let displayHour = 0; displayHour < 24; displayHour++) {
    const congestion = rotatedCongestionData[displayHour] || 0;
    // Congestion is already 0.0-1.0 (0%-100%), so multiply by 100 for height percentage
    const heightPercent = congestion * 100;
    const isCurrentHour = displayHour === adjustedCurrentHour;

    // Determine color based on pricing tier
    const price = rotatedHourlyPricing[displayHour];
    let barColor = '#a78bfa';
    if (price !== null) {
      barColor = price >= midPrice ? '#8b5cf6' : '#c4b5fd';
    }

    // Calculate actual hour for display (4am = hour 4, 5am = hour 5, etc.)
    const actualHour = (displayHour + 4) % 24;

    barsHtml += `
      <div class="chart-bar ${isCurrentHour ? 'current' : ''}"
           style="height: ${heightPercent}%; background: ${barColor};"
           title="${actualHour}:00 - ${(congestion * 100).toFixed(0)}% busy">
        <div class="chart-bar-label">${actualHour}</div>
      </div>
    `;
  }

  return `
    <div class="congestion-chart">
      ${tesla.length > 0 ? `
        <div class="chart-title" style="color: #e31937; margin-bottom: 4px;">🔴 TESLA HOURLY PRICING</div>
        <div style="display: flex; gap: 2px; margin-bottom: 16px; overflow: hidden; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          ${teslaPriceLabels}
        </div>
      ` : ''}

      ${nonTesla.length > 0 ? `
        <div class="chart-title" style="color: #5856d6; margin-top: ${tesla.length > 0 ? '8px' : '0'}; margin-bottom: 4px;">🟣 NON-TESLA HOURLY PRICING</div>
        <div style="display: flex; gap: 2px; margin-bottom: 16px; overflow: hidden; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          ${nonTeslaPriceLabels}
        </div>
      ` : ''}

      <div class="chart-container">
        <div class="chart-background">
          ${backgroundHtml}
        </div>
        <div class="chart-bars">
          ${barsHtml}
        </div>
      </div>
    </div>
  `;
}

// Create popup content
function createPopupContent(station) {
  const amenitiesHtml = station.amenities.map(a =>
    `<span class="amenity-badge">${a.emoji} ${a.name}</span>`
  ).join('');

  const chargerTypeLabel = {
    'nacs': 'NACS Supercharger',
    'party': 'Party Supercharger',
    'supercharger': 'Supercharger'
  }[station.chargerType] || station.chargerType;

  const congestionFeeHtml = station.pricing.congestion
    ? `<div class="congestion-fee">⚠️ Congestion fees (up to) $${station.pricing.congestion.rate.toFixed(2)}/${station.pricing.congestion.unit}</div>`
    : '';

  return `
    <div class="popup-header">
      <div class="popup-title">${station.name}</div>
      ${station.commonName ? `<div class="popup-common-name">📍 ${station.commonName}</div>` : ''}
    </div>
    <div class="popup-body">
      <div class="info-row">
        <span class="info-row-icon">📍</span>
        <span class="info-value">${station.address.full}</span>
      </div>

      <div class="info-row">
        <span class="info-row-icon">⚡</span>
        <span class="info-label">Charging Speed:</span>
        <span class="info-value">${station.maxPowerKw}kW</span>
      </div>

      <div class="info-row">
        <span class="info-row-icon">🔌</span>
        <span class="info-label">Stalls:</span>
        <span class="info-value">${station.stallCount}</span>
      </div>

      <div class="info-row">
        <span class="info-row-icon">🏷️</span>
        <span class="info-label">Type:</span>
        <span class="info-value">${chargerTypeLabel}</span>
      </div>

      <div class="info-row">
        <span class="info-row-icon">🕐</span>
        <span class="info-label">Hours:</span>
        <span class="info-value">${station.accessHours}</span>
      </div>

      <div class="info-row">
        <span class="info-row-icon">🔓</span>
        <span class="info-label">Access:</span>
        <span class="info-value">${station.accessType}</span>
      </div>

      <div class="info-row">
        <span class="info-row-icon">🚗</span>
        <span class="info-label">Supports:</span>
        <span class="info-value">
          ${station.vehicleSupport.tesla ? 'Tesla' : ''}
          ${station.vehicleSupport.nacs ? ' • NACS' : ''}
          ${station.vehicleSupport.otherEv ? ' • Other EVs' : ''}
        </span>
      </div>

      ${amenitiesHtml ? `
        <div class="info-row" style="flex-direction: column; align-items: flex-start;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <span class="info-row-icon">✨</span>
            <span class="info-label">Amenities:</span>
          </div>
          <div class="amenities-row">${amenitiesHtml}</div>
        </div>
      ` : ''}

      <div class="pricing-section">
        ${congestionFeeHtml}
        ${createCongestionChart(station.congestionData, station.pricing)}
      </div>
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
    const marker = L.marker([station.location.lat, station.location.lon], {
      icon: createMarkerIcon(station)
    });

    marker.bindPopup(createPopupContent(station), {
      maxWidth: 450,
      className: 'custom-popup'
    });

    marker.addTo(map);
    markers.push(marker);
  });

  // Update stats
  document.getElementById('visible-count').textContent = stations.length;
}

// Get filter values
function getFilters() {
  const filters = {
    chargerTypes: [],
    powerLevels: [],
    accessHours: [],
    states: [],
    priceMin: parseFloat(document.getElementById('price-min').value) / 100,
    priceMax: parseFloat(document.getElementById('price-max').value) / 100,
    amenities: []
  };

  // Charger types
  document.querySelectorAll('[id^="type-"]:checked').forEach(el => {
    filters.chargerTypes.push(el.value);
  });

  // Power levels
  document.querySelectorAll('[id^="power-"]:checked').forEach(el => {
    filters.powerLevels.push(el.value);
  });

  // Access hours
  document.querySelectorAll('[id^="hours-"]:checked').forEach(el => {
    filters.accessHours.push(el.value);
  });

  // States
  document.querySelectorAll('[id^="state-"]:checked').forEach(el => {
    filters.states.push(el.value);
  });

  // Amenities
  document.querySelectorAll('[id^="amenity-"]:checked').forEach(el => {
    filters.amenities.push(el.value);
  });

  return filters;
}

// Filter stations
function filterStations() {
  const filters = getFilters();

  const filtered = allStations.filter(station => {
    // Charger type
    if (filters.chargerTypes.length > 0) {
      if (!filters.chargerTypes.includes(station.chargerType)) return false;
    }

    // Power level
    if (filters.powerLevels.length > 0) {
      const powerCategory =
        station.maxPowerKw >= 250 ? 'ultra' :
        station.maxPowerKw >= 150 ? 'fast' : 'standard';

      if (!filters.powerLevels.includes(powerCategory)) return false;
    }

    // Access hours
    if (filters.accessHours.length > 0) {
      const hoursCategory = station.accessHours === '24/7' ? '24/7' : 'limited';
      if (!filters.accessHours.includes(hoursCategory)) return false;
    }

    // States
    if (filters.states.length > 0) {
      if (!filters.states.includes(station.address.state)) return false;
    }

    // Price range - check if ANY tier falls within range
    const allPrices = [...station.pricing.tesla, ...station.pricing.nonTesla];
    if (allPrices.length > 0) {
      const hasMatchingPrice = allPrices.some(tier =>
        tier.rate >= filters.priceMin && tier.rate <= filters.priceMax
      );
      if (!hasMatchingPrice) return false;
    }

    // Amenities - must have ALL selected amenities
    if (filters.amenities.length > 0) {
      const stationAmenities = station.amenities.map(a => a.name);
      const hasAllAmenities = filters.amenities.every(required =>
        stationAmenities.includes(required)
      );
      if (!hasAllAmenities) return false;
    }

    return true;
  });

  addMarkersToMap(filtered);
}

// Update price range labels
function updatePriceLabels() {
  const min = parseFloat(document.getElementById('price-min').value) / 100;
  const max = parseFloat(document.getElementById('price-max').value) / 100;
  document.getElementById('price-min-value').textContent = `$${min.toFixed(2)}`;
  document.getElementById('price-max-value').textContent = `$${max.toFixed(2)}`;
}

// Load stations
async function loadStations() {
  try {
    const response = await fetch('/data/map-stations.json');
    allStations = await response.json();

    document.getElementById('total-count').textContent = allStations.length;
    document.getElementById('loading').style.display = 'none';

    filterStations();
  } catch (error) {
    console.error('Error loading stations:', error);
    document.getElementById('loading').innerHTML = '<div>Error loading stations</div>';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  loadStations();

  // Add event listeners
  document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', filterStations);
  });

  document.getElementById('price-min').addEventListener('input', () => {
    updatePriceLabels();
    filterStations();
  });

  document.getElementById('price-max').addEventListener('input', () => {
    updatePriceLabels();
    filterStations();
  });

  updatePriceLabels();
});
