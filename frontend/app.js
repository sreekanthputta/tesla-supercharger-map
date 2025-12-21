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
  const tesla = pricing.tesla || [];
  const nonTesla = pricing.nonTesla || [];

  // If no pricing data at all, return empty
  if (tesla.length === 0 && nonTesla.length === 0) {
    return '';
  }

  // If no congestion data, show pricing only
  if (!congestionData || congestionData.length === 0) {
    return `
      <div class="congestion-chart">
        ${tesla.length > 0 ? `
          <div class="chart-title" style="color: #e31937; margin-bottom: 4px;">🔴 TESLA HOURLY PRICING</div>
          <div style="display: flex; gap: 2px; margin-bottom: 16px; overflow: hidden; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            ${tesla.map(tier => `<div style="flex: 1; text-align: center; font-size: 12px; font-weight: 600; color: #1a1a1a; background: #f5f5f5; padding: 8px 4px;">$${tier.rate.toFixed(2)}</div>`).join('')}
          </div>
        ` : ''}

        ${nonTesla.length > 0 ? `
          <div class="chart-title" style="color: #5856d6; margin-top: ${tesla.length > 0 ? '8px' : '0'}; margin-bottom: 4px;">🟣 NON-TESLA HOURLY PRICING</div>
          <div style="display: flex; gap: 2px; margin-bottom: 16px; overflow: hidden; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            ${nonTesla.map(tier => `<div style="flex: 1; text-align: center; font-size: 12px; font-weight: 600; color: #1a1a1a; background: #f5f5f5; padding: 8px 4px;">$${tier.rate.toFixed(2)}</div>`).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  // Rotate data to start at 4am
  const rotatedCongestionData = [...congestionData.slice(4), ...congestionData.slice(0, 4)];

  const now = new Date().getHours();
  // Adjust current hour for 4am start
  const adjustedCurrentHour = now >= 4 ? now - 4 : now + 20;

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
  const congestionFeeHtml = station.pricing.congestion
    ? `<div class="congestion-fee">⚠️ Congestion fees (up to) $${station.pricing.congestion.rate.toFixed(2)}/${station.pricing.congestion.unit}</div>`
    : '';

  // Create vehicle support tags
  const vehicleTags = [];
  if (station.vehicleSupport.tesla) vehicleTags.push('<span class="vehicle-tag tesla">Tesla</span>');
  if (station.vehicleSupport.nacs) vehicleTags.push('<span class="vehicle-tag nacs">NACS</span>');
  if (station.vehicleSupport.otherEv) vehicleTags.push('<span class="vehicle-tag other-ev">Other EVs</span>');

  // Create amenity emojis
  const amenitiesEmojis = station.amenities.map(a => a.emoji).join(' ');

  return `
    <div class="popup-body" style="padding: 16px;">
      <div style="margin-bottom: 4px; font-size: 18px; font-weight: 600; color: #333;">
        ${station.name}
      </div>
      ${station.commonName ? `<div style="margin-bottom: 12px; font-size: 13px; color: #667eea;">📍 ${station.commonName}</div>` : ''}

      <div style="margin-bottom: 12px; font-size: 13px; color: #666;">
        ${station.address.full}
      </div>

      <div style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 10px;">
        🔌 ${station.stallCount} • 🕐 ${station.accessHours} • ⚡ ${station.maxPowerKw}kW • 🔓 ${station.accessType}
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div style="font-size: 18px; color: #666;">
          ${amenitiesEmojis || ''}
        </div>
        <div>
          ${vehicleTags.join('')}
        </div>
      </div>

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
    priceFilterType: document.querySelector('input[name="price-type"]:checked').value,
    amenities: [],
    vehicleSupport: [],
    pricingTypes: [],
    timeFilterEnabled: document.getElementById('enable-time-filter').checked,
    timeStart: parseInt(document.getElementById('time-start').value),
    timeEnd: parseInt(document.getElementById('time-end').value)
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

  // Vehicle support
  document.querySelectorAll('[id^="support-"]:checked').forEach(el => {
    filters.vehicleSupport.push(el.value);
  });

  // Pricing types
  document.querySelectorAll('[id^="pricing-"]:checked').forEach(el => {
    filters.pricingTypes.push(el.value);
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

    // Time range + price filter
    if (filters.timeFilterEnabled) {
      // Select which pricing to check based on filter
      let pricesToCheck = [];
      if (filters.priceFilterType === 'both') {
        pricesToCheck = [...station.pricing.tesla, ...station.pricing.nonTesla];
      } else if (filters.priceFilterType === 'tesla') {
        pricesToCheck = station.pricing.tesla;
      } else if (filters.priceFilterType === 'nonTesla') {
        pricesToCheck = station.pricing.nonTesla;
      }

      if (pricesToCheck.length > 0) {
        // Check if ANY pricing tier within the time range matches the price range
        const hasMatchingPrice = pricesToCheck.some(tier => {
          const tierStart = parseInt(tier.startTime.split(':')[0]);
          let tierEnd = parseInt(tier.endTime.split(':')[0]);
          if (tierEnd === 0) tierEnd = 24;

          // Check if tier overlaps with selected time range
          const overlaps = (tierStart <= filters.timeEnd && tierEnd >= filters.timeStart) ||
                          (filters.timeStart > filters.timeEnd && (tierStart <= filters.timeEnd || tierEnd >= filters.timeStart));

          return overlaps && tier.rate >= filters.priceMin && tier.rate <= filters.priceMax;
        });
        if (!hasMatchingPrice) return false;
      }
    } else {
      // Regular price filter (any time)
      let pricesToCheck = [];
      if (filters.priceFilterType === 'both') {
        pricesToCheck = [...station.pricing.tesla, ...station.pricing.nonTesla];
      } else if (filters.priceFilterType === 'tesla') {
        pricesToCheck = station.pricing.tesla;
      } else if (filters.priceFilterType === 'nonTesla') {
        pricesToCheck = station.pricing.nonTesla;
      }

      if (pricesToCheck.length > 0) {
        const hasMatchingPrice = pricesToCheck.some(tier =>
          tier.rate >= filters.priceMin && tier.rate <= filters.priceMax
        );
        if (!hasMatchingPrice) return false;
      }
    }

    // Vehicle support filter
    if (filters.vehicleSupport.length > 0) {
      const hasSupport = filters.vehicleSupport.some(type => {
        if (type === 'tesla') return station.vehicleSupport.tesla;
        if (type === 'nacs') return station.vehicleSupport.nacs;
        if (type === 'otherEv') return station.vehicleSupport.otherEv;
        return false;
      });
      if (!hasSupport) return false;
    }

    // Pricing type filter
    if (filters.pricingTypes.length > 0) {
      const allPrices = [...station.pricing.tesla, ...station.pricing.nonTesla];
      const hasPeakPricing = allPrices.some(tier => tier.isTou === true);
      const hasFlatRate = allPrices.every(tier => tier.isTou === false);

      const matches = filters.pricingTypes.some(type => {
        if (type === 'peak') return hasPeakPricing;
        if (type === 'flat') return hasFlatRate;
        return false;
      });
      if (!matches) return false;
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

// Format hour to display format (0 = 12am, 13 = 1pm, etc.)
function formatHour(hour) {
  if (hour === 0) return '12am';
  if (hour < 12) return `${hour}am`;
  if (hour === 12) return '12pm';
  return `${hour - 12}pm`;
}

// Update time range labels
function updateTimeLabels() {
  const start = parseInt(document.getElementById('time-start').value);
  const end = parseInt(document.getElementById('time-end').value);
  document.getElementById('time-start-value').textContent = formatHour(start);
  document.getElementById('time-end-value').textContent = formatHour(end);
}

// Search functionality
let searchResults = [];
let selectedSearchIndex = -1;
let currentOpenMarker = null;

function searchStations(query) {
  if (!query || query.length < 2) {
    return [];
  }

  const lowerQuery = query.toLowerCase();

  return allStations.filter(station => {
    return station.name.toLowerCase().includes(lowerQuery) ||
           station.commonName.toLowerCase().includes(lowerQuery) ||
           station.address.city.toLowerCase().includes(lowerQuery) ||
           station.address.state.toLowerCase().includes(lowerQuery) ||
           station.address.full.toLowerCase().includes(lowerQuery);
  });
}

function showStationPopup(station) {
  // Find the marker for this station
  const markerIndex = markers.findIndex(m => {
    const latlng = m.getLatLng();
    return latlng.lat === station.location.lat && latlng.lng === station.location.lon;
  });

  if (markerIndex >= 0) {
    const marker = markers[markerIndex];

    // Close any currently open popup (different marker)
    if (currentOpenMarker && currentOpenMarker !== marker) {
      currentOpenMarker.closePopup();
    }

    currentOpenMarker = marker;

    // Always call openPopup - Leaflet handles centering and won't close/reopen if already open
    marker.openPopup();
  }
}

function renderSearchResults() {
  const resultsDiv = document.getElementById('search-results');

  if (searchResults.length === 0) {
    resultsDiv.style.display = 'none';
    return;
  }

  resultsDiv.innerHTML = searchResults.map((station, index) => {
    const highlighted = index === selectedSearchIndex ? 'highlighted' : '';
    return `
      <div class="search-result-item ${highlighted}" data-index="${index}">
        <div class="search-result-name">${station.name}</div>
        <div class="search-result-details">
          ${station.commonName ? `${station.commonName} • ` : ''}${station.address.city}, ${station.address.state}
        </div>
      </div>
    `;
  }).join('');

  resultsDiv.style.display = 'block';

  // Add click listeners
  resultsDiv.querySelectorAll('.search-result-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      showStationPopup(searchResults[index]);
      document.getElementById('search-input').value = searchResults[index].name;
      resultsDiv.style.display = 'none';
    });
  });

  // Show popup for highlighted result
  if (selectedSearchIndex >= 0 && selectedSearchIndex < searchResults.length) {
    showStationPopup(searchResults[selectedSearchIndex]);
  }
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

  // Add event listeners for filters
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

  // Price type radio buttons
  document.querySelectorAll('input[name="price-type"]').forEach(radio => {
    radio.addEventListener('change', filterStations);
  });

  // Time filter toggle
  document.getElementById('enable-time-filter').addEventListener('change', (e) => {
    const controls = document.getElementById('time-filter-controls');
    controls.style.display = e.target.checked ? 'block' : 'none';
    filterStations();
  });

  // Time range sliders
  document.getElementById('time-start').addEventListener('input', () => {
    updateTimeLabels();
    filterStations();
  });

  document.getElementById('time-end').addEventListener('input', () => {
    updateTimeLabels();
    filterStations();
  });

  updateTimeLabels();

  // Search input
  const searchInput = document.getElementById('search-input');
  const searchResultsDiv = document.getElementById('search-results');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    searchResults = searchStations(query);
    selectedSearchIndex = searchResults.length > 0 ? 0 : -1;
    renderSearchResults();
  });

  // Keyboard navigation for search
  searchInput.addEventListener('keydown', (e) => {
    if (searchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedSearchIndex = Math.min(selectedSearchIndex + 1, searchResults.length - 1);
      renderSearchResults();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedSearchIndex = Math.max(selectedSearchIndex - 1, 0);
      renderSearchResults();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSearchIndex >= 0) {
        showStationPopup(searchResults[selectedSearchIndex]);
        searchInput.value = searchResults[selectedSearchIndex].name;
        searchResultsDiv.style.display = 'none';
      }
    } else if (e.key === 'Escape') {
      searchResultsDiv.style.display = 'none';
    }
  });

  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResultsDiv.contains(e.target)) {
      searchResultsDiv.style.display = 'none';
    }
  });

  updatePriceLabels();
});
