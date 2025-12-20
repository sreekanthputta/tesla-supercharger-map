import fs from 'fs';

// Sample data based on known Tesla Supercharger stations in NM, TX, CO
const sampleStations = [
  {
    location_id: "58900",
    location_slug: "58900",
    name: "Amarillo Supercharger",
    address: {
      line1: "2402 Cinema Drive",
      city: "Amarillo",
      state: "TX",
      zip: "79124",
      country: "US"
    },
    latitude: 35.1878,
    longitude: -101.8225,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 8,
      available_stalls: 6,
      site_closed: false,
      amenities: ["restrooms", "shopping"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.31,
          peak_usd_per_kwh: 0.35,
          off_peak_usd_per_kwh: 0.28,
          peak_hours: "4pm-9pm weekdays"
        },
        tiers: [
          { rate: 0.28, startTime: "00:00", endTime: "04:00", label: "Overnight" },
          { rate: 0.28, startTime: "04:00", endTime: "16:00", label: "Off-Peak" },
          { rate: 0.35, startTime: "16:00", endTime: "21:00", label: "Peak" },
          { rate: 0.28, startTime: "21:00", endTime: "24:00", label: "Evening" }
        ]
      },
      nacs_partner: 1,
      other_ev_support: 0
    }
  },
  {
    location_id: "19160",
    location_slug: "19160",
    name: "Albuquerque Supercharger",
    address: {
      line1: "6100 Uptown Blvd NE",
      city: "Albuquerque",
      state: "NM",
      zip: "87110",
      country: "US"
    },
    latitude: 35.1107,
    longitude: -106.6100,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 12,
      available_stalls: 10,
      site_closed: false,
      amenities: ["restrooms", "restaurant", "shopping"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.29
        },
        tiers: [
          { rate: 0.29, startTime: "00:00", endTime: "24:00", label: "All Day" }
        ]
      },
      nacs_partner: 1,
      other_ev_support: 0
    }
  },
  {
    location_id: "12345",
    location_slug: "12345",
    name: "Denver Supercharger",
    address: {
      line1: "1644 Wazee Street",
      city: "Denver",
      state: "CO",
      zip: "80202",
      country: "US"
    },
    latitude: 39.7539,
    longitude: -105.0082,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 16,
      available_stalls: 12,
      site_closed: false,
      amenities: ["restrooms", "restaurant", "wifi"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.32,
          peak_usd_per_kwh: 0.36,
          off_peak_usd_per_kwh: 0.29,
          peak_hours: "3pm-8pm"
        },
        tiers: [
          { rate: 0.29, startTime: "00:00", endTime: "15:00", label: "Off-Peak" },
          { rate: 0.36, startTime: "15:00", endTime: "20:00", label: "Peak" },
          { rate: 0.29, startTime: "20:00", endTime: "24:00", label: "Off-Peak" }
        ]
      },
      nacs_partner: 1,
      other_ev_support: 1
    }
  },
  {
    location_id: "23456",
    location_slug: "23456",
    name: "Austin Supercharger",
    address: {
      line1: "11506 Century Oaks Terrace",
      city: "Austin",
      state: "TX",
      zip: "78758",
      country: "US"
    },
    latitude: 30.3850,
    longitude: -97.7250,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 20,
      available_stalls: 15,
      site_closed: false,
      amenities: ["restrooms", "shopping", "food"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.30
        },
        tiers: [
          { rate: 0.30, startTime: "00:00", endTime: "24:00", label: "All Day" }
        ]
      },
      nacs_partner: 1,
      other_ev_support: 0
    }
  },
  {
    location_id: "34567",
    location_slug: "34567",
    name: "Colorado Springs Supercharger",
    address: {
      line1: "750 Citadel Drive East",
      city: "Colorado Springs",
      state: "CO",
      zip: "80909",
      country: "US"
    },
    latitude: 38.8161,
    longitude: -104.7980,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 10,
      available_stalls: 8,
      site_closed: false,
      amenities: ["restrooms", "restaurant"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.33,
          peak_usd_per_kwh: 0.37,
          off_peak_usd_per_kwh: 0.30,
          peak_hours: "4pm-9pm"
        },
        tiers: [
          { rate: 0.30, startTime: "00:00", endTime: "16:00", label: "Off-Peak" },
          { rate: 0.37, startTime: "16:00", endTime: "21:00", label: "Peak" },
          { rate: 0.30, startTime: "21:00", endTime: "24:00", label: "Off-Peak" }
        ]
      },
      nacs_partner: 1,
      other_ev_support: 1
    }
  },
  {
    location_id: "45678",
    location_slug: "45678",
    name: "Santa Fe Supercharger",
    address: {
      line1: "3450 Zafarano Drive",
      city: "Santa Fe",
      state: "NM",
      zip: "87507",
      country: "US"
    },
    latitude: 35.6472,
    longitude: -105.9653,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 8,
      available_stalls: 6,
      site_closed: false,
      amenities: ["restrooms", "shopping"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.30
        },
        tiers: [
          { rate: 0.30, startTime: "00:00", endTime: "24:00", label: "All Day" }
        ]
      },
      nacs_partner: 0,
      other_ev_support: 0
    }
  },
  {
    location_id: "56789",
    location_slug: "56789",
    name: "Dallas Supercharger",
    address: {
      line1: "5500 Greenville Avenue",
      city: "Dallas",
      state: "TX",
      zip: "75206",
      country: "US"
    },
    latitude: 32.8455,
    longitude: -96.7714,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 24,
      available_stalls: 18,
      site_closed: false,
      amenities: ["restrooms", "restaurant", "shopping", "wifi"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.28,
          peak_usd_per_kwh: 0.34,
          off_peak_usd_per_kwh: 0.26,
          peak_hours: "3pm-9pm weekdays"
        },
        tiers: [
          { rate: 0.26, startTime: "00:00", endTime: "15:00", label: "Off-Peak" },
          { rate: 0.34, startTime: "15:00", endTime: "21:00", label: "Peak" },
          { rate: 0.26, startTime: "21:00", endTime: "24:00", label: "Off-Peak" }
        ]
      },
      nacs_partner: 1,
      other_ev_support: 1
    }
  },
  {
    location_id: "67890",
    location_slug: "67890",
    name: "Boulder Supercharger",
    address: {
      line1: "2798 Pearl Street",
      city: "Boulder",
      state: "CO",
      zip: "80302",
      country: "US"
    },
    latitude: 40.0200,
    longitude: -105.2590,
    location_type: ["supercharger"],
    open_soon: false,
    coming_soon: false,
    details: {
      total_stalls: 12,
      available_stalls: 9,
      site_closed: false,
      amenities: ["restrooms", "restaurant", "shopping"],
      pricing: {
        type: "per_kwh",
        rates: {
          usd_per_kwh: 0.34
        },
        tiers: [
          { rate: 0.34, startTime: "00:00", endTime: "24:00", label: "All Day" }
        ]
      },
      nacs_partner: 1,
      other_ev_support: 0
    }
  }
];

// Create data directory if it doesn't exist
const dataDir = './data';
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write sample data
const outputPath = './data/stations.json';
fs.writeFileSync(outputPath, JSON.stringify(sampleStations, null, 2));

console.log('✅ Sample data created successfully!');
console.log(`📁 File: ${outputPath}`);
console.log(`📊 Stations: ${sampleStations.length}`);
console.log('\n📍 Locations:');
sampleStations.forEach(station => {
  console.log(`   - ${station.name} (${station.address.city}, ${station.address.state})`);
});
console.log('\n💡 Next step: Run "node database.js" to import into database');
