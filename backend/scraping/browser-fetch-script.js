
/**
 * TESLA SUPERCHARGER DETAIL FETCHER
 * Generated: 2026-11-22T10:29:21.611Z
 *
 * Copy and paste this entire script into browser console at:
 * https://www.tesla.com/findus
 *
 * This will fetch details for 2076 stations.
 * Estimated time: ~18 minutes
 */

(async function() {
  console.clear();
  console.log('═'.repeat(60));
  console.log('🚀 Tesla Supercharger Detail Fetcher');
  console.log('═'.repeat(60));
  console.log('Total stations to fetch: 2076');
  console.log('Estimated time: ~18 minutes\n');

  const API_BASE = 'https://www.tesla.com/api/findus/get-charger-details';
  const API_PARAMS = new URLSearchParams({"locale":"en-US","isInHkMoTw":false});
  const DELAY_MS = 500;

  const stations = [
  {
    "uuid": "32789752",
    "slug": "479056",
    "lat": 40.376967,
    "lon": -104.7329251,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32789754",
    "slug": "dc39539",
    "lat": 36.167321,
    "lon": -115.286833,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789778",
    "slug": "dc40843",
    "lat": 33.816364,
    "lon": -116.54844,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789779",
    "slug": "dc26535",
    "lat": 38.609124,
    "lon": -122.870456,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789780",
    "slug": "dc2331",
    "lat": 32.874767,
    "lon": -117.208742,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789784",
    "slug": "17280",
    "lat": 33.839006,
    "lon": -117.888296,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32789785",
    "slug": "dc5197",
    "lat": 35.578439,
    "lon": -121.115586,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789786",
    "slug": "54794",
    "lat": 38.4548953,
    "lon": -122.4153342,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789787",
    "slug": "54552",
    "lat": 37.975114,
    "lon": -122.531959,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789896",
    "slug": "463680",
    "lat": 39.0461874,
    "lon": -119.8175889,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32789899",
    "slug": "442052",
    "lat": 40.03556,
    "lon": -124.07827,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32789900",
    "slug": "458546",
    "lat": 34.0455745,
    "lon": -118.2492399,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32789901",
    "slug": "4004659",
    "lat": 32.826295,
    "lon": -117.141962,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789904",
    "slug": "450910",
    "lat": 37.5527601,
    "lon": -122.2924274,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32789996",
    "slug": "415254",
    "lat": 29.7839667,
    "lon": -95.112674,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32789997",
    "slug": "dc562",
    "lat": 32.7675371,
    "lon": -96.7962415,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32789998",
    "slug": "52787",
    "lat": 29.639955,
    "lon": -95.588039,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790009",
    "slug": "dc19787",
    "lat": 29.579073,
    "lon": -95.383683,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790013",
    "slug": "dc43586",
    "lat": 29.2154821,
    "lon": -99.76972,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790069",
    "slug": "457017",
    "lat": 33.037701,
    "lon": -96.707066,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32790082",
    "slug": "447153",
    "lat": 32.7438181,
    "lon": -97.6567211,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790083",
    "slug": "446258",
    "lat": 32.7056218,
    "lon": -97.3599828,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790086",
    "slug": "456968",
    "lat": 33.8191268,
    "lon": -117.517954,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790087",
    "slug": "456503",
    "lat": 35.005717,
    "lon": -106.0366352,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790095",
    "slug": "473916",
    "lat": 29.8369255,
    "lon": -95.4845892,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790097",
    "slug": "472654",
    "lat": 33.9468482,
    "lon": -118.3880805,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790098",
    "slug": "473625",
    "lat": 33.0416264,
    "lon": -96.7361735,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790102",
    "slug": "449454",
    "lat": 29.2850905,
    "lon": -94.8575975,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790107",
    "slug": "453078",
    "lat": 34.2682,
    "lon": -118.4189,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790115",
    "slug": "446408",
    "lat": 38.9508938,
    "lon": -119.9498127,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790116",
    "slug": "450316",
    "lat": 31.7194184,
    "lon": -98.983177,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790117",
    "slug": "450171",
    "lat": 34.0086662,
    "lon": -118.273788,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790128",
    "slug": "449154",
    "lat": 39.8022074,
    "lon": -105.1088553,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790132",
    "slug": "452859",
    "lat": 30.400525,
    "lon": -97.6750383,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790140",
    "slug": "459169",
    "lat": 29.4905947,
    "lon": -98.400048,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790149",
    "slug": "476452",
    "lat": 36.0676393,
    "lon": -95.861335,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790150",
    "slug": "446006",
    "lat": 38.9601872,
    "lon": -119.9472252,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790155",
    "slug": "34983",
    "lat": 37.5323512,
    "lon": -122.0007071,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790163",
    "slug": "451066",
    "lat": 37.8596728,
    "lon": -122.4889148,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790168",
    "slug": "459662",
    "lat": 33.2048033,
    "lon": -96.8250595,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790172",
    "slug": "461029",
    "lat": 32.745167,
    "lon": -96.4557844,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790173",
    "slug": "460752",
    "lat": 36.7641642,
    "lon": -119.7195233,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790179",
    "slug": "481552",
    "lat": 33.7640588,
    "lon": -118.1919657,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790181",
    "slug": "450668",
    "lat": 26.1642268,
    "lon": -97.6844377,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790182",
    "slug": "450708",
    "lat": 35.1933467,
    "lon": -101.8678393,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790185",
    "slug": "450352",
    "lat": 36.2399087,
    "lon": -115.0787508,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790187",
    "slug": "450255",
    "lat": 36.3742371,
    "lon": -94.2093307,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790188",
    "slug": "458828",
    "lat": 34.6136877,
    "lon": -120.1954549,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790190",
    "slug": "458571",
    "lat": 37.512904,
    "lon": -122.2681955,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790194",
    "slug": "458310",
    "lat": 32.534195,
    "lon": -96.664689,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790195",
    "slug": "466410",
    "lat": 37.506134,
    "lon": -121.9732869,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790198",
    "slug": "466714",
    "lat": 32.4309252,
    "lon": -96.820976,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790200",
    "slug": "467709",
    "lat": 29.4187188,
    "lon": -98.4912796,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32790204",
    "slug": "58767",
    "lat": 30.210521,
    "lon": -97.666623,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32790265",
    "slug": "dc14968",
    "lat": 38.520826,
    "lon": -122.869841,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790268",
    "slug": "dc15062",
    "lat": 36.211508,
    "lon": -119.323606,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790269",
    "slug": "dc15203",
    "lat": 39.604058,
    "lon": -106.518074,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790271",
    "slug": "dc14827",
    "lat": 35.620301,
    "lon": -120.686952,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790276",
    "slug": "dc1523",
    "lat": 34.03032,
    "lon": -118.48186,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790278",
    "slug": "dc16584",
    "lat": 39.131869,
    "lon": -123.532571,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790280",
    "slug": "dc15854",
    "lat": 40.371497,
    "lon": -105.524215,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790281",
    "slug": "dc1588",
    "lat": 32.776235,
    "lon": -96.809281,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790293",
    "slug": "dc20703",
    "lat": 27.451425,
    "lon": -99.518638,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790352",
    "slug": "dc2858",
    "lat": 30.395505,
    "lon": -95.637548,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790359",
    "slug": "dc28829",
    "lat": 37.777919,
    "lon": -121.977858,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790362",
    "slug": "dc34169",
    "lat": 36.1385333,
    "lon": -95.9881492,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790363",
    "slug": "dc3417",
    "lat": 33.146664,
    "lon": -117.242044,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790364",
    "slug": "dc3443",
    "lat": 32.847417,
    "lon": -117.275211,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790366",
    "slug": "dc35828",
    "lat": 37.482386,
    "lon": -122.176522,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790373",
    "slug": "dc412",
    "lat": 33.52938,
    "lon": -117.771459,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790405",
    "slug": "dc12490",
    "lat": 29.602679,
    "lon": -98.62229,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790407",
    "slug": "dc12512",
    "lat": 27.80259,
    "lon": -97.453946,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790408",
    "slug": "dc12237",
    "lat": 38.705497,
    "lon": -122.960132,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790414",
    "slug": "dc13206",
    "lat": 34.062404,
    "lon": -117.196918,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790423",
    "slug": "dc13222",
    "lat": 39.475511,
    "lon": -106.050167,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790454",
    "slug": "dc217",
    "lat": 39.63341,
    "lon": -106.52428,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790458",
    "slug": "dc215",
    "lat": 34.072883,
    "lon": -118.389618,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790464",
    "slug": "dc2155",
    "lat": 39.186714,
    "lon": -106.819164,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790507",
    "slug": "dc30210",
    "lat": 38.519773,
    "lon": -122.475455,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790508",
    "slug": "dc29658",
    "lat": 34.417504,
    "lon": -119.670699,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790509",
    "slug": "dc29872",
    "lat": 30.225301,
    "lon": -98.785331,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790511",
    "slug": "dc30295",
    "lat": 29.041398,
    "lon": -96.516627,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790515",
    "slug": "dc30095",
    "lat": 39.639798,
    "lon": -106.375328,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790518",
    "slug": "dc30758",
    "lat": 34.00854,
    "lon": -118.492438,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790525",
    "slug": "dc32878",
    "lat": 40.804184,
    "lon": -124.158086,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790527",
    "slug": "dc32879",
    "lat": 41.746635,
    "lon": -124.178231,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790529",
    "slug": "dc32764",
    "lat": 37.405664,
    "lon": -122.118794,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790531",
    "slug": "dc33933",
    "lat": 32.709565,
    "lon": -117.159897,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790554",
    "slug": "teslafortworth1012burnettst",
    "lat": 32.7480976,
    "lon": -97.3344742,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790581",
    "slug": "dc1435",
    "lat": 36.9506523,
    "lon": -121.8769721,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790582",
    "slug": "dc14596",
    "lat": 38.187013,
    "lon": -119.204192,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790587",
    "slug": "dc14055",
    "lat": 38.107042,
    "lon": -122.862711,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790589",
    "slug": "dc14742",
    "lat": 29.430796,
    "lon": -98.489854,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790658",
    "slug": "dc29402",
    "lat": 27.4619389,
    "lon": -99.5179061,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790723",
    "slug": "dc13066",
    "lat": 35.171801,
    "lon": -103.717137,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790726",
    "slug": "dc12639",
    "lat": 39.297786,
    "lon": -102.606879,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790730",
    "slug": "dc12946",
    "lat": 37.935718,
    "lon": -107.846759,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790733",
    "slug": "dc12900",
    "lat": 37.78679,
    "lon": -122.430143,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790735",
    "slug": "dc13693",
    "lat": 38.430132,
    "lon": -122.337083,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790736",
    "slug": "dc13964",
    "lat": 36.527964,
    "lon": -121.821475,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790738",
    "slug": "dc14180",
    "lat": 33.786281,
    "lon": -117.853549,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790741",
    "slug": "dc13982",
    "lat": 34.04385,
    "lon": -118.257712,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790742",
    "slug": "dc13770",
    "lat": 34.015369,
    "lon": -118.499111,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790819",
    "slug": "dc2804",
    "lat": 34.0257921,
    "lon": -118.4571468,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790824",
    "slug": "dc27888",
    "lat": 34.030817,
    "lon": -118.129937,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790838",
    "slug": "dc32542",
    "lat": 28.662662,
    "lon": -106.127617,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790839",
    "slug": "dc35839",
    "lat": 31.713131,
    "lon": -106.394422,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790859",
    "slug": "dc4949",
    "lat": 38.610448,
    "lon": -122.871408,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790860",
    "slug": "dc5002",
    "lat": 33.94584,
    "lon": -118.381748,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790864",
    "slug": "dc5022",
    "lat": 38.484983,
    "lon": -122.44736,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790880",
    "slug": "dc1070",
    "lat": 36.1062236,
    "lon": -115.1745805,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790885",
    "slug": "dc1063",
    "lat": 38.5776272,
    "lon": -121.4907685,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32790979",
    "slug": "dc24713",
    "lat": 35.674968,
    "lon": -120.729615,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791011",
    "slug": "dc31056",
    "lat": 30.524131,
    "lon": -97.817548,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791024",
    "slug": "dc36176",
    "lat": 30.2560759,
    "lon": -97.8697259,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791025",
    "slug": "dc37232",
    "lat": 35.4481856,
    "lon": -97.5966422,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791026",
    "slug": "dc370",
    "lat": 38.584218,
    "lon": -122.570291,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791032",
    "slug": "dc4704",
    "lat": 38.0435364,
    "lon": -120.2107225,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791037",
    "slug": "dc49010",
    "lat": 40.151155,
    "lon": -105.115307,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791038",
    "slug": "dc48324",
    "lat": 38.5022063,
    "lon": -122.4641502,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791057",
    "slug": "dc15509",
    "lat": 29.777438,
    "lon": -95.96685,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791058",
    "slug": "dc15510",
    "lat": 33.781186,
    "lon": -116.465534,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791061",
    "slug": "dc15786",
    "lat": 38.655932,
    "lon": -122.937324,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791075",
    "slug": "dc187",
    "lat": 33.721415,
    "lon": -116.32681,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791077",
    "slug": "dc18411",
    "lat": 33.107313,
    "lon": -96.676484,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791081",
    "slug": "dc18156",
    "lat": 32.887017,
    "lon": -96.768894,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791082",
    "slug": "dc1888",
    "lat": 39.640059,
    "lon": -106.371498,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791083",
    "slug": "dc18451",
    "lat": 34.09806,
    "lon": -118.368305,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791110",
    "slug": "dc226",
    "lat": 30.5642077,
    "lon": -96.2665727,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791112",
    "slug": "dc22546",
    "lat": 37.3634,
    "lon": -119.700191,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791113",
    "slug": "dc232",
    "lat": 39.240883,
    "lon": -120.05654,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791114",
    "slug": "dc2304",
    "lat": 40.181715,
    "lon": -122.220555,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791118",
    "slug": "dc22394",
    "lat": 29.422799,
    "lon": -98.493049,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791127",
    "slug": "dc26707",
    "lat": 39.626518,
    "lon": -104.901761,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791129",
    "slug": "dc26538",
    "lat": 41.198733,
    "lon": -122.277447,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791130",
    "slug": "dc26524",
    "lat": 39.554428,
    "lon": -104.876384,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791132",
    "slug": "dc29136",
    "lat": 29.13582,
    "lon": -98.146748,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791137",
    "slug": "dc29076",
    "lat": 32.760622,
    "lon": -117.165981,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791158",
    "slug": "dc39164",
    "lat": 35.509773,
    "lon": -97.969936,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791162",
    "slug": "dc3944",
    "lat": 37.875969,
    "lon": -119.858266,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791183",
    "slug": "dc11471",
    "lat": 35.578571,
    "lon": -120.739736,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791186",
    "slug": "dc11153",
    "lat": 27.6281711,
    "lon": -97.2232362,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791188",
    "slug": "dc11464",
    "lat": 35.685123,
    "lon": -105.937455,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791227",
    "slug": "dc189",
    "lat": 36.114311,
    "lon": -115.163239,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791228",
    "slug": "dc1893",
    "lat": 33.125037,
    "lon": -117.208168,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791229",
    "slug": "dc19003",
    "lat": 35.190964,
    "lon": -101.931012,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791246",
    "slug": "dc2031",
    "lat": 35.625553,
    "lon": -120.69206,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791248",
    "slug": "dc2044",
    "lat": 37.6355,
    "lon": -118.99,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791251",
    "slug": "dc2033",
    "lat": 35.149329,
    "lon": -120.65135,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791253",
    "slug": "dc20352",
    "lat": 35.573155,
    "lon": -120.735182,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791254",
    "slug": "dc20606",
    "lat": 37.483726,
    "lon": -121.939835,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791255",
    "slug": "dc2032",
    "lat": 35.180091,
    "lon": -120.735481,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791282",
    "slug": "dc27475",
    "lat": 33.3312429,
    "lon": -105.6767213,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791285",
    "slug": "dc26982",
    "lat": 34.597428,
    "lon": -118.143177,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791291",
    "slug": "dc270",
    "lat": 38.476549,
    "lon": -122.38888,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791339",
    "slug": "dc42631",
    "lat": 32.765875,
    "lon": -96.876091,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791341",
    "slug": "dc42477",
    "lat": 35.682345,
    "lon": -105.945457,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791349",
    "slug": "dc1215",
    "lat": 34.01765,
    "lon": -118.501217,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791351",
    "slug": "dc12151",
    "lat": 34.069888,
    "lon": -118.376637,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791352",
    "slug": "dc12056",
    "lat": 33.66535,
    "lon": -117.881234,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791354",
    "slug": "dc12057",
    "lat": 33.65447,
    "lon": -117.626781,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791356",
    "slug": "dc12082",
    "lat": 39.63943,
    "lon": -106.368139,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791358",
    "slug": "dc12054",
    "lat": 33.776049,
    "lon": -118.072221,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791362",
    "slug": "dc13424",
    "lat": 36.592792,
    "lon": -121.894115,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791363",
    "slug": "dc13278",
    "lat": 27.803051,
    "lon": -97.45418,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791364",
    "slug": "dc13371",
    "lat": 35.189287,
    "lon": -120.721737,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791365",
    "slug": "dc13342",
    "lat": 35.575977,
    "lon": -120.69072,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791367",
    "slug": "dc13527",
    "lat": 34.076247,
    "lon": -118.374499,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791370",
    "slug": "dc13272",
    "lat": 35.579832,
    "lon": -120.718979,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791371",
    "slug": "dc13275",
    "lat": 39.749998,
    "lon": -104.991988,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791372",
    "slug": "dc13503",
    "lat": 39.527251,
    "lon": -119.808769,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791403",
    "slug": "dc20242",
    "lat": 32.2727945,
    "lon": -95.3400216,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791406",
    "slug": "dc19267",
    "lat": 39.673477,
    "lon": -104.830477,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791407",
    "slug": "dc19967",
    "lat": 38.95732,
    "lon": -119.942356,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791408",
    "slug": "dc19922",
    "lat": 36.611223,
    "lon": -121.858855,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791409",
    "slug": "dc19506",
    "lat": 38.533504,
    "lon": -123.276931,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791410",
    "slug": "dc19683",
    "lat": 37.371136,
    "lon": -121.919431,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791411",
    "slug": "dc1978",
    "lat": 36.555642,
    "lon": -121.924563,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791428",
    "slug": "dc2397",
    "lat": 37.269852,
    "lon": -107.885496,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791430",
    "slug": "dc24008",
    "lat": 35.230915,
    "lon": -120.625431,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791432",
    "slug": "dc24081",
    "lat": 30.440841,
    "lon": -97.779967,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791434",
    "slug": "dc2391",
    "lat": 38.599918,
    "lon": -122.639262,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791478",
    "slug": "dc40023",
    "lat": 29.885038,
    "lon": -97.940158,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791480",
    "slug": "dc3973",
    "lat": 29.426547,
    "lon": -98.481086,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791481",
    "slug": "dc40659",
    "lat": 37.416498,
    "lon": -121.953018,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791482",
    "slug": "dc40658",
    "lat": 37.39449,
    "lon": -121.944762,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791485",
    "slug": "dc4039",
    "lat": 29.4172627,
    "lon": -98.4926587,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791486",
    "slug": "dc4046",
    "lat": 34.07626,
    "lon": -118.377534,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791488",
    "slug": "dc43684",
    "lat": 38.703551,
    "lon": -122.858096,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791490",
    "slug": "dc433",
    "lat": 34.050187,
    "lon": -118.460342,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791493",
    "slug": "dc42245",
    "lat": 39.44027,
    "lon": -119.758341,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791494",
    "slug": "dc4564",
    "lat": 33.97856,
    "lon": -117.701131,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791500",
    "slug": "teslasanantonio112collegest",
    "lat": 29.4254459,
    "lon": -98.4905491,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791503",
    "slug": "dc11808",
    "lat": 30.392202,
    "lon": -97.750038,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791509",
    "slug": "dc11537",
    "lat": 38.304309,
    "lon": -122.283944,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791510",
    "slug": "dc11869",
    "lat": 33.930574,
    "lon": -118.400744,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791533",
    "slug": "dc16963",
    "lat": 36.480776,
    "lon": -121.484144,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791534",
    "slug": "dc1669",
    "lat": 37.602645,
    "lon": -122.371,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791535",
    "slug": "dc16921",
    "lat": 39.167011,
    "lon": -120.145385,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791536",
    "slug": "dc16955",
    "lat": 32.922242,
    "lon": -96.9759,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791539",
    "slug": "dc17125",
    "lat": 38.833714,
    "lon": -104.826672,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791540",
    "slug": "dc177",
    "lat": 37.43374,
    "lon": -122.441248,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791541",
    "slug": "dc178",
    "lat": 37.78671,
    "lon": -122.402827,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791545",
    "slug": "dc16954",
    "lat": 32.926755,
    "lon": -96.801658,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791546",
    "slug": "dc1798",
    "lat": 37.336027,
    "lon": -119.64585,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791547",
    "slug": "dc17563",
    "lat": 27.675861,
    "lon": -97.304879,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791570",
    "slug": "dc23690",
    "lat": 34.50141,
    "lon": -118.118245,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791571",
    "slug": "dc23683",
    "lat": 32.826111,
    "lon": -96.847006,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791572",
    "slug": "dc23347",
    "lat": 38.502582,
    "lon": -122.46493,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791576",
    "slug": "dc23422",
    "lat": 38.590351,
    "lon": -122.594049,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791578",
    "slug": "dc23595",
    "lat": 29.253198,
    "lon": -94.851373,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791582",
    "slug": "dc23406",
    "lat": 29.656804,
    "lon": -95.027872,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791588",
    "slug": "dc25192",
    "lat": 35.510883,
    "lon": -97.97023,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791589",
    "slug": "dc25352",
    "lat": 31.7193661,
    "lon": -106.3025164,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791590",
    "slug": "dc25769",
    "lat": 38.900381,
    "lon": -106.966694,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791594",
    "slug": "dc25709",
    "lat": 30.629312,
    "lon": -96.334004,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791595",
    "slug": "dc25327",
    "lat": 38.461982,
    "lon": -122.343979,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791607",
    "slug": "dc31792",
    "lat": 37.409314,
    "lon": -122.123068,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791611",
    "slug": "dc32062",
    "lat": 40.469556,
    "lon": -106.824093,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791612",
    "slug": "dc31839",
    "lat": 37.787828,
    "lon": -122.408731,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791632",
    "slug": "dc46136",
    "lat": 39.553949,
    "lon": -119.49039,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791635",
    "slug": "dc4628",
    "lat": 29.2730722,
    "lon": -94.8518956,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791636",
    "slug": "dc46346",
    "lat": 37.381445,
    "lon": -122.074197,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791638",
    "slug": "dc4710",
    "lat": 38.136964,
    "lon": -120.461852,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791639",
    "slug": "dc4662",
    "lat": 37.792496,
    "lon": -122.39998,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791642",
    "slug": "dc55369",
    "lat": 34.614361,
    "lon": -118.139606,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791666",
    "slug": "52712",
    "lat": 31.559364,
    "lon": -97.12818,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791668",
    "slug": "52752",
    "lat": 29.736559,
    "lon": -95.578191,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791671",
    "slug": "dc838567548",
    "lat": 34.41725,
    "lon": -119.67772,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791693",
    "slug": "dc56028",
    "lat": 36.585678,
    "lon": -121.900656,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791718",
    "slug": "4006663",
    "lat": 27.8997908,
    "lon": -97.1427105,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791736",
    "slug": "443357",
    "lat": 35.3481704,
    "lon": -97.5136575,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791737",
    "slug": "443460",
    "lat": 35.2383596,
    "lon": -96.6720702,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791741",
    "slug": "dc5046",
    "lat": 38.292615,
    "lon": -122.287015,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791743",
    "slug": "dc5088",
    "lat": 36.124239,
    "lon": -121.637041,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791759",
    "slug": "dc863383659",
    "lat": 30.26208,
    "lon": -97.73814,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791772",
    "slug": "dc850282068",
    "lat": 30.11972,
    "lon": -95.43308,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791805",
    "slug": "55270",
    "lat": 34.138117,
    "lon": -118.353378,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791807",
    "slug": "dc6456",
    "lat": 38.577291,
    "lon": -122.876575,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791812",
    "slug": "dc85819",
    "lat": 32.879593,
    "lon": -117.221816,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791817",
    "slug": "dc656",
    "lat": 36.121137,
    "lon": -115.17049,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791829",
    "slug": "400503",
    "lat": 31.545183,
    "lon": -97.128551,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791832",
    "slug": "400865",
    "lat": 33.911943,
    "lon": -118.07081,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791834",
    "slug": "417171",
    "lat": 30.2694884,
    "lon": -97.7456708,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791841",
    "slug": "441603",
    "lat": 32.8140663,
    "lon": -97.4096795,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791849",
    "slug": "dc75055",
    "lat": 30.270818,
    "lon": -98.869207,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791858",
    "slug": "dc5830",
    "lat": 35.6132391,
    "lon": -121.1436427,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791866",
    "slug": "dc5974",
    "lat": 30.546511,
    "lon": -98.360596,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791870",
    "slug": "dc5924",
    "lat": 34.595994,
    "lon": -120.146223,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791877",
    "slug": "53749",
    "lat": 32.715733,
    "lon": -117.149026,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791881",
    "slug": "dc71119",
    "lat": 38.6503968,
    "lon": -122.9122202,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791894",
    "slug": "dc77851",
    "lat": 37.791537,
    "lon": -122.412813,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791897",
    "slug": "dc613",
    "lat": 39.1866234,
    "lon": -106.8175696,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791917",
    "slug": "4004256",
    "lat": 34.1915026,
    "lon": -118.3345446,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791922",
    "slug": "4005363",
    "lat": 32.7995167,
    "lon": -96.8047489,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791931",
    "slug": "419713",
    "lat": 30.9022217,
    "lon": -102.9042984,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791933",
    "slug": "418563",
    "lat": 30.3495605,
    "lon": -103.6930362,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791941",
    "slug": "442314",
    "lat": 39.499583,
    "lon": -121.56993,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791942",
    "slug": "442305",
    "lat": 34.59092,
    "lon": -120.1405488,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32791946",
    "slug": "51462",
    "lat": 32.618284,
    "lon": -116.969416,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791948",
    "slug": "dc863393413",
    "lat": 30.2628141,
    "lon": -97.741677,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791949",
    "slug": "51443",
    "lat": 38.496609,
    "lon": -123.008915,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791973",
    "slug": "52644",
    "lat": 28.546106,
    "lon": -99.843991,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791993",
    "slug": "54486",
    "lat": 28.041186,
    "lon": -97.057717,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32791998",
    "slug": "54477",
    "lat": 29.7312956,
    "lon": -99.0792105,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792005",
    "slug": "dc682",
    "lat": 39.1867406,
    "lon": -106.8215018,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792051",
    "slug": "440052",
    "lat": 33.713682,
    "lon": -117.9249459,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792053",
    "slug": "439658",
    "lat": 32.3209636,
    "lon": -106.748101,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792059",
    "slug": "dc5898",
    "lat": 40.521984,
    "lon": -105.02307,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792067",
    "slug": "52304",
    "lat": 27.7578,
    "lon": -97.46041,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792095",
    "slug": "dc561",
    "lat": 33.0889411,
    "lon": -96.8062995,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792097",
    "slug": "dc675",
    "lat": 39.3154958,
    "lon": -123.799205,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792098",
    "slug": "54597",
    "lat": 38.797561,
    "lon": -104.792491,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792101",
    "slug": "dc85939",
    "lat": 28.699859,
    "lon": -100.562326,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792103",
    "slug": "55232",
    "lat": 32.96061,
    "lon": -96.63871,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792107",
    "slug": "dc6455",
    "lat": 38.565799,
    "lon": -122.556772,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792132",
    "slug": "409373",
    "lat": 36.2294874,
    "lon": -95.3389694,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792133",
    "slug": "409443",
    "lat": 40.521946,
    "lon": -105.051677,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792135",
    "slug": "426459",
    "lat": 38.4970871,
    "lon": -105.320849,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792137",
    "slug": "426016",
    "lat": 38.7898799,
    "lon": -104.726023,
    "locationType": [
      "destination_charger_nontesla",
      "self_serve_demo_drive"
    ]
  },
  {
    "uuid": "32792140",
    "slug": "440953",
    "lat": 34.6596891,
    "lon": -118.1650236,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792146",
    "slug": "dc54888",
    "lat": 38.626332,
    "lon": -122.874809,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792147",
    "slug": "dc510",
    "lat": 34.041963,
    "lon": -118.256607,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792154",
    "slug": "dc6574",
    "lat": 33.4577232,
    "lon": -117.6706401,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792163",
    "slug": "dc62440",
    "lat": 32.793507,
    "lon": -96.778001,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792193",
    "slug": "dc974",
    "lat": 33.946082,
    "lon": -118.3842664,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792196",
    "slug": "dc662",
    "lat": 39.4967139,
    "lon": -119.8001607,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792197",
    "slug": "dc40164",
    "lat": 33.145167,
    "lon": -96.824985,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792199",
    "slug": "dc80658",
    "lat": 38.580905,
    "lon": -121.495496,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792206",
    "slug": "dc6247",
    "lat": 37.5220717,
    "lon": -122.5135405,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792211",
    "slug": "dc665",
    "lat": 32.7176572,
    "lon": -117.1669007,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792219",
    "slug": "55363",
    "lat": 33.771781,
    "lon": -118.371064,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792225",
    "slug": "405815",
    "lat": 36.141664,
    "lon": -115.155963,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792230",
    "slug": "405765",
    "lat": 36.108519,
    "lon": -115.1557513,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792237",
    "slug": "422949",
    "lat": 32.4455915,
    "lon": -93.7232166,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792240",
    "slug": "422600",
    "lat": 30.4175516,
    "lon": -97.7489787,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792241",
    "slug": "422514",
    "lat": 33.9459772,
    "lon": -118.3927135,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792244",
    "slug": "424069",
    "lat": 26.2003558,
    "lon": -98.2620646,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792246",
    "slug": "421267",
    "lat": 39.5696512,
    "lon": -104.8676268,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792247",
    "slug": "422664",
    "lat": 33.0432788,
    "lon": -97.0662304,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792264",
    "slug": "52395",
    "lat": 29.754295,
    "lon": -95.362575,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792277",
    "slug": "dc72584",
    "lat": 37.3291551,
    "lon": -122.0131634,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792290",
    "slug": "54166",
    "lat": 34.215799,
    "lon": -118.484739,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792293",
    "slug": "55032",
    "lat": 34.101389,
    "lon": -118.341713,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792299",
    "slug": "54962",
    "lat": 40.0152234,
    "lon": -105.2085706,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792302",
    "slug": "dc647",
    "lat": 38.3935452,
    "lon": -122.6930142,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792323",
    "slug": "406163",
    "lat": 33.025605,
    "lon": -117.076951,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792324",
    "slug": "406218",
    "lat": 37.3716564,
    "lon": -118.3957488,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792328",
    "slug": "414502",
    "lat": 37.8209394,
    "lon": -122.2647778,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792331",
    "slug": "434254",
    "lat": 36.1595378,
    "lon": -115.1365846,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792334",
    "slug": "433806",
    "lat": 39.2536667,
    "lon": -122.029276,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792335",
    "slug": "433854",
    "lat": 35.1005439,
    "lon": -106.5616477,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792336",
    "slug": "429854",
    "lat": 35.051765,
    "lon": -106.631443,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792337",
    "slug": "dc5148",
    "lat": 37.535982,
    "lon": -122.062901,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792340",
    "slug": "dc5177",
    "lat": 38.518276,
    "lon": -122.482185,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792346",
    "slug": "51809",
    "lat": 37.230772,
    "lon": -122.0959575,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792366",
    "slug": "dc6073",
    "lat": 39.292319,
    "lon": -119.657538,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792382",
    "slug": "dc81901",
    "lat": 34.9205804,
    "lon": -115.0668069,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792384",
    "slug": "53825",
    "lat": 37.4935,
    "lon": -120.84782,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792385",
    "slug": "dc6433",
    "lat": 34.042799,
    "lon": -118.262703,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792419",
    "slug": "58610",
    "lat": 33.802116,
    "lon": -117.922628,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792420",
    "slug": "teslaaustin8212bartonclubdraustintx78735omnibartoncreekresortspa",
    "lat": 30.29124,
    "lon": -97.85832,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32792426",
    "slug": "409470",
    "lat": 34.093037,
    "lon": -118.2914425,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792431",
    "slug": "409467",
    "lat": 32.915896,
    "lon": -96.7732501,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792433",
    "slug": "409478",
    "lat": 30.2075736,
    "lon": -98.1286851,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792436",
    "slug": "428054",
    "lat": 32.1445512,
    "lon": -96.0912613,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32792725",
    "slug": "29142",
    "lat": 34.218341,
    "lon": -119.04569,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792793",
    "slug": "centennialcosupercharger",
    "lat": 39.567251,
    "lon": -104.877918,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792795",
    "slug": "conifercosupercharger",
    "lat": 39.544076,
    "lon": -105.289933,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792864",
    "slug": "FortBraggCAsupercharger",
    "lat": 39.421118,
    "lon": -123.807368,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792866",
    "slug": "ElCentroCAsupercharger",
    "lat": 32.773132,
    "lon": -115.550309,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792886",
    "slug": "VillaAhumadaChihuahuasupercharger",
    "lat": 30.623561,
    "lon": -106.514457,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792890",
    "slug": "chihuahuasupercharger",
    "lat": 28.630123,
    "lon": -106.12058,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792914",
    "slug": "BakersfieldCopusSupercharger21",
    "lat": 35.094568,
    "lon": -119.040133,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792930",
    "slug": "ElPortalCAsupercharger",
    "lat": 37.679176,
    "lon": -119.763098,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792932",
    "slug": "AlturasCAsupercharger",
    "lat": 41.495372,
    "lon": -120.559782,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792962",
    "slug": "KyleTXSupercharger",
    "lat": 30.012812,
    "lon": -97.862652,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792968",
    "slug": "13887",
    "lat": 37.055667,
    "lon": -120.875165,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792972",
    "slug": "LoomisCAsupercharger",
    "lat": 38.817419,
    "lon": -121.189423,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32792988",
    "slug": "thortoncosupercharger",
    "lat": 39.914831,
    "lon": -104.986678,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793016",
    "slug": "OakhurstCASupercharger",
    "lat": 37.333618,
    "lon": -119.645186,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793018",
    "slug": "14242",
    "lat": 37.74729,
    "lon": -121.141781,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793020",
    "slug": "ArvinCAsupercharger",
    "lat": 34.985712,
    "lon": -118.943935,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793032",
    "slug": "CabazonCASupercharger2",
    "lat": 33.92366,
    "lon": -116.803212,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793034",
    "slug": "AllenTXQ322",
    "lat": 33.129626,
    "lon": -96.674108,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793040",
    "slug": "TruckeeCAsupercharger",
    "lat": 39.3199,
    "lon": -120.155875,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793046",
    "slug": "superiorcosouthmarshallroadsupercharging",
    "lat": 39.954889,
    "lon": -105.164575,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793050",
    "slug": "CraigCOsupercharger",
    "lat": 40.514098,
    "lon": -107.539133,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32793052",
    "slug": "YrekaCAsupercharger",
    "lat": 41.701511,
    "lon": -122.645113,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793071",
    "slug": "SilverthorneCOsupercharger",
    "lat": 39.645915,
    "lon": -106.080116,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793079",
    "slug": "16220",
    "lat": 34.136811,
    "lon": -117.908529,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793093",
    "slug": "greenfieldcasupercharger",
    "lat": 36.329299,
    "lon": -121.24548,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793111",
    "slug": "lowellarsupercharger",
    "lat": 36.255358,
    "lon": -94.152633,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793113",
    "slug": "EdwardsCOSupercharger",
    "lat": 39.648563,
    "lon": -106.587126,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793125",
    "slug": "AuburnCAsupercharger",
    "lat": 38.926283,
    "lon": -121.058064,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793185",
    "slug": "westlakehillstxsupercharger",
    "lat": 30.2898,
    "lon": -97.827474,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793187",
    "slug": "WhartonTXSupercharger",
    "lat": 29.325153,
    "lon": -96.124313,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32793205",
    "slug": "hustontxhempsteadroadsupercharger",
    "lat": 29.91308,
    "lon": -95.615888,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793213",
    "slug": "18084",
    "lat": 30.502829,
    "lon": -97.580934,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793219",
    "slug": "AlbuquerqueNMSupercharger2",
    "lat": 35.1043,
    "lon": -106.565943,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793223",
    "slug": "CastaicCASupercharger",
    "lat": 34.452163,
    "lon": -118.616109,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793233",
    "slug": "AustinTXSupercharger10",
    "lat": 30.226205,
    "lon": -97.82193,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793239",
    "slug": "20692",
    "lat": 39.393759,
    "lon": -119.766976,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793243",
    "slug": "18566",
    "lat": 35.527594,
    "lon": -120.702875,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793249",
    "slug": "SanAntonioTXAlamoHeightssupercharger",
    "lat": 29.610496,
    "lon": -98.488674,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793251",
    "slug": "20533",
    "lat": 37.377267,
    "lon": -118.422565,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793257",
    "slug": "VallejoCASupercharger",
    "lat": 38.104488,
    "lon": -122.230395,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793261",
    "slug": "AustinTXCentralsupercharger",
    "lat": 30.247179,
    "lon": -97.750003,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793267",
    "slug": "20923",
    "lat": 40.902853,
    "lon": -124.083024,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793273",
    "slug": "SoccoroNMsupercharger",
    "lat": 34.071722,
    "lon": -106.892959,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793289",
    "slug": "BaytownTXSupercharger",
    "lat": 29.801474,
    "lon": -94.998058,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32793299",
    "slug": "20472",
    "lat": 29.4289,
    "lon": -95.0644,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32793303",
    "slug": "19044",
    "lat": 31.429766,
    "lon": -100.512491,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793311",
    "slug": "19122",
    "lat": 36.157865,
    "lon": -115.333804,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793313",
    "slug": "19146",
    "lat": 33.672459,
    "lon": -95.52005,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793357",
    "slug": "20309",
    "lat": 29.650997,
    "lon": -97.595652,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32793361",
    "slug": "19232",
    "lat": 32.340654,
    "lon": -108.713904,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32793369",
    "slug": "NeedlesCAsupercharger",
    "lat": 34.850923,
    "lon": -114.622888,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793375",
    "slug": "ValenciaCAQ322",
    "lat": 34.423692,
    "lon": -118.584527,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793377",
    "slug": "DunniganCAQ322",
    "lat": 38.86286,
    "lon": -121.951549,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793387",
    "slug": "20485",
    "lat": 33.178594,
    "lon": -97.101533,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32793391",
    "slug": "25854",
    "lat": 29.49712,
    "lon": -98.482133,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793497",
    "slug": "pismobeachcasupercharger",
    "lat": 35.13665,
    "lon": -120.628702,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793579",
    "slug": "sanclementecaavenidavistahermosasupercharger",
    "lat": 33.463116,
    "lon": -117.607924,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793671",
    "slug": "MountainVillageCOsupercharger",
    "lat": 37.933397,
    "lon": -107.854592,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793781",
    "slug": "whitehillsazsupercharger",
    "lat": 35.700235,
    "lon": -114.476092,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793912",
    "slug": "teslasanantonio607salamost",
    "lat": 29.4176314,
    "lon": -98.4885653,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32793914",
    "slug": "tahoecitysupercharger",
    "lat": 39.167745,
    "lon": -120.144472,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32793919",
    "slug": "477057",
    "lat": 34.1808746,
    "lon": -118.3090364,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32793952",
    "slug": "438766",
    "lat": 36.0425488,
    "lon": -115.1526358,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793956",
    "slug": "58765",
    "lat": 32.151799,
    "lon": -94.787308,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32793975",
    "slug": "32648",
    "lat": 31.886436,
    "lon": -106.580786,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794059",
    "slug": "416259",
    "lat": 38.871035,
    "lon": -104.822445,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32794061",
    "slug": "58900",
    "lat": 35.191789,
    "lon": -101.722212,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32794063",
    "slug": "58327",
    "lat": 36.239084,
    "lon": -115.116117,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794077",
    "slug": "32367",
    "lat": 32.578964,
    "lon": -97.317692,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794089",
    "slug": "26999",
    "lat": 34.919556,
    "lon": -116.769144,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794097",
    "slug": "30569",
    "lat": 35.268984,
    "lon": -116.066689,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794105",
    "slug": "412627",
    "lat": 35.880089,
    "lon": -97.395593,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794123",
    "slug": "nashtx",
    "lat": 33.452316,
    "lon": -94.131086,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794149",
    "slug": "lasvegasnveastsaharaavesupercharger",
    "lat": 36.145396,
    "lon": -115.102978,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794153",
    "slug": "26970",
    "lat": 29.99713,
    "lon": -95.57552,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794177",
    "slug": "35400",
    "lat": 33.102506,
    "lon": -96.808687,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794183",
    "slug": "58751",
    "lat": 36.103781,
    "lon": -95.912091,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794195",
    "slug": "29612",
    "lat": 39.748228,
    "lon": -105.057764,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794221",
    "slug": "26823",
    "lat": 32.783342,
    "lon": -97.273693,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794223",
    "slug": "26969",
    "lat": 29.580957,
    "lon": -95.391909,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32794245",
    "slug": "402621",
    "lat": 33.52775,
    "lon": -101.871049,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794257",
    "slug": "33908",
    "lat": 32.406277,
    "lon": -99.766841,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794259",
    "slug": "brownsvilletxbocachicablvd",
    "lat": 25.943927,
    "lon": -97.429526,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794291",
    "slug": "26976",
    "lat": 34.280574,
    "lon": -118.454457,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794303",
    "slug": "31888",
    "lat": 39.468601,
    "lon": -119.794005,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794391",
    "slug": "402609",
    "lat": 39.502851,
    "lon": -120.000068,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794395",
    "slug": "CollegeStationTXQ42022",
    "lat": 30.612959,
    "lon": -96.317135,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794407",
    "slug": "26828",
    "lat": 35.264578,
    "lon": -101.830734,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794411",
    "slug": "32766",
    "lat": 30.214927,
    "lon": -97.742312,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794425",
    "slug": "32498",
    "lat": 38.239211,
    "lon": -120.364858,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794475",
    "slug": "403607",
    "lat": 29.185201,
    "lon": -98.844916,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794495",
    "slug": "31117",
    "lat": 38.965713,
    "lon": -104.785245,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794507",
    "slug": "27055",
    "lat": 32.440581,
    "lon": -95.137062,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794543",
    "slug": "56652",
    "lat": 37.760694,
    "lon": -121.435408,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794549",
    "slug": "402203",
    "lat": 40.617725,
    "lon": -103.181034,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32794563",
    "slug": "58726",
    "lat": 33.134345,
    "lon": -96.055096,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794565",
    "slug": "59081",
    "lat": 38.763963,
    "lon": -102.790932,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32794567",
    "slug": "403157",
    "lat": 30.200095,
    "lon": -97.767168,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794571",
    "slug": "408203",
    "lat": 30.376938,
    "lon": -96.068166,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794597",
    "slug": "27129",
    "lat": 31.706223,
    "lon": -98.122215,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794617",
    "slug": "26974",
    "lat": 28.445995,
    "lon": -99.243522,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32794649",
    "slug": "412956",
    "lat": 33.803654,
    "lon": -118.168902,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794932",
    "slug": "19099",
    "lat": 31.0728,
    "lon": -97.661556,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32794954",
    "slug": "dc11787",
    "lat": 32.775408,
    "lon": -117.238673,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794956",
    "slug": "dc11534",
    "lat": 38.548889,
    "lon": -122.807771,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794962",
    "slug": "dc1203",
    "lat": 38.1462792,
    "lon": -121.3071982,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794963",
    "slug": "dc1211",
    "lat": 34.1550113,
    "lon": -118.8250613,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794965",
    "slug": "dc1213",
    "lat": 36.123416,
    "lon": -115.170499,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794966",
    "slug": "dc13814",
    "lat": 32.911856,
    "lon": -96.445093,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794975",
    "slug": "dc14804",
    "lat": 26.086101,
    "lon": -97.161711,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794979",
    "slug": "dc13757",
    "lat": 38.189017,
    "lon": -121.179699,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794984",
    "slug": "dc13609",
    "lat": 32.839168,
    "lon": -116.777635,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32794999",
    "slug": "dc1071",
    "lat": 33.088507,
    "lon": -96.839327,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795013",
    "slug": "dc13203",
    "lat": 34.070169,
    "lon": -117.555636,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795016",
    "slug": "dc13460",
    "lat": 29.741523,
    "lon": -95.456936,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795024",
    "slug": "11369",
    "lat": 34.2410626,
    "lon": -116.9117147,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795047",
    "slug": "dc12928",
    "lat": 35.581241,
    "lon": -120.796249,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795053",
    "slug": "dc12890",
    "lat": 29.327509,
    "lon": -96.119565,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795054",
    "slug": "dc12891",
    "lat": 38.43722,
    "lon": -122.402878,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795055",
    "slug": "dc12888",
    "lat": 38.455324,
    "lon": -122.365144,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795056",
    "slug": "dc12907",
    "lat": 38.509445,
    "lon": -122.804181,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795085",
    "slug": "dc12902",
    "lat": 29.684177,
    "lon": -95.422822,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795088",
    "slug": "dc12569",
    "lat": 38.579938,
    "lon": -122.513364,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795091",
    "slug": "dc12579",
    "lat": 39.475852,
    "lon": -106.053193,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795099",
    "slug": "dc15206",
    "lat": 33.655156,
    "lon": -117.999073,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795101",
    "slug": "dc14718",
    "lat": 33.720792,
    "lon": -116.330965,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795102",
    "slug": "dc15204",
    "lat": 35.508796,
    "lon": -97.971365,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795103",
    "slug": "dc14325",
    "lat": 32.913497,
    "lon": -97.009805,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795106",
    "slug": "dc15298",
    "lat": 34.244518,
    "lon": -119.19819,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795141",
    "slug": "dc21369",
    "lat": 30.302371,
    "lon": -104.020604,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795145",
    "slug": "dc21152",
    "lat": 29.60206,
    "lon": -97.950029,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795147",
    "slug": "dc2063",
    "lat": 39.567662,
    "lon": -104.867708,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795149",
    "slug": "dc24414",
    "lat": 38.526095,
    "lon": -122.552481,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795155",
    "slug": "dc23817",
    "lat": 38.428535,
    "lon": -122.851653,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795166",
    "slug": "dc27171",
    "lat": 29.78184,
    "lon": -95.559549,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795169",
    "slug": "dc26639",
    "lat": 40.062531,
    "lon": -105.204787,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795175",
    "slug": "dc24674",
    "lat": 38.67324,
    "lon": -122.933823,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795177",
    "slug": "dc26447",
    "lat": 26.201662,
    "lon": -98.261791,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795199",
    "slug": "dc4041",
    "lat": 40.968004,
    "lon": -117.7413696,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795206",
    "slug": "dc40826",
    "lat": 36.568768,
    "lon": -121.950626,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795207",
    "slug": "dc40822",
    "lat": 34.08998,
    "lon": -118.116006,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795212",
    "slug": "dc15946",
    "lat": 38.560154,
    "lon": -122.473722,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795227",
    "slug": "dc16959",
    "lat": 33.070665,
    "lon": -96.865057,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795230",
    "slug": "dc15875",
    "lat": 34.013746,
    "lon": -118.492066,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795235",
    "slug": "dc19898",
    "lat": 29.309704,
    "lon": -94.790271,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795240",
    "slug": "dc19631",
    "lat": 37.704375,
    "lon": -121.865755,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795272",
    "slug": "dc25236",
    "lat": 36.102719,
    "lon": -115.201984,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795285",
    "slug": "dc299",
    "lat": 34.438204,
    "lon": -119.254609,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795287",
    "slug": "dc305",
    "lat": 37.857507,
    "lon": -122.24184,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795288",
    "slug": "dc30060",
    "lat": 41.740992,
    "lon": -120.194759,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795296",
    "slug": "dc29881",
    "lat": 35.84727,
    "lon": -101.974035,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795325",
    "slug": "dc1528",
    "lat": 35.146613,
    "lon": -120.645444,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795330",
    "slug": "dc185",
    "lat": 34.416592,
    "lon": -119.641575,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795332",
    "slug": "dc18850",
    "lat": 37.973467,
    "lon": -120.238499,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795337",
    "slug": "dc18804",
    "lat": 38.521258,
    "lon": -122.380629,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795340",
    "slug": "dc18797",
    "lat": 38.632637,
    "lon": -122.895148,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795344",
    "slug": "dc2116",
    "lat": 38.300246,
    "lon": -122.404857,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795345",
    "slug": "dc21333",
    "lat": 36.127464,
    "lon": -97.055908,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795356",
    "slug": "dc24100",
    "lat": 30.396418,
    "lon": -97.931356,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795358",
    "slug": "dc2356",
    "lat": 39.52788,
    "lon": -119.813754,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795361",
    "slug": "dc2296",
    "lat": 40.001616,
    "lon": -105.257982,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795372",
    "slug": "dc272",
    "lat": 34.144974,
    "lon": -118.370105,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795385",
    "slug": "dc35840",
    "lat": 31.738139,
    "lon": -106.434018,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795399",
    "slug": "dc37433",
    "lat": 38.406124,
    "lon": -122.366872,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795403",
    "slug": "dc37438",
    "lat": 39.0693962,
    "lon": -108.1507337,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795404",
    "slug": "dc37041",
    "lat": 36.169111,
    "lon": -115.291303,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795410",
    "slug": "dc36534",
    "lat": 35.381067,
    "lon": -97.058179,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795415",
    "slug": "dc17131",
    "lat": 38.635601,
    "lon": -121.992605,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795416",
    "slug": "dc17214",
    "lat": 33.848991,
    "lon": -118.394897,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795417",
    "slug": "dc176",
    "lat": 39.324349,
    "lon": -120.169376,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795420",
    "slug": "dc1807",
    "lat": 32.864472,
    "lon": -96.541511,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795421",
    "slug": "dc18764",
    "lat": 32.824473,
    "lon": -97.059412,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795422",
    "slug": "dc18466",
    "lat": 36.139946,
    "lon": -115.15228,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795423",
    "slug": "dc175",
    "lat": 38.522276,
    "lon": -122.46597,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795425",
    "slug": "dc1774",
    "lat": 36.8086559,
    "lon": -119.7810627,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795429",
    "slug": "dc17779",
    "lat": 33.455421,
    "lon": -117.106088,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795430",
    "slug": "dc1820",
    "lat": 39.504449,
    "lon": -119.779649,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795431",
    "slug": "dc1797",
    "lat": 37.810487,
    "lon": -121.991211,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795495",
    "slug": "dc2824",
    "lat": 37.260149,
    "lon": -108.494074,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795496",
    "slug": "dc28006",
    "lat": 39.72402,
    "lon": -121.815098,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795498",
    "slug": "dc28333",
    "lat": 39.596408,
    "lon": -104.884219,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795506",
    "slug": "dc28820",
    "lat": 38.900908,
    "lon": -106.967755,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795510",
    "slug": "dc3465",
    "lat": 33.801643,
    "lon": -116.529291,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795512",
    "slug": "dc33682",
    "lat": 34.020235,
    "lon": -118.787141,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795520",
    "slug": "dc42628",
    "lat": 38.532508,
    "lon": -122.80288,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795521",
    "slug": "dc42479",
    "lat": 29.473895,
    "lon": -98.462295,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795522",
    "slug": "dc42343",
    "lat": 33.780004,
    "lon": -116.469577,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795532",
    "slug": "dc42642",
    "lat": 40.017573,
    "lon": -105.259635,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795595",
    "slug": "26635",
    "lat": 29.778898,
    "lon": -95.559446,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32795637",
    "slug": "27048",
    "lat": 33.782771,
    "lon": -118.1824,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32795649",
    "slug": "35789",
    "lat": 41.421666,
    "lon": -122.384675,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32795753",
    "slug": "31091",
    "lat": 39.487495,
    "lon": -119.797114,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32795770",
    "slug": "dc2137",
    "lat": 35.192673,
    "lon": -101.932979,
    "locationType": [
      "destination_charger_nontesla",
      "self_serve_demo_drive"
    ]
  },
  {
    "uuid": "32795779",
    "slug": "dc12794",
    "lat": 30.633489,
    "lon": -96.323218,
    "locationType": [
      "destination_charger",
      "self_serve_demo_drive"
    ]
  },
  {
    "uuid": "32795783",
    "slug": "442462",
    "lat": 36.3263839,
    "lon": -119.3932168,
    "locationType": [
      "destination_charger_nontesla",
      "self_serve_demo_drive"
    ]
  },
  {
    "uuid": "32795802",
    "slug": "439504",
    "lat": 36.071452,
    "lon": -115.2764426,
    "locationType": [
      "self_serve_demo_drive",
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32795816",
    "slug": "dc41817",
    "lat": 35.620507,
    "lon": -120.845779,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795818",
    "slug": "dc46958",
    "lat": 38.507359,
    "lon": -122.897396,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795821",
    "slug": "dc4683",
    "lat": 38.507342,
    "lon": -122.428543,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795822",
    "slug": "dc436",
    "lat": 32.904137,
    "lon": -117.24453,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795824",
    "slug": "dc5068",
    "lat": 38.348616,
    "lon": -122.264465,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795825",
    "slug": "dc5077",
    "lat": 34.045531,
    "lon": -118.264006,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795831",
    "slug": "dc51568",
    "lat": 39.533519,
    "lon": -119.721286,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795832",
    "slug": "dc5169",
    "lat": 29.8708932,
    "lon": -96.4644899,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795836",
    "slug": "dc5196",
    "lat": 35.662696,
    "lon": -120.668302,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795844",
    "slug": "51687",
    "lat": 34.058925,
    "lon": -118.363501,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795853",
    "slug": "dc771",
    "lat": 33.831533,
    "lon": -116.545469,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795861",
    "slug": "dc40162",
    "lat": 33.146219,
    "lon": -96.82591,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795866",
    "slug": "dc60779",
    "lat": 35.618299,
    "lon": -120.690059,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795869",
    "slug": "53946",
    "lat": 38.318338,
    "lon": -122.241068,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795874",
    "slug": "409468",
    "lat": 36.1679707,
    "lon": -95.7606892,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795879",
    "slug": "426017",
    "lat": 33.9210317,
    "lon": -118.3904769,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795883",
    "slug": "dc1078",
    "lat": 33.757998,
    "lon": -116.360617,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795906",
    "slug": "WallerTXSupercharger",
    "lat": 30.070749,
    "lon": -95.930802,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32795926",
    "slug": "51226",
    "lat": 38.081395,
    "lon": -122.519268,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795927",
    "slug": "51248",
    "lat": 39.306874,
    "lon": -120.162897,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795928",
    "slug": "51237",
    "lat": 37.215685,
    "lon": -122.406267,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795931",
    "slug": "51216",
    "lat": 34.052181,
    "lon": -118.14138,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795935",
    "slug": "51134",
    "lat": 30.275675,
    "lon": -97.708232,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795937",
    "slug": "51250",
    "lat": 35.187147,
    "lon": -120.702292,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795938",
    "slug": "51163",
    "lat": 38.576085,
    "lon": -121.840185,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795939",
    "slug": "51197",
    "lat": 38.504536,
    "lon": -122.475094,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795944",
    "slug": "51161",
    "lat": 38.866623,
    "lon": -119.999722,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795945",
    "slug": "51287",
    "lat": 39.329284,
    "lon": -120.184278,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795958",
    "slug": "dc684",
    "lat": 39.19082,
    "lon": -106.819492,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795970",
    "slug": "dc6059",
    "lat": 34.068876,
    "lon": -118.402376,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795988",
    "slug": "dc59077",
    "lat": 38.463407,
    "lon": -122.718931,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795991",
    "slug": "54668",
    "lat": 38.672352,
    "lon": -122.804252,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32795998",
    "slug": "55457",
    "lat": 30.318987,
    "lon": -97.986484,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796005",
    "slug": "dc6432",
    "lat": 34.062301,
    "lon": -118.290127,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796050",
    "slug": "dc21862",
    "lat": 38.491195,
    "lon": -121.099724,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796057",
    "slug": "dc22391",
    "lat": 34.413249,
    "lon": -119.689955,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796058",
    "slug": "dc21942",
    "lat": 36.477736,
    "lon": -121.728896,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796066",
    "slug": "dc25991",
    "lat": 31.736807,
    "lon": -106.450756,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796084",
    "slug": "dc25161",
    "lat": 26.926081,
    "lon": -101.419847,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796105",
    "slug": "dc32691",
    "lat": 37.664601,
    "lon": -121.026568,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796108",
    "slug": "dc31790",
    "lat": 39.723118,
    "lon": -120.662973,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796111",
    "slug": "dc325",
    "lat": 30.259012,
    "lon": -97.747352,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796113",
    "slug": "dc32634",
    "lat": 36.465716,
    "lon": -105.661428,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796114",
    "slug": "dc31805",
    "lat": 37.73313,
    "lon": -122.505159,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796142",
    "slug": "dc54328",
    "lat": 32.939979,
    "lon": -116.873918,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796147",
    "slug": "dc51354",
    "lat": 33.677573,
    "lon": -116.295878,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796148",
    "slug": "dc6325",
    "lat": 35.645249,
    "lon": -120.802495,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796150",
    "slug": "dc54495",
    "lat": 40.474278,
    "lon": -104.891562,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796172",
    "slug": "dc6146",
    "lat": 33.723051,
    "lon": -116.32682,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796176",
    "slug": "dc671",
    "lat": 33.6785156,
    "lon": -117.850042,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796209",
    "slug": "dc9518",
    "lat": 38.5283957,
    "lon": -122.4977783,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796210",
    "slug": "dc710",
    "lat": 34.101608,
    "lon": -118.325804,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32796989",
    "slug": "14525",
    "lat": 34.027975,
    "lon": -118.394144,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797046",
    "slug": "28562",
    "lat": 38.94037,
    "lon": -119.977871,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797063",
    "slug": "29307",
    "lat": 35.626768,
    "lon": -120.687249,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797073",
    "slug": "58746",
    "lat": 32.727658,
    "lon": -97.364482,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797076",
    "slug": "26604",
    "lat": 34.368323,
    "lon": -118.509294,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797141",
    "slug": "58717",
    "lat": 32.763049,
    "lon": -97.166805,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32797220",
    "slug": "32612",
    "lat": 29.432158,
    "lon": -98.482699,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797271",
    "slug": "richmondcapiercestreetsupercharger",
    "lat": 37.898425,
    "lon": -122.308895,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797300",
    "slug": "57584",
    "lat": 34.143443,
    "lon": -118.753306,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797312",
    "slug": "21092",
    "lat": 36.022121,
    "lon": -115.089228,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797318",
    "slug": "McKinneyTX2Q42022",
    "lat": 33.151846,
    "lon": -96.717142,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797320",
    "slug": "18209",
    "lat": 38.133201,
    "lon": -122.2188,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797348",
    "slug": "KettlemanCityCAsupercharger",
    "lat": 35.986211,
    "lon": -119.957549,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797352",
    "slug": "DiamondBarCASupercharger",
    "lat": 33.975843,
    "lon": -117.838428,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797354",
    "slug": "18609",
    "lat": 37.329637,
    "lon": -121.912137,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797370",
    "slug": "21050",
    "lat": 32.986307,
    "lon": -117.271586,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797374",
    "slug": "27636",
    "lat": 37.425332,
    "lon": -121.914538,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797384",
    "slug": "LakewoodCASupercharger",
    "lat": 33.858572,
    "lon": -118.116412,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797386",
    "slug": "modestocasiskroadsupercharger",
    "lat": 37.694436,
    "lon": -121.064463,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797388",
    "slug": "CarlsbadCAsupercharger",
    "lat": 33.124747,
    "lon": -117.319272,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797398",
    "slug": "11897",
    "lat": 34.035783,
    "lon": -118.238359,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797400",
    "slug": "18208",
    "lat": 37.422287,
    "lon": -121.917645,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797404",
    "slug": "31297",
    "lat": 34.028502,
    "lon": -117.760354,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797406",
    "slug": "36090",
    "lat": 33.993183,
    "lon": -117.055982,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797416",
    "slug": "31548",
    "lat": 38.221269,
    "lon": -122.127033,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797418",
    "slug": "45419",
    "lat": 38.464307,
    "lon": -121.494949,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797424",
    "slug": "36259",
    "lat": 34.010078,
    "lon": -117.961169,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797445",
    "slug": "16661",
    "lat": 37.705304,
    "lon": -121.876607,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797453",
    "slug": "19899",
    "lat": 33.17003,
    "lon": -117.219036,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797455",
    "slug": "32029",
    "lat": 37.980727,
    "lon": -122.565601,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797463",
    "slug": "58904",
    "lat": 33.068216,
    "lon": -117.267058,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797467",
    "slug": "18586",
    "lat": 36.837781,
    "lon": -121.391269,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797473",
    "slug": "34834",
    "lat": 37.699985,
    "lon": -121.870963,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797495",
    "slug": "45368",
    "lat": 34.136494,
    "lon": -117.196535,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797497",
    "slug": "26422",
    "lat": 33.66482,
    "lon": -117.864847,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797501",
    "slug": "27763",
    "lat": 33.831866,
    "lon": -118.0787,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797503",
    "slug": "28249",
    "lat": 32.804093,
    "lon": -117.009022,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797513",
    "slug": "25940",
    "lat": 39.111092,
    "lon": -121.556658,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797515",
    "slug": "19914",
    "lat": 32.650582,
    "lon": -117.094907,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797517",
    "slug": "26178",
    "lat": 34.440429,
    "lon": -118.576706,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797523",
    "slug": "31053",
    "lat": 37.23149,
    "lon": -121.774157,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797525",
    "slug": "SanLeandroCAsupercharger",
    "lat": 37.709863,
    "lon": -122.164606,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797529",
    "slug": "woodlandcasupercharger",
    "lat": 38.671258,
    "lon": -121.723891,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797533",
    "slug": "20217",
    "lat": 33.893081,
    "lon": -118.353517,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797537",
    "slug": "429723",
    "lat": 39.937185,
    "lon": -120.935986,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797555",
    "slug": "santacruzcaliforniasupercharger",
    "lat": 36.97903,
    "lon": -122.013869,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797557",
    "slug": "sanmateocahillsdaleblvdsupercharger",
    "lat": 37.533192,
    "lon": -122.327481,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797561",
    "slug": "31046",
    "lat": 34.280369,
    "lon": -118.760658,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797563",
    "slug": "26122",
    "lat": 33.135097,
    "lon": -117.287944,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797565",
    "slug": "45230",
    "lat": 33.513858,
    "lon": -117.103003,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797571",
    "slug": "oaklandcahegenbergerrdsupercharger",
    "lat": 37.746161,
    "lon": -122.195189,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797577",
    "slug": "401506",
    "lat": 37.593192,
    "lon": -122.503768,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797583",
    "slug": "32414",
    "lat": 37.292258,
    "lon": -121.878466,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797587",
    "slug": "403259",
    "lat": 35.311237,
    "lon": -120.829781,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797591",
    "slug": "35668",
    "lat": 38.2729,
    "lon": -122.0527,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797619",
    "slug": "MarinaCASupercharger",
    "lat": 36.666441,
    "lon": -121.810092,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797621",
    "slug": "elkgrovecaelkgroveblvdsupercharger",
    "lat": 38.409402,
    "lon": -121.391077,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797627",
    "slug": "29517",
    "lat": 38.601246,
    "lon": -121.431354,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797629",
    "slug": "SouthPasadenaCAsupercharger",
    "lat": 34.127184,
    "lon": -118.147761,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797631",
    "slug": "25975",
    "lat": 34.275114,
    "lon": -119.239732,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797633",
    "slug": "34733",
    "lat": 34.099154,
    "lon": -117.700192,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797635",
    "slug": "MercedCAsupercharger",
    "lat": 37.297573,
    "lon": -120.483372,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797639",
    "slug": "SanLuisObispoCAsupercharger",
    "lat": 35.253723,
    "lon": -120.684271,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797643",
    "slug": "25715",
    "lat": 33.503514,
    "lon": -117.664165,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797645",
    "slug": "VictorvilleCAQ322",
    "lat": 34.463006,
    "lon": -117.354218,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797647",
    "slug": "32215",
    "lat": 34.047677,
    "lon": -117.907075,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797651",
    "slug": "17117",
    "lat": 32.862074,
    "lon": -117.224863,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797660",
    "slug": "26753",
    "lat": 37.428301,
    "lon": -121.913837,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797662",
    "slug": "27721",
    "lat": 37.521527,
    "lon": -122.337656,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797664",
    "slug": "30950",
    "lat": 33.804299,
    "lon": -118.044084,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797672",
    "slug": "31523",
    "lat": 33.957368,
    "lon": -117.624118,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797676",
    "slug": "4002766",
    "lat": 34.865814,
    "lon": -120.419245,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797678",
    "slug": "21022",
    "lat": 33.998388,
    "lon": -118.146147,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797684",
    "slug": "18606",
    "lat": 38.745356,
    "lon": -121.253386,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797692",
    "slug": "12751",
    "lat": 33.692501,
    "lon": -117.925296,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797694",
    "slug": "31212",
    "lat": 33.834269,
    "lon": -118.009434,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797698",
    "slug": "PaloAltoCASupercharger2",
    "lat": 37.446706,
    "lon": -122.162346,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797706",
    "slug": "32220",
    "lat": 36.844291,
    "lon": -119.786964,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797708",
    "slug": "4009002",
    "lat": 38.496858,
    "lon": -121.432375,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797725",
    "slug": "27135",
    "lat": 37.357046,
    "lon": -121.818237,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797727",
    "slug": "14819",
    "lat": 37.696145,
    "lon": -121.843993,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797731",
    "slug": "sandiegocacarmelmountainrdsupercharger",
    "lat": 32.921312,
    "lon": -117.215115,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797733",
    "slug": "SanYsidroCAsupercharger",
    "lat": 32.545149,
    "lon": -117.040075,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797735",
    "slug": "26461",
    "lat": 33.629322,
    "lon": -117.705786,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797737",
    "slug": "20757",
    "lat": 34.426362,
    "lon": -117.35465,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797745",
    "slug": "18592",
    "lat": 37.236758,
    "lon": -121.962246,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797753",
    "slug": "20871",
    "lat": 37.541637,
    "lon": -122.30219,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797757",
    "slug": "25858",
    "lat": 35.963817,
    "lon": -115.167647,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797777",
    "slug": "27472",
    "lat": 37.362515,
    "lon": -122.026267,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797781",
    "slug": "34294",
    "lat": 34.031001,
    "lon": -118.125935,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797783",
    "slug": "28526",
    "lat": 33.831232,
    "lon": -118.073546,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797787",
    "slug": "riversidecanyonspringssupercharger",
    "lat": 33.939869,
    "lon": -117.282601,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797793",
    "slug": "SanDiegoCAQ322",
    "lat": 32.831702,
    "lon": -117.159438,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797797",
    "slug": "4006018",
    "lat": 33.553706,
    "lon": -117.139651,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797835",
    "slug": "SanGabrielCAsupercharger",
    "lat": 34.077496,
    "lon": -118.100128,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797847",
    "slug": "20002",
    "lat": 34.138042,
    "lon": -118.359272,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797855",
    "slug": "34620",
    "lat": 34.074423,
    "lon": -118.022096,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797859",
    "slug": "45261",
    "lat": 37.982753,
    "lon": -120.385686,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797861",
    "slug": "4009311",
    "lat": 37.698388,
    "lon": -121.839177,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797911",
    "slug": "26139",
    "lat": 34.091268,
    "lon": -118.342215,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32797945",
    "slug": "403408",
    "lat": 39.797522,
    "lon": -105.07872,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798001",
    "slug": "437163",
    "lat": 29.692891,
    "lon": -96.777389,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798026",
    "slug": "GrapevineTXsupercharger",
    "lat": 32.941969,
    "lon": -97.065631,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798028",
    "slug": "32654",
    "lat": 30.140394,
    "lon": -96.399349,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798030",
    "slug": "404914",
    "lat": 33.856602,
    "lon": -117.925033,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798042",
    "slug": "BellCAsupercharger",
    "lat": 33.977777,
    "lon": -118.188769,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798066",
    "slug": "404958",
    "lat": 37.799899,
    "lon": -122.433824,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798105",
    "slug": "400703",
    "lat": 35.412131,
    "lon": -119.044623,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798112",
    "slug": "45350",
    "lat": 38.066785,
    "lon": -122.167014,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798128",
    "slug": "gardengroveca12891harborblvd",
    "lat": 33.777635,
    "lon": -117.918914,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798134",
    "slug": "29237",
    "lat": 34.008045,
    "lon": -118.220201,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798291",
    "slug": "26996",
    "lat": 34.893641,
    "lon": -117.002444,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798510",
    "slug": "25874",
    "lat": 35.61756,
    "lon": -119.640861,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798630",
    "slug": "41984",
    "lat": 36.009348,
    "lon": -114.786167,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798683",
    "slug": "418116",
    "lat": 37.271964,
    "lon": -107.883424,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32798704",
    "slug": "405212",
    "lat": 38.327064,
    "lon": -122.706415,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32798757",
    "slug": "401980",
    "lat": 37.349684,
    "lon": -108.566253,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32799703",
    "slug": "4009167",
    "lat": 41.398549,
    "lon": -122.380412,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32799717",
    "slug": "dc936982634",
    "lat": 34.36011,
    "lon": -117.63485,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799725",
    "slug": "dc14326",
    "lat": 34.089668,
    "lon": -118.385005,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799727",
    "slug": "412229",
    "lat": 33.604659,
    "lon": -114.521026,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32799728",
    "slug": "dc70321",
    "lat": 37.793863,
    "lon": -122.40037,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799729",
    "slug": "52495",
    "lat": 33.193577,
    "lon": -117.142217,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799731",
    "slug": "teslasantamonica17074thstsantamonicaca90401hiltonsantamonicahotelsuites",
    "lat": 34.0117276,
    "lon": -118.4889904,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32799732",
    "slug": "dc409606",
    "lat": 32.694927,
    "lon": -117.1659041,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799733",
    "slug": "453056",
    "lat": 34.416572,
    "lon": -118.5751572,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32799734",
    "slug": "467955",
    "lat": 39.7310672,
    "lon": -121.8388594,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799736",
    "slug": "4007103",
    "lat": 38.655572,
    "lon": -121.524588,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32799763",
    "slug": "406271",
    "lat": 32.6480908,
    "lon": -114.5031295,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32799766",
    "slug": "dc25147",
    "lat": 28.63185,
    "lon": -106.098402,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799768",
    "slug": "55142",
    "lat": 36.16562,
    "lon": -115.13348,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799932",
    "slug": "27134",
    "lat": 36.068138,
    "lon": -95.780551,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32799933",
    "slug": "dc31869",
    "lat": 35.293464,
    "lon": -97.490495,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799944",
    "slug": "dc843233289",
    "lat": 30.2380422,
    "lon": -97.7559031,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32799945",
    "slug": "dc918109220",
    "lat": 27.7577654,
    "lon": -97.4604065,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800012",
    "slug": "439621",
    "lat": 38.0411245,
    "lon": -122.8003574,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800013",
    "slug": "439863",
    "lat": 36.2230586,
    "lon": -115.3325779,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800020",
    "slug": "450053",
    "lat": 36.4572161,
    "lon": -116.8663591,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800026",
    "slug": "449403",
    "lat": 31.7742319,
    "lon": -95.6210937,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800029",
    "slug": "454909",
    "lat": 35.3375105,
    "lon": -94.3765164,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800032",
    "slug": "459359",
    "lat": 38.587744,
    "lon": -122.5749204,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800036",
    "slug": "466404",
    "lat": 39.7514069,
    "lon": -104.8775173,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800037",
    "slug": "464503",
    "lat": 39.8230476,
    "lon": -104.7755715,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800038",
    "slug": "466617",
    "lat": 37.3088969,
    "lon": -121.9008596,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800046",
    "slug": "427854",
    "lat": 30.226976,
    "lon": -98.913766,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800047",
    "slug": "427952",
    "lat": 36.3047309,
    "lon": -95.3199716,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800048",
    "slug": "429512",
    "lat": 35.1471329,
    "lon": -106.5291071,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800049",
    "slug": "429504",
    "lat": 36.095541,
    "lon": -115.1762123,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800052",
    "slug": "444402",
    "lat": 34.629394,
    "lon": -98.492954,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800065",
    "slug": "469653",
    "lat": 29.6072805,
    "lon": -98.5194839,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800067",
    "slug": "481261",
    "lat": 30.3155929,
    "lon": -97.9455743,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800069",
    "slug": "481108",
    "lat": 38.3238102,
    "lon": -122.6800999,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800083",
    "slug": "456803",
    "lat": 32.7495404,
    "lon": -96.4308526,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800087",
    "slug": "455459",
    "lat": 40.7888048,
    "lon": -124.1803994,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800094",
    "slug": "481717",
    "lat": 30.5727724,
    "lon": -97.6867525,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800102",
    "slug": "442307",
    "lat": 30.1758578,
    "lon": -95.4649294,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800105",
    "slug": "443254",
    "lat": 28.7132975,
    "lon": -96.2256212,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800107",
    "slug": "442506",
    "lat": 26.1653317,
    "lon": -97.6880067,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800108",
    "slug": "444412",
    "lat": 27.7972134,
    "lon": -97.4146372,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800113",
    "slug": "451818",
    "lat": 34.0422993,
    "lon": -118.2636296,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800116",
    "slug": "460666",
    "lat": 37.5567379,
    "lon": -122.2816047,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800123",
    "slug": "467602",
    "lat": 32.2905275,
    "lon": -106.7409467,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800124",
    "slug": "467654",
    "lat": 29.561238,
    "lon": -98.585838,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800129",
    "slug": "477703",
    "lat": 37.7639164,
    "lon": -122.2161092,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800131",
    "slug": "477704",
    "lat": 33.6699347,
    "lon": -117.8863936,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800132",
    "slug": "480453",
    "lat": 33.6935102,
    "lon": -117.8608207,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800138",
    "slug": "426054",
    "lat": 29.5649912,
    "lon": -95.0455982,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800139",
    "slug": "455019",
    "lat": 29.0397633,
    "lon": -95.4460046,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800150",
    "slug": "445805",
    "lat": 33.3646512,
    "lon": -97.1790833,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800151",
    "slug": "458413",
    "lat": 36.3083722,
    "lon": -94.1905914,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800155",
    "slug": "451762",
    "lat": 30.5610457,
    "lon": -98.2768143,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800207",
    "slug": "436454",
    "lat": 36.0929942,
    "lon": -115.1757617,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800209",
    "slug": "435604",
    "lat": 38.75293,
    "lon": -122.62832,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800212",
    "slug": "441481",
    "lat": 32.893227,
    "lon": -96.479773,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800213",
    "slug": "441902",
    "lat": 33.8228579,
    "lon": -96.707887,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800216",
    "slug": "441073",
    "lat": 29.0179579,
    "lon": -95.4342567,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800224",
    "slug": "457553",
    "lat": 35.3643115,
    "lon": -97.5471911,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800225",
    "slug": "462781",
    "lat": 34.1669482,
    "lon": -94.7606282,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800230",
    "slug": "475557",
    "lat": 33.1104974,
    "lon": -96.8258178,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800233",
    "slug": "438352",
    "lat": 34.1075775,
    "lon": -117.6353807,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800243",
    "slug": "447604",
    "lat": 30.0553809,
    "lon": -95.6933459,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800244",
    "slug": "446903",
    "lat": 38.267363,
    "lon": -121.3027636,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800245",
    "slug": "447002",
    "lat": 30.4353326,
    "lon": -97.5732997,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800255",
    "slug": "458780",
    "lat": 29.731008,
    "lon": -95.3892348,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800258",
    "slug": "472152",
    "lat": 35.1678146,
    "lon": -106.5871019,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800261",
    "slug": "472658",
    "lat": 32.9802738,
    "lon": -96.7072417,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800262",
    "slug": "473657",
    "lat": 34.0677363,
    "lon": -117.2073361,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800491",
    "slug": "dc1079",
    "lat": 37.64947,
    "lon": -118.986681,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800495",
    "slug": "dc1096",
    "lat": 34.066881,
    "lon": -118.413267,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800522",
    "slug": "dc15246",
    "lat": 37.36135,
    "lon": -121.935057,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800523",
    "slug": "dc15030",
    "lat": 38.959537,
    "lon": -119.946952,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800524",
    "slug": "dc15224",
    "lat": 29.793368,
    "lon": -95.729374,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800528",
    "slug": "dc15345",
    "lat": 38.710151,
    "lon": -122.961827,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800578",
    "slug": "dc23145",
    "lat": 33.691494,
    "lon": -117.880465,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800581",
    "slug": "dc23135",
    "lat": 38.530198,
    "lon": -122.800467,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800618",
    "slug": "dc30517",
    "lat": 28.98298,
    "lon": -95.984724,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800625",
    "slug": "dc324",
    "lat": 34.02053,
    "lon": -117.926766,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800628",
    "slug": "dc32065",
    "lat": 37.220872,
    "lon": -121.980319,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800631",
    "slug": "dc31631",
    "lat": 34.025182,
    "lon": -118.769613,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800654",
    "slug": "teslasanfrancisco503rdst",
    "lat": 37.7866041,
    "lon": -122.4031609,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800656",
    "slug": "tesladallas2320nhoustonst",
    "lat": 32.785286,
    "lon": -96.80819,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800657",
    "slug": "teslalongbeach333eoceanblvd",
    "lat": 33.7658113,
    "lon": -118.1787387,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800658",
    "slug": "dc1122",
    "lat": 37.8570477,
    "lon": -122.481192,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800659",
    "slug": "dc1123",
    "lat": 37.2210758,
    "lon": -121.9850882,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800662",
    "slug": "dc11035",
    "lat": 41.0586001,
    "lon": -124.1427538,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800666",
    "slug": "dc12266",
    "lat": 34.150335,
    "lon": -117.229094,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800667",
    "slug": "dc12552",
    "lat": 38.790636,
    "lon": -120.888201,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800668",
    "slug": "dc12165",
    "lat": 32.854614,
    "lon": -117.257992,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800670",
    "slug": "dc12580",
    "lat": 39.199064,
    "lon": -119.777042,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800674",
    "slug": "dc13967",
    "lat": 41.482442,
    "lon": -120.542075,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800675",
    "slug": "dc14253",
    "lat": 38.470596,
    "lon": -122.429101,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800677",
    "slug": "dc13714",
    "lat": 35.654981,
    "lon": -120.900694,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800692",
    "slug": "dc15899",
    "lat": 37.360511,
    "lon": -119.644104,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800695",
    "slug": "dc16957",
    "lat": 33.11674,
    "lon": -96.667297,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800741",
    "slug": "dc2403",
    "lat": 34.0963159,
    "lon": -118.3727563,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800749",
    "slug": "dc253",
    "lat": 29.422161,
    "lon": -98.484552,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800750",
    "slug": "dc25017",
    "lat": 30.26662,
    "lon": -97.740375,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800751",
    "slug": "dc25238",
    "lat": 29.427283,
    "lon": -98.489125,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800752",
    "slug": "dc24673",
    "lat": 33.062756,
    "lon": -96.831498,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800765",
    "slug": "dc25470",
    "lat": 30.259977,
    "lon": -97.739149,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800808",
    "slug": "dc44721",
    "lat": 32.522747,
    "lon": -116.063097,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800828",
    "slug": "dc13020",
    "lat": 36.996951,
    "lon": -121.985265,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800834",
    "slug": "dc13474",
    "lat": 37.488967,
    "lon": -121.94617,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800837",
    "slug": "dc13779",
    "lat": 34.172565,
    "lon": -97.16145,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800839",
    "slug": "dc13390",
    "lat": 38.487409,
    "lon": -122.437755,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800853",
    "slug": "dc17478",
    "lat": 39.39969,
    "lon": -123.349082,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800857",
    "slug": "dc1775",
    "lat": 31.734028,
    "lon": -95.6294049,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32800861",
    "slug": "dc169",
    "lat": 34.421513,
    "lon": -119.640535,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800863",
    "slug": "dc1779",
    "lat": 39.7248144,
    "lon": -121.8056562,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800864",
    "slug": "dc17566",
    "lat": 32.810335,
    "lon": -96.72919,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800865",
    "slug": "dc1718",
    "lat": 32.980407,
    "lon": -117.259812,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800903",
    "slug": "dc23116",
    "lat": 26.9002053,
    "lon": -101.4264863,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800934",
    "slug": "dc2802",
    "lat": 33.4658094,
    "lon": -117.68938,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800935",
    "slug": "dc2803",
    "lat": 34.3923251,
    "lon": -119.5095392,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800946",
    "slug": "dc32699",
    "lat": 39.804696,
    "lon": -104.686605,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800947",
    "slug": "dc327",
    "lat": 36.731887,
    "lon": -108.199882,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800949",
    "slug": "dc32783",
    "lat": 29.744261,
    "lon": -95.458778,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800951",
    "slug": "dc32278",
    "lat": 38.2242325,
    "lon": -122.2594288,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800953",
    "slug": "dc4091",
    "lat": 36.4108594,
    "lon": -93.7347888,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800958",
    "slug": "dc4069",
    "lat": 38.500368,
    "lon": -122.464018,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800991",
    "slug": "dc13366",
    "lat": 35.575848,
    "lon": -120.690237,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800992",
    "slug": "dc13321",
    "lat": 35.627343,
    "lon": -120.685824,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800993",
    "slug": "dc13298",
    "lat": 35.576878,
    "lon": -120.792808,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800994",
    "slug": "dc13202",
    "lat": 33.654257,
    "lon": -117.627572,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800995",
    "slug": "dc1325",
    "lat": 37.3327794,
    "lon": -121.8892745,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32800997",
    "slug": "dc13379",
    "lat": 38.480785,
    "lon": -120.848399,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801033",
    "slug": "dc1917",
    "lat": 34.854043,
    "lon": -120.370813,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801044",
    "slug": "dc19260",
    "lat": 33.101983,
    "lon": -96.817299,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801073",
    "slug": "dc273",
    "lat": 34.036533,
    "lon": -118.079876,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801077",
    "slug": "dc26938",
    "lat": 37.486506,
    "lon": -119.961525,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801081",
    "slug": "dc26824",
    "lat": 34.066124,
    "lon": -118.409117,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801082",
    "slug": "dc274",
    "lat": 32.792269,
    "lon": -96.803141,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801110",
    "slug": "dc34465",
    "lat": 29.052594,
    "lon": -95.457053,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32801112",
    "slug": "dc35212",
    "lat": 33.715419,
    "lon": -116.270206,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801116",
    "slug": "dc35671",
    "lat": 37.378373,
    "lon": -121.939254,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801119",
    "slug": "dc40643",
    "lat": 35.9956505,
    "lon": -96.1297445,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801123",
    "slug": "dc39922",
    "lat": 35.14834,
    "lon": -120.650611,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801130",
    "slug": "teslalasvegas3400paradiserdrenaissancelasvegas",
    "lat": 36.12763,
    "lon": -115.15387,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32801155",
    "slug": "dc14803",
    "lat": 26.138358,
    "lon": -97.170299,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801161",
    "slug": "dc14636",
    "lat": 33.59344,
    "lon": -117.867,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801162",
    "slug": "dc14563",
    "lat": 33.530274,
    "lon": -117.773811,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801189",
    "slug": "dc20756",
    "lat": 33.801901,
    "lon": -116.532388,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801191",
    "slug": "dc20669",
    "lat": 36.135098,
    "lon": -115.155522,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32801193",
    "slug": "dc20690",
    "lat": 38.366659,
    "lon": -122.52871,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801194",
    "slug": "dc2080",
    "lat": 37.7918779,
    "lon": -122.4071784,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801195",
    "slug": "dc21313",
    "lat": 31.787438,
    "lon": -106.408404,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801198",
    "slug": "dc2129",
    "lat": 30.283018,
    "lon": -97.745736,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801221",
    "slug": "dc25913",
    "lat": 28.627759,
    "lon": -106.117038,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801240",
    "slug": "dc30043",
    "lat": 38.6942254,
    "lon": -122.8250624,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801242",
    "slug": "dc30403",
    "lat": 40.854041,
    "lon": -115.750023,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801243",
    "slug": "dc29544",
    "lat": 37.40506,
    "lon": -122.119167,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801245",
    "slug": "dc30079",
    "lat": 33.930692,
    "lon": -118.350711,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801301",
    "slug": "dc12133",
    "lat": 27.853747,
    "lon": -97.629734,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801304",
    "slug": "dc12078",
    "lat": 37.321772,
    "lon": -122.031361,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801307",
    "slug": "dc11911",
    "lat": 38.230988,
    "lon": -122.612703,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801312",
    "slug": "dc15033",
    "lat": 32.537168,
    "lon": -117.026177,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801340",
    "slug": "dc18599",
    "lat": 39.115307,
    "lon": -108.535576,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801341",
    "slug": "dc1803",
    "lat": 33.994759,
    "lon": -117.891493,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801342",
    "slug": "dc1813",
    "lat": 33.7951961,
    "lon": -116.5007994,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801344",
    "slug": "dc18877",
    "lat": 29.928071,
    "lon": -95.545954,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801345",
    "slug": "dc1821",
    "lat": 39.480486,
    "lon": -106.066908,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801457",
    "slug": "dc11587",
    "lat": 39.626647,
    "lon": -104.896197,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801458",
    "slug": "dc11538",
    "lat": 37.785523,
    "lon": -122.428919,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801459",
    "slug": "dc11728",
    "lat": 38.4000624,
    "lon": -122.3591091,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801461",
    "slug": "dc1169",
    "lat": 37.7849,
    "lon": -122.4043,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801463",
    "slug": "dc13004",
    "lat": 38.478215,
    "lon": -122.437767,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801470",
    "slug": "dc12948",
    "lat": 37.938809,
    "lon": -107.848019,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801496",
    "slug": "dc1884",
    "lat": 35.553471,
    "lon": -120.750739,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801498",
    "slug": "dc19032",
    "lat": 37.929206,
    "lon": -120.451752,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801500",
    "slug": "dc1904",
    "lat": 27.696245,
    "lon": -97.349457,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801508",
    "slug": "dc18911",
    "lat": 32.785831,
    "lon": -96.801945,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801515",
    "slug": "dc20834",
    "lat": 32.666651,
    "lon": -115.46488,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801518",
    "slug": "dc20848",
    "lat": 32.5751153,
    "lon": -116.6193209,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801546",
    "slug": "dc2338",
    "lat": 32.727033,
    "lon": -117.197655,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801548",
    "slug": "dc23961",
    "lat": 27.900089,
    "lon": -97.143324,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801549",
    "slug": "dc2334",
    "lat": 37.791596,
    "lon": -122.410385,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801554",
    "slug": "dc25715",
    "lat": 29.78641,
    "lon": -95.526882,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801558",
    "slug": "dc26559",
    "lat": 27.744438,
    "lon": -97.442593,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801560",
    "slug": "dc264",
    "lat": 39.528565,
    "lon": -119.815271,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801563",
    "slug": "dc26033",
    "lat": 33.832254,
    "lon": -118.079218,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801564",
    "slug": "dc25883",
    "lat": 27.816671,
    "lon": -97.076412,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801568",
    "slug": "dc29168",
    "lat": 39.502036,
    "lon": -119.763713,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801570",
    "slug": "dc29499",
    "lat": 29.783327,
    "lon": -95.467074,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801574",
    "slug": "dc29438",
    "lat": 33.591025,
    "lon": -101.867768,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801581",
    "slug": "dc31093",
    "lat": 35.657456,
    "lon": -120.545645,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801582",
    "slug": "dc311",
    "lat": 36.109353,
    "lon": -115.175278,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801586",
    "slug": "dc3938",
    "lat": 37.3894309,
    "lon": -122.0920614,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801589",
    "slug": "dc393",
    "lat": 34.151844,
    "lon": -118.804643,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801590",
    "slug": "dc39649",
    "lat": 34.6008545,
    "lon": -120.0992668,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801592",
    "slug": "dc3910",
    "lat": 32.636738,
    "lon": -117.099984,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801594",
    "slug": "dc37817",
    "lat": 38.581533,
    "lon": -121.499473,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801630",
    "slug": "dc15549",
    "lat": 34.507904,
    "lon": -117.325918,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801632",
    "slug": "dc1555",
    "lat": 29.747099,
    "lon": -95.450734,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801633",
    "slug": "dc15429",
    "lat": 32.3248785,
    "lon": -106.7341411,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32801662",
    "slug": "dc20696",
    "lat": 32.530066,
    "lon": -116.955914,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801668",
    "slug": "dc21744",
    "lat": 34.010562,
    "lon": -118.485467,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801672",
    "slug": "dc2146",
    "lat": 33.100051,
    "lon": -117.285039,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801679",
    "slug": "dc21687",
    "lat": 33.955608,
    "lon": -116.482326,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801682",
    "slug": "dc21573",
    "lat": 40.390787,
    "lon": -105.562663,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801683",
    "slug": "dc2144",
    "lat": 34.072382,
    "lon": -118.395128,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801688",
    "slug": "dc22106",
    "lat": 29.757377,
    "lon": -95.377384,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801722",
    "slug": "dc2832",
    "lat": 34.055264,
    "lon": -118.398586,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801728",
    "slug": "dc28121",
    "lat": 38.512985,
    "lon": -122.4115335,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801729",
    "slug": "dc28807",
    "lat": 35.839881,
    "lon": -101.974378,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801749",
    "slug": "dc36969",
    "lat": 29.7751215,
    "lon": -98.7275911,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801750",
    "slug": "dc37448",
    "lat": 34.3906404,
    "lon": -119.2949721,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801752",
    "slug": "dc36967",
    "lat": 36.153979,
    "lon": -95.988095,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801756",
    "slug": "dc368",
    "lat": 34.439156,
    "lon": -119.704221,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801757",
    "slug": "dc4570",
    "lat": 38.680822,
    "lon": -123.429276,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801761",
    "slug": "dc42463",
    "lat": 38.589818,
    "lon": -122.837842,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801767",
    "slug": "dc4615",
    "lat": 38.2930642,
    "lon": -122.2844017,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801769",
    "slug": "dc41898",
    "lat": 30.086525,
    "lon": -95.63449,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801778",
    "slug": "dc6022",
    "lat": 38.74743,
    "lon": -105.17518,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801789",
    "slug": "dc638",
    "lat": 39.1270371,
    "lon": -123.7144402,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801820",
    "slug": "54105",
    "lat": 38.437392,
    "lon": -122.351001,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801822",
    "slug": "54111",
    "lat": 35.6585445,
    "lon": -120.5961041,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801826",
    "slug": "dc5925",
    "lat": 35.084183,
    "lon": -106.690044,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801830",
    "slug": "54571",
    "lat": 34.272415,
    "lon": -119.107579,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801840",
    "slug": "55082",
    "lat": 35.375307,
    "lon": -119.021616,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801843",
    "slug": "55102",
    "lat": 38.960907,
    "lon": -119.883955,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801866",
    "slug": "dc4006503",
    "lat": 40.0161241,
    "lon": -105.2601208,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32801873",
    "slug": "4006757",
    "lat": 35.141918,
    "lon": -106.598992,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32801875",
    "slug": "dc409393",
    "lat": 38.5011083,
    "lon": -122.4631773,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801879",
    "slug": "409372",
    "lat": 39.5593296,
    "lon": -120.8301761,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801880",
    "slug": "409272",
    "lat": 37.4946874,
    "lon": -121.9314783,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801892",
    "slug": "422865",
    "lat": 29.6755411,
    "lon": -95.0331018,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32801895",
    "slug": "dc5047",
    "lat": 33.665868,
    "lon": -117.881585,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801897",
    "slug": "dc5109",
    "lat": 29.9951,
    "lon": -98.100622,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801899",
    "slug": "dc54172",
    "lat": 37.456271,
    "lon": -122.187642,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801902",
    "slug": "dc5191",
    "lat": 40.8043,
    "lon": -124.1595855,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801908",
    "slug": "51392",
    "lat": 36.072392,
    "lon": -115.172611,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801927",
    "slug": "dc734",
    "lat": 30.26197,
    "lon": -97.742421,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801959",
    "slug": "dc5887",
    "lat": 35.2208325,
    "lon": -97.4484911,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801961",
    "slug": "dc679",
    "lat": 36.6008432,
    "lon": -121.8951335,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801974",
    "slug": "dc91158",
    "lat": 33.7184587,
    "lon": -116.3818948,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801985",
    "slug": "dc56090",
    "lat": 34.275576,
    "lon": -119.285431,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801991",
    "slug": "teslasinton8154us77",
    "lat": 28.03,
    "lon": -97.53,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801994",
    "slug": "vanbureninnvanburen3131cloverleafst",
    "lat": 35.44411,
    "lon": -94.320872,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32801999",
    "slug": "400430",
    "lat": 33.777868,
    "lon": -116.357249,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802007",
    "slug": "dc-417188",
    "lat": 39.7291226,
    "lon": -121.8376314,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802011",
    "slug": "dc48124",
    "lat": 38.519294,
    "lon": -122.495569,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802033",
    "slug": "52045",
    "lat": 32.6938841,
    "lon": -96.5180434,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802036",
    "slug": "52647",
    "lat": 38.426784,
    "lon": -121.482186,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802041",
    "slug": "dc9485",
    "lat": 37.795208,
    "lon": -122.404869,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802046",
    "slug": "dc6546",
    "lat": 29.010826,
    "lon": -95.41154,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802047",
    "slug": "52741",
    "lat": 25.962568,
    "lon": -97.508513,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802054",
    "slug": "dc79245",
    "lat": 29.7837391,
    "lon": -95.1128456,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802058",
    "slug": "53570",
    "lat": 28.632151,
    "lon": -96.630063,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802070",
    "slug": "54422",
    "lat": 25.960477,
    "lon": -97.509741,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802084",
    "slug": "dc727",
    "lat": 33.8231919,
    "lon": -116.5504963,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802089",
    "slug": "dc6375",
    "lat": 34.052495,
    "lon": -118.255408,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802100",
    "slug": "4002463",
    "lat": 34.177386,
    "lon": -118.307938,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802106",
    "slug": "409703",
    "lat": 33.1255959,
    "lon": -117.0894522,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802112",
    "slug": "dc4641",
    "lat": 39.316084,
    "lon": -123.799273,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802115",
    "slug": "dc46470",
    "lat": 37.867942,
    "lon": -122.256305,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802120",
    "slug": "dc5090",
    "lat": 34.263592,
    "lon": -114.129278,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802124",
    "slug": "51609",
    "lat": 33.678839,
    "lon": -116.409043,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802125",
    "slug": "dc696",
    "lat": 36.50131,
    "lon": -121.75365,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802127",
    "slug": "51579",
    "lat": 35.4205183,
    "lon": -97.4889551,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802136",
    "slug": "52137",
    "lat": 36.77906,
    "lon": -119.67429,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802142",
    "slug": "dc6359",
    "lat": 35.59795,
    "lon": -120.83332,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802148",
    "slug": "52613",
    "lat": 38.6202088,
    "lon": -122.8719618,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802149",
    "slug": "dc52599",
    "lat": 29.76154,
    "lon": -95.31026,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802152",
    "slug": "52631",
    "lat": 28.0680329,
    "lon": -97.042396,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802159",
    "slug": "dc6056",
    "lat": 33.616571,
    "lon": -117.890341,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802161",
    "slug": "STE2022022200154",
    "lat": 32.5154722,
    "lon": -117.0114425,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802167",
    "slug": "dc5954",
    "lat": 29.75713,
    "lon": -95.369525,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802170",
    "slug": "dc97005",
    "lat": 34.0206953,
    "lon": -118.4945041,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802176",
    "slug": "54820",
    "lat": 29.707326,
    "lon": -95.555515,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802201",
    "slug": "springhillsuitesbymarriottaustinwestlakewaylakeway322medicalpkwy",
    "lat": 30.329988,
    "lon": -97.968375,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802202",
    "slug": "riverbendonthefrioconcan32710us83",
    "lat": 29.622573,
    "lon": -99.75432,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802205",
    "slug": "dc-405563",
    "lat": 26.1903694,
    "lon": -98.1181742,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802208",
    "slug": "417925",
    "lat": 33.8780228,
    "lon": -118.0338446,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802209",
    "slug": "417906",
    "lat": 32.815128,
    "lon": -96.800181,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802212",
    "slug": "418207",
    "lat": 28.863272,
    "lon": -96.9885582,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802214",
    "slug": "dc4956",
    "lat": 39.559625,
    "lon": -120.828017,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802218",
    "slug": "dc492",
    "lat": 33.62027,
    "lon": -117.875355,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802221",
    "slug": "dc4916",
    "lat": 39.27552,
    "lon": -120.121176,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802230",
    "slug": "51815",
    "lat": 30.328826,
    "lon": -97.96455,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802242",
    "slug": "52299",
    "lat": 31.031165,
    "lon": -97.477438,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802253",
    "slug": "dc55859",
    "lat": 30.5895967,
    "lon": -103.8935071,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802272",
    "slug": "dc6214",
    "lat": 30.352052,
    "lon": -97.708054,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802289",
    "slug": "dc74978",
    "lat": 34.744634,
    "lon": -120.271812,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802291",
    "slug": "54770",
    "lat": 38.601748,
    "lon": -121.381732,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802294",
    "slug": "dc6251",
    "lat": 38.7747706,
    "lon": -119.9029911,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802300",
    "slug": "dc566",
    "lat": 39.641587,
    "lon": -106.378203,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802301",
    "slug": "55272",
    "lat": 36.959947,
    "lon": -122.055632,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802329",
    "slug": "407460",
    "lat": 34.0921741,
    "lon": -118.3775192,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802334",
    "slug": "dc408758",
    "lat": 37.4068478,
    "lon": -122.1199781,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802337",
    "slug": "409155",
    "lat": 38.3514932,
    "lon": -122.7200975,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802343",
    "slug": "422332",
    "lat": 37.354933,
    "lon": -122.017886,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802360",
    "slug": "51234",
    "lat": 33.829598,
    "lon": -116.523802,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802365",
    "slug": "dc51645",
    "lat": 31.959619,
    "lon": -98.01877,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802381",
    "slug": "dc74046",
    "lat": 33.176829,
    "lon": -96.641756,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802385",
    "slug": "52747",
    "lat": 25.94586,
    "lon": -97.50578,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802387",
    "slug": "52758",
    "lat": 40.574854,
    "lon": -122.359431,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802394",
    "slug": "dc79269",
    "lat": 33.818865,
    "lon": -116.54812,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802403",
    "slug": "54050",
    "lat": 34.082546,
    "lon": -118.434768,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802409",
    "slug": "54678",
    "lat": 38.612295,
    "lon": -122.8695846,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802413",
    "slug": "54815",
    "lat": 29.970734,
    "lon": -95.558929,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802418",
    "slug": "54846",
    "lat": 39.027867,
    "lon": -122.584476,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802421",
    "slug": "dc6450",
    "lat": 40.578614,
    "lon": -124.15297,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802439",
    "slug": "4005115",
    "lat": 32.8090178,
    "lon": -96.7985964,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802444",
    "slug": "414004",
    "lat": 39.764733,
    "lon": -104.98571,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802446",
    "slug": "35703",
    "lat": 36.064496,
    "lon": -115.283857,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802447",
    "slug": "dc414071",
    "lat": 29.171575,
    "lon": -99.8267675,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802454",
    "slug": "dc414713",
    "lat": 36.1495727,
    "lon": -95.9148714,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802456",
    "slug": "dc4887",
    "lat": 39.799718,
    "lon": -105.509,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802462",
    "slug": "dc53612",
    "lat": 32.6538227,
    "lon": -115.4110167,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802524",
    "slug": "dc774",
    "lat": 40.5811735,
    "lon": -122.3582499,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802527",
    "slug": "dc653",
    "lat": 33.767198,
    "lon": -118.191987,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802530",
    "slug": "dc6573",
    "lat": 40.575953,
    "lon": -124.265579,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802538",
    "slug": "dc6118",
    "lat": 39.1651113,
    "lon": -122.9105147,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802543",
    "slug": "dc59413",
    "lat": 32.7143935,
    "lon": -117.1632054,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32802562",
    "slug": "400614",
    "lat": 35.2507,
    "lon": -120.680483,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802564",
    "slug": "dc416906",
    "lat": 30.0002437,
    "lon": -95.1586877,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802565",
    "slug": "dc417155",
    "lat": 27.627984,
    "lon": -97.2234478,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32802835",
    "slug": "hesperiasupercharger",
    "lat": 34.424701,
    "lon": -117.385738,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32802853",
    "slug": "williamssupercharger",
    "lat": 39.155677,
    "lon": -122.14931,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803088",
    "slug": "lasvegasnvgrandcentralparkwaysupercharger",
    "lat": 36.166039,
    "lon": -115.15917,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803167",
    "slug": "soledadcahdelarosastreetsupercharger",
    "lat": 36.418494,
    "lon": -121.320323,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803171",
    "slug": "ButtonwillowCASupercharger2",
    "lat": 35.498009,
    "lon": -119.554124,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803173",
    "slug": "DallasTXsupercharger",
    "lat": 32.867744,
    "lon": -96.767178,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803179",
    "slug": "kremmlingcoparkavenuesupercharger",
    "lat": 40.059633,
    "lon": -106.387909,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32803237",
    "slug": "LasVegasNVSupercharger22",
    "lat": 36.271567,
    "lon": -115.265489,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803277",
    "slug": "pattersoncaspenodrsupercharger",
    "lat": 37.466423,
    "lon": -121.174455,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803297",
    "slug": "houstonsupercharger",
    "lat": 29.735994,
    "lon": -95.538444,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803305",
    "slug": "ClaytonNMsupercharger",
    "lat": 36.449453,
    "lon": -103.181919,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803313",
    "slug": "clarksvillesupercharger",
    "lat": 35.523754,
    "lon": -93.863571,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803323",
    "slug": "WestminsterCOsupercharger",
    "lat": 39.832098,
    "lon": -105.023935,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803325",
    "slug": "17119",
    "lat": 32.834058,
    "lon": -116.749072,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803333",
    "slug": "sonorajacksoncasupercharger",
    "lat": 38.347987,
    "lon": -120.776605,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32803343",
    "slug": "SusanvilleCAsupercharger",
    "lat": 40.430903,
    "lon": -120.65791,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803351",
    "slug": "SantaNellaCASupercharger",
    "lat": 37.100252,
    "lon": -121.011985,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803391",
    "slug": "UkiahCASupercharger2",
    "lat": 39.16783,
    "lon": -123.209988,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803397",
    "slug": "17408",
    "lat": 39.16314,
    "lon": -122.919146,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803473",
    "slug": "19959",
    "lat": 33.910462,
    "lon": -117.273714,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803483",
    "slug": "RedOakTXSupercharger",
    "lat": 32.516874,
    "lon": -96.821522,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803485",
    "slug": "26792",
    "lat": 37.48907,
    "lon": -119.972314,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803487",
    "slug": "abbotttxsupercharger",
    "lat": 31.898879,
    "lon": -97.090962,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803489",
    "slug": "RedBluffCASupercharger",
    "lat": 40.163075,
    "lon": -122.228937,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803495",
    "slug": "18458",
    "lat": 35.616704,
    "lon": -119.656118,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803509",
    "slug": "EnnisTXQ322",
    "lat": 32.322578,
    "lon": -96.605087,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32803519",
    "slug": "19218",
    "lat": 36.054286,
    "lon": -96.004607,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803525",
    "slug": "centervilletxsupercharger",
    "lat": 31.259686,
    "lon": -95.985294,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803527",
    "slug": "BeaumontCAQ322",
    "lat": 33.947281,
    "lon": -117.00034,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803533",
    "slug": "johnsoncitytxus281supercharger",
    "lat": 30.269924,
    "lon": -98.398071,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803547",
    "slug": "19117",
    "lat": 29.612994,
    "lon": -98.601275,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803561",
    "slug": "19222",
    "lat": 34.161543,
    "lon": -99.297446,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803565",
    "slug": "KatyTXQ322",
    "lat": 29.779068,
    "lon": -95.848861,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32803567",
    "slug": "BakersfieldCASupercharger22",
    "lat": 35.266411,
    "lon": -119.253951,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803573",
    "slug": "InyokernCASupercharger2",
    "lat": 35.646218,
    "lon": -117.813318,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803577",
    "slug": "19226",
    "lat": 26.159998,
    "lon": -97.877651,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803581",
    "slug": "18976",
    "lat": 30.356828,
    "lon": -103.653122,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803585",
    "slug": "19339",
    "lat": 32.557695,
    "lon": -93.707353,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803591",
    "slug": "19073",
    "lat": 35.183029,
    "lon": -107.898154,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803593",
    "slug": "18997",
    "lat": 40.031523,
    "lon": -105.257355,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803595",
    "slug": "19144",
    "lat": 30.706458,
    "lon": -101.202558,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803599",
    "slug": "CedarParkTXSupercharger",
    "lat": 30.525714,
    "lon": -97.819321,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803625",
    "slug": "19083",
    "lat": 29.758579,
    "lon": -94.929995,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803637",
    "slug": "HarlingenTXSupercharger",
    "lat": 26.187903,
    "lon": -97.756415,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803645",
    "slug": "19064",
    "lat": 32.663597,
    "lon": -97.331564,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803663",
    "slug": "19049",
    "lat": 40.7203773,
    "lon": -116.1064422,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803667",
    "slug": "20483",
    "lat": 33.023187,
    "lon": -97.279119,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32803673",
    "slug": "20977",
    "lat": 35.067929,
    "lon": -118.175384,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803683",
    "slug": "26342",
    "lat": 34.039171,
    "lon": -118.687478,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803693",
    "slug": "18980",
    "lat": 32.670218,
    "lon": -97.113481,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803707",
    "slug": "southpadretxsupercharger",
    "lat": 26.08151,
    "lon": -97.1610598,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32803709",
    "slug": "santanarowvaletsupercharger",
    "lat": 37.321733,
    "lon": -121.948743,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32803716",
    "slug": "474402",
    "lat": 33.5725639,
    "lon": -101.9065691,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32803722",
    "slug": "18387",
    "lat": 37.635921,
    "lon": -118.967006,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32803723",
    "slug": "18387",
    "lat": 37.636198,
    "lon": -118.967928,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803737",
    "slug": "31524",
    "lat": 38.759735,
    "lon": -120.529891,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803753",
    "slug": "HoustonTX1Q42022",
    "lat": 29.740627,
    "lon": -95.645796,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803771",
    "slug": "32767",
    "lat": 30.403726,
    "lon": -97.673309,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803785",
    "slug": "32616",
    "lat": 32.770984,
    "lon": -96.87335,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803803",
    "slug": "27632",
    "lat": 35.974795,
    "lon": -120.900514,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803807",
    "slug": "27100",
    "lat": 33.634777,
    "lon": -97.154815,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32803813",
    "slug": "VacavilleCA2Q42022",
    "lat": 38.365341,
    "lon": -121.968024,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803831",
    "slug": "McKinneyTX1Q42022",
    "lat": 33.217467,
    "lon": -96.657195,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803845",
    "slug": "AddisonTXQ322",
    "lat": 32.950181,
    "lon": -96.81855,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803849",
    "slug": "27102",
    "lat": 34.188748,
    "lon": -101.749154,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803869",
    "slug": "32776",
    "lat": 39.522778,
    "lon": -107.774449,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803879",
    "slug": "32760",
    "lat": 30.814366,
    "lon": -97.610371,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803915",
    "slug": "30884",
    "lat": 32.296645,
    "lon": -106.812591,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803921",
    "slug": "28415",
    "lat": 36.202284,
    "lon": -121.129851,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803935",
    "slug": "30659",
    "lat": 38.863971,
    "lon": -121.951471,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32803944",
    "slug": "4004054",
    "lat": 34.112612,
    "lon": -118.150646,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804414",
    "slug": "4003014",
    "lat": 36.880188,
    "lon": -104.439329,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804416",
    "slug": "4006859",
    "lat": 33.200675,
    "lon": -117.36856,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804421",
    "slug": "407909",
    "lat": 39.709912,
    "lon": -105.075442,
    "locationType": [
      "party",
      "destination_charger"
    ]
  },
  {
    "uuid": "32804422",
    "slug": "DenverCOQ322",
    "lat": 39.778343,
    "lon": -104.848559,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32804423",
    "slug": "DenverCOQ322",
    "lat": 39.778313,
    "lon": -104.848533,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804447",
    "slug": "35274",
    "lat": 37.304874,
    "lon": -122.033824,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804477",
    "slug": "414320",
    "lat": 36.158403,
    "lon": -115.190921,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32804478",
    "slug": "414320",
    "lat": 36.158707,
    "lon": -115.19099,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804479",
    "slug": "BarstowCASupercharger2",
    "lat": 34.84489,
    "lon": -117.08585,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804480",
    "slug": "BarstowCASupercharger2",
    "lat": 34.844499,
    "lon": -117.085771,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804490",
    "slug": "416511",
    "lat": 38.922547,
    "lon": -121.058679,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804499",
    "slug": "407682",
    "lat": 37.897891,
    "lon": -122.514376,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804513",
    "slug": "DenisonTXsupercharger",
    "lat": 33.79303,
    "lon": -96.555043,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32804546",
    "slug": "dc12464",
    "lat": 38.46755,
    "lon": -122.348857,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804552",
    "slug": "dc12360",
    "lat": 31.055349,
    "lon": -98.178623,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804553",
    "slug": "dc14805",
    "lat": 26.137876,
    "lon": -97.169587,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804556",
    "slug": "dc14627",
    "lat": 38.428521,
    "lon": -122.555443,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804558",
    "slug": "dc14880",
    "lat": 32.303684,
    "lon": -95.322739,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804565",
    "slug": "dc15670",
    "lat": 38.620343,
    "lon": -122.593546,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804566",
    "slug": "dc16956",
    "lat": 33.042137,
    "lon": -96.830928,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804567",
    "slug": "dc16960",
    "lat": 40.382956,
    "lon": -105.518995,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804568",
    "slug": "dc17241",
    "lat": 28.056981,
    "lon": -97.041521,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804573",
    "slug": "dc1818",
    "lat": 35.164407,
    "lon": -120.689728,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804574",
    "slug": "dc181",
    "lat": 36.228829,
    "lon": -121.764843,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804579",
    "slug": "dc17009",
    "lat": 32.310125,
    "lon": -106.778422,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804580",
    "slug": "dc15904",
    "lat": 30.224228,
    "lon": -98.800846,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804582",
    "slug": "dc11429",
    "lat": 32.899809,
    "lon": -97.040335,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804585",
    "slug": "dc1091",
    "lat": 37.792442,
    "lon": -122.401039,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804589",
    "slug": "dc11032",
    "lat": 38.468937,
    "lon": -122.850563,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804642",
    "slug": "dc12173",
    "lat": 35.091527,
    "lon": -106.660941,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804643",
    "slug": "dc12358",
    "lat": 34.160417,
    "lon": -99.311336,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804647",
    "slug": "dc1157",
    "lat": 33.766815,
    "lon": -116.45826,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804649",
    "slug": "dc11879",
    "lat": 30.408205,
    "lon": -97.666596,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804653",
    "slug": "dc11727",
    "lat": 30.104326,
    "lon": -95.429301,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804657",
    "slug": "dc11819",
    "lat": 29.27023,
    "lon": -94.821473,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804661",
    "slug": "dc13450",
    "lat": 37.923893,
    "lon": -121.656966,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804662",
    "slug": "dc1324",
    "lat": 37.805388,
    "lon": -122.423418,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804667",
    "slug": "dc13223",
    "lat": 38.487603,
    "lon": -122.807316,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804668",
    "slug": "dc13169",
    "lat": 38.8566,
    "lon": -107.615,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804689",
    "slug": "dc15819",
    "lat": 38.525699,
    "lon": -120.801358,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804690",
    "slug": "dc1647",
    "lat": 33.835802,
    "lon": -118.349995,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804692",
    "slug": "dc1617",
    "lat": 36.501896,
    "lon": -121.9374874,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804701",
    "slug": "dc15926",
    "lat": 38.791226,
    "lon": -104.850101,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804720",
    "slug": "dc12889",
    "lat": 30.043046,
    "lon": -94.150541,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804721",
    "slug": "dc12855",
    "lat": 29.748067,
    "lon": -95.386061,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804722",
    "slug": "dc12898",
    "lat": 30.177951,
    "lon": -95.452684,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804725",
    "slug": "dc12817",
    "lat": 35.576456,
    "lon": -120.690461,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804730",
    "slug": "dc12719",
    "lat": 35.639417,
    "lon": -120.854499,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804734",
    "slug": "dc15507",
    "lat": 36.582435,
    "lon": -121.938447,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804736",
    "slug": "dc15599",
    "lat": 33.532782,
    "lon": -117.073443,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804744",
    "slug": "dc19021",
    "lat": 29.989143,
    "lon": -95.571772,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804745",
    "slug": "dc18848",
    "lat": 39.281445,
    "lon": -120.119807,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804751",
    "slug": "dc18574",
    "lat": 29.776238,
    "lon": -95.814941,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804752",
    "slug": "dc1822",
    "lat": 36.132303,
    "lon": -115.157647,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804754",
    "slug": "dc188",
    "lat": 36.089845,
    "lon": -115.173188,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804756",
    "slug": "dc19023",
    "lat": 29.688453,
    "lon": -95.419609,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804758",
    "slug": "dc190",
    "lat": 36.120106,
    "lon": -115.172665,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804760",
    "slug": "dc1981",
    "lat": 39.14694,
    "lon": -123.197442,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804767",
    "slug": "dc19897",
    "lat": 29.305229,
    "lon": -94.798922,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804770",
    "slug": "dc19761",
    "lat": 33.665933,
    "lon": -116.263705,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804771",
    "slug": "dc19896",
    "lat": 32.70937,
    "lon": -117.232073,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804780",
    "slug": "dc986",
    "lat": 37.390939,
    "lon": -121.974647,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32804793",
    "slug": "dc35011",
    "lat": 36.236696,
    "lon": -119.766144,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32805300",
    "slug": "4006706",
    "lat": 40.638522,
    "lon": -116.931043,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805302",
    "slug": "ShenandoahTX2Q42022",
    "lat": 30.194963,
    "lon": -95.452475,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805314",
    "slug": "409113",
    "lat": 28.307219,
    "lon": -97.275193,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805318",
    "slug": "35665",
    "lat": 29.734352,
    "lon": -95.605588,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805330",
    "slug": "400716",
    "lat": 39.618542,
    "lon": -105.092465,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805443",
    "slug": "402517",
    "lat": 34.9520469,
    "lon": -120.4160088,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805520",
    "slug": "58207",
    "lat": 40.58854,
    "lon": -122.345698,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805530",
    "slug": "431902",
    "lat": 39.091349,
    "lon": -108.552632,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32805532",
    "slug": "33591",
    "lat": 36.210903,
    "lon": -115.985701,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805542",
    "slug": "58769",
    "lat": 29.712493,
    "lon": -95.314552,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805546",
    "slug": "58720",
    "lat": 32.636205,
    "lon": -97.062084,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805558",
    "slug": "34886",
    "lat": 38.457884,
    "lon": -121.839933,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805570",
    "slug": "33917",
    "lat": 32.215727,
    "lon": -95.824895,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805574",
    "slug": "58811",
    "lat": 30.533729,
    "lon": -97.784482,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805608",
    "slug": "34556",
    "lat": 30.05031,
    "lon": -95.438297,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805612",
    "slug": "425553",
    "lat": 39.592059,
    "lon": -104.87839,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805614",
    "slug": "400788",
    "lat": 32.130351,
    "lon": -94.333,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805628",
    "slug": "415455",
    "lat": 36.144821,
    "lon": -115.06351,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805638",
    "slug": "34612",
    "lat": 39.308533,
    "lon": -120.545491,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805642",
    "slug": "58896",
    "lat": 35.622516,
    "lon": -97.478602,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805660",
    "slug": "58749",
    "lat": 27.793269,
    "lon": -97.651247,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805666",
    "slug": "404073",
    "lat": 37.758212,
    "lon": -121.96603,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805676",
    "slug": "401970",
    "lat": 39.889404,
    "lon": -104.990375,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32805678",
    "slug": "58714",
    "lat": 28.111057,
    "lon": -97.818435,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805686",
    "slug": "45384",
    "lat": 32.92554,
    "lon": -96.991721,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805694",
    "slug": "404915",
    "lat": 39.66665,
    "lon": -104.862573,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32805704",
    "slug": "4005711",
    "lat": 36.195978,
    "lon": -115.132007,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805710",
    "slug": "412623",
    "lat": 36.665496,
    "lon": -114.5690343,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805730",
    "slug": "401360",
    "lat": 36.121869,
    "lon": -115.14503,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805734",
    "slug": "410902",
    "lat": 36.125754,
    "lon": -115.134622,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805769",
    "slug": "58303",
    "lat": 29.740071,
    "lon": -95.411915,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805819",
    "slug": "ClydeTXQ322",
    "lat": 32.417478,
    "lon": -99.526559,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805855",
    "slug": "31521",
    "lat": 33.832277,
    "lon": -117.943158,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805870",
    "slug": "32090",
    "lat": 32.880789,
    "lon": -97.074506,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805893",
    "slug": "32614",
    "lat": 28.995815,
    "lon": -98.432241,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805909",
    "slug": "31887",
    "lat": 40.433597,
    "lon": -122.288758,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805949",
    "slug": "28668",
    "lat": 35.150425,
    "lon": -114.575339,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805963",
    "slug": "BeaumontTXQ322",
    "lat": 30.038821,
    "lon": -94.160454,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32805993",
    "slug": "29289",
    "lat": 38.984524,
    "lon": -119.943204,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32806013",
    "slug": "19078",
    "lat": 35.440565,
    "lon": -95.970074,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32806017",
    "slug": "32196",
    "lat": 34.520471,
    "lon": -117.325525,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32806187",
    "slug": "dc20110",
    "lat": 37.685716,
    "lon": -122.132684,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806195",
    "slug": "dc21545",
    "lat": 30.140265,
    "lon": -96.40033,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806198",
    "slug": "dc2179",
    "lat": 38.569894,
    "lon": -122.514784,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806208",
    "slug": "dc22495",
    "lat": 36.102767,
    "lon": -115.169994,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806219",
    "slug": "dc23002",
    "lat": 29.695115,
    "lon": -98.099054,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806220",
    "slug": "dc2354",
    "lat": 36.6198213,
    "lon": -121.9328597,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806221",
    "slug": "dc22664",
    "lat": 38.53681,
    "lon": -120.792722,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806226",
    "slug": "dc24727",
    "lat": 26.056496,
    "lon": -98.363687,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806258",
    "slug": "dc275",
    "lat": 38.436068,
    "lon": -122.71986,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806260",
    "slug": "dc276",
    "lat": 38.165257,
    "lon": -121.152498,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806262",
    "slug": "dc28150",
    "lat": 33.7554,
    "lon": -116.702189,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806264",
    "slug": "dc28863",
    "lat": 32.314574,
    "lon": -106.778826,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806279",
    "slug": "dc310",
    "lat": 36.519392,
    "lon": -121.806781,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806305",
    "slug": "dc365",
    "lat": 33.019087,
    "lon": -117.205773,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806327",
    "slug": "dc46953",
    "lat": 37.544194,
    "lon": -119.920112,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806337",
    "slug": "dc4992",
    "lat": 31.0778128,
    "lon": -97.6561128,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806338",
    "slug": "dc4915",
    "lat": 38.934939,
    "lon": -119.940518,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806341",
    "slug": "dc53012",
    "lat": 33.823254,
    "lon": -116.547795,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806351",
    "slug": "51232",
    "lat": 33.830322,
    "lon": -116.528157,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806352",
    "slug": "51179",
    "lat": 33.790192,
    "lon": -116.528797,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806354",
    "slug": "51129",
    "lat": 39.169016,
    "lon": -120.238506,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806359",
    "slug": "51261",
    "lat": 41.058469,
    "lon": -124.147447,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806360",
    "slug": "51266",
    "lat": 33.84396,
    "lon": -116.547714,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806362",
    "slug": "51150",
    "lat": 39.216209,
    "lon": -120.092834,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806363",
    "slug": "51136",
    "lat": 39.293389,
    "lon": -120.125186,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806384",
    "slug": "dc5839",
    "lat": 31.49365,
    "lon": -97.160484,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806405",
    "slug": "dc6422",
    "lat": 35.569905,
    "lon": -120.741587,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806419",
    "slug": "dc41391",
    "lat": 35.558868,
    "lon": -120.758446,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806426",
    "slug": "dc43390",
    "lat": 32.387396,
    "lon": -96.850721,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806434",
    "slug": "dc5085",
    "lat": 33.045043,
    "lon": -96.702983,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806435",
    "slug": "dc50324",
    "lat": 38.430622,
    "lon": -122.38952,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806436",
    "slug": "dc5099",
    "lat": 36.410313,
    "lon": -93.734754,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806441",
    "slug": "dc5220",
    "lat": 36.599754,
    "lon": -121.894638,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806442",
    "slug": "dc52306",
    "lat": 31.191767,
    "lon": -101.450641,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806443",
    "slug": "dc5065",
    "lat": 38.5954604,
    "lon": -122.6047026,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806460",
    "slug": "dc6342",
    "lat": 35.597588,
    "lon": -120.829814,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806461",
    "slug": "51711",
    "lat": 31.238307,
    "lon": -98.13279,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806474",
    "slug": "dc6274",
    "lat": 39.102721,
    "lon": -123.49261,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806493",
    "slug": "dc60898",
    "lat": 33.718238,
    "lon": -116.380194,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806507",
    "slug": "53528",
    "lat": 38.026608,
    "lon": -107.671075,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806516",
    "slug": "54064",
    "lat": 33.080346,
    "lon": -116.601988,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806538",
    "slug": "dc20121",
    "lat": 38.512443,
    "lon": -106.331987,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806539",
    "slug": "dc20107",
    "lat": 35.494925,
    "lon": -120.809002,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806540",
    "slug": "dc2072",
    "lat": 30.269491,
    "lon": -97.742266,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806612",
    "slug": "dc30216",
    "lat": 28.662657,
    "lon": -106.127363,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806634",
    "slug": "dc32188",
    "lat": 32.570158,
    "lon": -96.823234,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806635",
    "slug": "dc321",
    "lat": 33.8457902,
    "lon": -116.5444318,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806640",
    "slug": "dc32682",
    "lat": 29.957064,
    "lon": -95.550736,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806641",
    "slug": "dc32867",
    "lat": 40.966158,
    "lon": -117.742659,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806645",
    "slug": "dc331",
    "lat": 33.516102,
    "lon": -117.757461,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806646",
    "slug": "dc39047",
    "lat": 37.725841,
    "lon": -122.198335,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806652",
    "slug": "dc403",
    "lat": 34.054371,
    "lon": -118.411911,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806654",
    "slug": "dc40596",
    "lat": 32.926961,
    "lon": -96.824545,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806655",
    "slug": "dc41052",
    "lat": 37.214164,
    "lon": -119.708038,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806687",
    "slug": "dc13340",
    "lat": 33.525356,
    "lon": -117.064352,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806690",
    "slug": "dc13751",
    "lat": 38.272406,
    "lon": -122.662407,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806694",
    "slug": "dc14037",
    "lat": 39.524659,
    "lon": -119.765561,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806697",
    "slug": "dc13469",
    "lat": 34.138739,
    "lon": -118.044618,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806698",
    "slug": "dc13717",
    "lat": 35.636418,
    "lon": -120.859674,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806748",
    "slug": "dc219",
    "lat": 34.612955,
    "lon": -120.07901,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806749",
    "slug": "dc22060",
    "lat": 38.580532,
    "lon": -122.578276,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806752",
    "slug": "dc2276",
    "lat": 33.182787,
    "lon": -97.100066,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806753",
    "slug": "dc23084",
    "lat": 38.559898,
    "lon": -122.630428,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806769",
    "slug": "dc24367",
    "lat": 38.497132,
    "lon": -122.766341,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806774",
    "slug": "dc26641",
    "lat": 39.771872,
    "lon": -104.80692,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806783",
    "slug": "dc25911",
    "lat": 38.495894,
    "lon": -122.766331,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806815",
    "slug": "dc29773",
    "lat": 38.991507,
    "lon": -104.808268,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806816",
    "slug": "dc29848",
    "lat": 30.067054,
    "lon": -99.330143,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806825",
    "slug": "dc29194",
    "lat": 33.821543,
    "lon": -116.548456,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806826",
    "slug": "dc28565",
    "lat": 28.057918,
    "lon": -97.041743,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806828",
    "slug": "dc30613",
    "lat": 38.575397,
    "lon": -122.549492,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806834",
    "slug": "dc3419",
    "lat": 35.5707816,
    "lon": -120.7913841,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806836",
    "slug": "dc3412",
    "lat": 33.51357,
    "lon": -117.748042,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806837",
    "slug": "dc35378",
    "lat": 33.225812,
    "lon": -97.170143,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806840",
    "slug": "dc348",
    "lat": 30.3272668,
    "lon": -97.9254155,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806841",
    "slug": "dc3415",
    "lat": 35.635866,
    "lon": -120.607745,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806844",
    "slug": "dc34162",
    "lat": 37.227975,
    "lon": -121.980024,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806858",
    "slug": "dc4077",
    "lat": 30.27634,
    "lon": -98.402635,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806859",
    "slug": "dc4089",
    "lat": 32.83358,
    "lon": -117.143817,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32806864",
    "slug": "NorthridgeCAsupercharger",
    "lat": 34.234647,
    "lon": -118.553252,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32806901",
    "slug": "32439",
    "lat": 34.121427,
    "lon": -117.787102,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32806906",
    "slug": "MonumentCOsupercharger",
    "lat": 39.092311,
    "lon": -104.852583,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32806918",
    "slug": "DallasTXCentralQ322",
    "lat": 32.767263,
    "lon": -96.807834,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807020",
    "slug": "29515",
    "lat": 36.093958,
    "lon": -115.297108,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807034",
    "slug": "30883",
    "lat": 37.467355,
    "lon": -105.868565,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807038",
    "slug": "409761",
    "lat": 34.658061,
    "lon": -120.102718,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807048",
    "slug": "32629",
    "lat": 32.428679,
    "lon": -96.874374,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807065",
    "slug": "WalnutCreekCAQ42022",
    "lat": 37.92361,
    "lon": -122.088212,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807067",
    "slug": "25867",
    "lat": 33.990892,
    "lon": -117.925284,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807073",
    "slug": "34471",
    "lat": 37.66138,
    "lon": -121.780019,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807075",
    "slug": "19937",
    "lat": 32.650322,
    "lon": -116.954361,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807077",
    "slug": "35154",
    "lat": 33.917313,
    "lon": -118.092581,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807079",
    "slug": "34351",
    "lat": 33.971071,
    "lon": -118.071089,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807083",
    "slug": "WindsorCAsupercharger",
    "lat": 38.549895,
    "lon": -122.805408,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807085",
    "slug": "17676",
    "lat": 33.889264,
    "lon": -117.808251,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807087",
    "slug": "beaumontcasupercharger",
    "lat": 33.922712,
    "lon": -116.952055,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807089",
    "slug": "19740",
    "lat": 34.073767,
    "lon": -117.880902,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807094",
    "slug": "SanBrunoCAsupercharger",
    "lat": 37.63603,
    "lon": -122.420318,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807096",
    "slug": "SanLuisObispoCASupercharger3",
    "lat": 35.248113,
    "lon": -120.671345,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807098",
    "slug": "IndustryCAsupercharger",
    "lat": 33.994491,
    "lon": -117.899569,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807100",
    "slug": "YorbaLindaCAQ322",
    "lat": 33.887761,
    "lon": -117.813759,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807104",
    "slug": "28435",
    "lat": 38.347257,
    "lon": -121.999158,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807113",
    "slug": "hawthornecaweststreetsupercharger",
    "lat": 33.922598,
    "lon": -118.322044,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807123",
    "slug": "ShermanOaksCAsupercharger",
    "lat": 34.1572,
    "lon": -118.467281,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807127",
    "slug": "MarinaDelReyCAsupercharger",
    "lat": 33.980405,
    "lon": -118.445253,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807141",
    "slug": "26339",
    "lat": 37.591264,
    "lon": -122.348911,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807143",
    "slug": "18884",
    "lat": 37.554959,
    "lon": -121.974224,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807149",
    "slug": "58450",
    "lat": 37.705695,
    "lon": -121.881305,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807156",
    "slug": "WestCovinaCASupercharger",
    "lat": 34.070645,
    "lon": -117.889082,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807158",
    "slug": "scottsvalleysupercharger",
    "lat": 37.047388,
    "lon": -122.027829,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32807162",
    "slug": "ontariocaliforniasupercharger",
    "lat": 34.066333,
    "lon": -117.650056,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807168",
    "slug": "57583",
    "lat": 32.882921,
    "lon": -117.155168,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807176",
    "slug": "27561",
    "lat": 35.120559,
    "lon": -120.61094,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807186",
    "slug": "28247",
    "lat": 35.382682,
    "lon": -119.047406,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807188",
    "slug": "StocktonCASupercharger",
    "lat": 38.038985,
    "lon": -121.261052,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807192",
    "slug": "SouthTemeculaCAsupercharger",
    "lat": 33.475121,
    "lon": -117.129324,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807196",
    "slug": "35135",
    "lat": 37.5619,
    "lon": -122.008361,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807202",
    "slug": "31549",
    "lat": 36.871769,
    "lon": -119.761713,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807210",
    "slug": "27166",
    "lat": 36.978626,
    "lon": -121.96592,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807212",
    "slug": "400552",
    "lat": 37.70568,
    "lon": -121.922234,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807214",
    "slug": "WestCovinaCAQ42022",
    "lat": 34.073884,
    "lon": -117.889754,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807216",
    "slug": "emeryvillesupercharger",
    "lat": 37.840377,
    "lon": -122.294063,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807228",
    "slug": "35408",
    "lat": 33.046406,
    "lon": -117.26254,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807230",
    "slug": "31118",
    "lat": 34.026968,
    "lon": -117.762288,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807232",
    "slug": "SalinasCAQ42022",
    "lat": 36.656094,
    "lon": -121.661599,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807234",
    "slug": "PerrisCAQ12024",
    "lat": 33.802956,
    "lon": -117.229545,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807244",
    "slug": "20678",
    "lat": 38.655959,
    "lon": -120.965861,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807246",
    "slug": "18959",
    "lat": 37.40423,
    "lon": -122.025224,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807248",
    "slug": "18838",
    "lat": 37.799264,
    "lon": -121.919468,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807250",
    "slug": "27706",
    "lat": 33.666392,
    "lon": -117.882859,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807258",
    "slug": "TracyCASupercharger",
    "lat": 37.752923,
    "lon": -121.467614,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807264",
    "slug": "AnaheimCAQ42022",
    "lat": 33.83221,
    "lon": -117.928889,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807266",
    "slug": "18933",
    "lat": 32.821683,
    "lon": -117.184309,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807268",
    "slug": "36089",
    "lat": 33.825069,
    "lon": -116.459564,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807270",
    "slug": "SanRamonCAsupercharger",
    "lat": 37.723132,
    "lon": -121.944335,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807272",
    "slug": "VisaliaCAQ322",
    "lat": 36.35077,
    "lon": -119.424825,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807276",
    "slug": "21179",
    "lat": 37.706455,
    "lon": -121.935079,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807280",
    "slug": "FountainValleyCASupercharger2",
    "lat": 33.715676,
    "lon": -117.964944,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807282",
    "slug": "20788",
    "lat": 34.029697,
    "lon": -117.612095,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807284",
    "slug": "28561",
    "lat": 38.362291,
    "lon": -121.963275,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807286",
    "slug": "13997",
    "lat": 37.696573,
    "lon": -122.463087,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807290",
    "slug": "16447",
    "lat": 37.610085,
    "lon": -120.976584,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807292",
    "slug": "28429",
    "lat": 39.1998,
    "lon": -121.064326,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807302",
    "slug": "SonomaCAsupercharger",
    "lat": 38.291628,
    "lon": -122.452175,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807306",
    "slug": "15634",
    "lat": 34.095083,
    "lon": -118.12393,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807312",
    "slug": "11406",
    "lat": 37.990735,
    "lon": -122.301679,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807314",
    "slug": "31898",
    "lat": 33.873114,
    "lon": -118.302679,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807316",
    "slug": "7187",
    "lat": 37.377711,
    "lon": -122.077452,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807320",
    "slug": "TustinCAQ322",
    "lat": 33.727877,
    "lon": -117.822001,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807324",
    "slug": "31872",
    "lat": 37.718253,
    "lon": -121.725216,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807328",
    "slug": "35702",
    "lat": 37.476515,
    "lon": -121.921236,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807334",
    "slug": "32171",
    "lat": 37.273823,
    "lon": -121.850086,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807338",
    "slug": "FresnoCAsupercharger",
    "lat": 36.850356,
    "lon": -119.791265,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807344",
    "slug": "15593",
    "lat": 33.647894,
    "lon": -117.739005,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807346",
    "slug": "4005755",
    "lat": 33.716002,
    "lon": -118.007465,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807356",
    "slug": "30953",
    "lat": 38.084468,
    "lon": -122.211243,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807364",
    "slug": "35310",
    "lat": 37.26703,
    "lon": -121.831647,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807372",
    "slug": "SelmaCASupercharger",
    "lat": 36.575554,
    "lon": -119.629804,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807376",
    "slug": "4005156",
    "lat": 32.750819,
    "lon": -117.207053,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807378",
    "slug": "27720",
    "lat": 37.535916,
    "lon": -122.063097,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807380",
    "slug": "BreaCA1supercharger",
    "lat": 33.914568,
    "lon": -117.88373,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807382",
    "slug": "LathropCAQ322",
    "lat": 37.826158,
    "lon": -121.285934,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807384",
    "slug": "HighlandCAsupercharger",
    "lat": 34.135256,
    "lon": -117.195069,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807390",
    "slug": "26204",
    "lat": 33.873993,
    "lon": -118.202389,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807392",
    "slug": "29378",
    "lat": 33.759085,
    "lon": -117.856638,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807588",
    "slug": "4003236",
    "lat": 29.766719,
    "lon": -95.366075,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32807603",
    "slug": "20482",
    "lat": 32.717361,
    "lon": -96.323141,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32807605",
    "slug": "409360",
    "lat": 38.40806,
    "lon": -122.839309,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807611",
    "slug": "19055",
    "lat": 31.725357,
    "lon": -96.177634,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807787",
    "slug": "56539",
    "lat": 35.514759,
    "lon": -120.697203,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807877",
    "slug": "28480",
    "lat": 37.653208,
    "lon": -122.090423,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807881",
    "slug": "27603",
    "lat": 34.285241,
    "lon": -118.719568,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807883",
    "slug": "27469",
    "lat": 37.415529,
    "lon": -121.878238,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807887",
    "slug": "414218",
    "lat": 32.764923,
    "lon": -117.197591,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807897",
    "slug": "401316",
    "lat": 32.826807,
    "lon": -116.901305,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807899",
    "slug": "4008926",
    "lat": 32.696385,
    "lon": -117.132024,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807903",
    "slug": "27777",
    "lat": 33.83336,
    "lon": -118.259886,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807942",
    "slug": "58895",
    "lat": 35.508774,
    "lon": -97.501428,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32807993",
    "slug": "27380",
    "lat": 34.077346,
    "lon": -118.138554,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808042",
    "slug": "6854",
    "lat": 35.610604,
    "lon": -97.578048,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808057",
    "slug": "29106",
    "lat": 33.948775,
    "lon": -118.16424,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808069",
    "slug": "19060",
    "lat": 39.591149,
    "lon": -106.096934,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32808080",
    "slug": "439860",
    "lat": 38.914597,
    "lon": -120.005378,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808097",
    "slug": "36216",
    "lat": 38.289318,
    "lon": -121.306551,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808099",
    "slug": "35882",
    "lat": 38.255417,
    "lon": -119.232233,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808114",
    "slug": "21178",
    "lat": 35.599915,
    "lon": -119.209702,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808139",
    "slug": "26979",
    "lat": 34.672926,
    "lon": -118.153693,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808149",
    "slug": "sanjosecaecapitolexpresswaysupercharger",
    "lat": 37.300151,
    "lon": -121.82481,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808151",
    "slug": "35104",
    "lat": 37.538801,
    "lon": -122.033322,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808162",
    "slug": "59435",
    "lat": 38.613449,
    "lon": -121.270882,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808164",
    "slug": "31299",
    "lat": 33.945815,
    "lon": -117.999105,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808388",
    "slug": "27147",
    "lat": 32.900424,
    "lon": -105.956248,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808390",
    "slug": "31300",
    "lat": 34.079207,
    "lon": -117.98884,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808400",
    "slug": "17711",
    "lat": 37.373476,
    "lon": -121.920383,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32808402",
    "slug": "19194",
    "lat": 39.538179,
    "lon": -119.733902,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32809539",
    "slug": "467306",
    "lat": 39.7996109,
    "lon": -104.8829999,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809541",
    "slug": "19056",
    "lat": 36.767938,
    "lon": -108.148363,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32809546",
    "slug": "431752",
    "lat": 32.29363,
    "lon": -106.7775581,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809548",
    "slug": "26628",
    "lat": 39.40804,
    "lon": -104.863051,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32809553",
    "slug": "dc31794",
    "lat": 32.997119,
    "lon": -117.194047,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809554",
    "slug": "dc1832",
    "lat": 38.305275,
    "lon": -122.283453,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809555",
    "slug": "54247",
    "lat": 37.244365,
    "lon": -121.890946,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809558",
    "slug": "teslajackson12222newyorkranchrd",
    "lat": 38.3854639,
    "lon": -120.7327566,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809564",
    "slug": "477555",
    "lat": 37.8820766,
    "lon": -122.1872012,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809565",
    "slug": "462439",
    "lat": 33.736609,
    "lon": -117.990137,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809585",
    "slug": "405808",
    "lat": 36.10134,
    "lon": -114.932241,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809586",
    "slug": "412014",
    "lat": 36.083744,
    "lon": -115.29322,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809594",
    "slug": "teslalasvegas160eflamingordwestinlasvegas",
    "lat": 36.115059,
    "lon": -115.165779,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809596",
    "slug": "dc23372",
    "lat": 28.626756,
    "lon": -106.114846,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809812",
    "slug": "dc14634",
    "lat": 36.305126,
    "lon": -95.319671,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809816",
    "slug": "dc950218164",
    "lat": 32.9666543,
    "lon": -97.0303122,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809818",
    "slug": "53462",
    "lat": 30.2645053,
    "lon": -97.7433019,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809820",
    "slug": "401752",
    "lat": 29.5293468,
    "lon": -98.6859144,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809823",
    "slug": "52089",
    "lat": 32.78687,
    "lon": -96.79593,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809826",
    "slug": "dc407475",
    "lat": 29.5691107,
    "lon": -95.5631004,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809829",
    "slug": "441602",
    "lat": 30.3637618,
    "lon": -103.6407485,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809835",
    "slug": "437967",
    "lat": 30.2215422,
    "lon": -98.7203135,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809845",
    "slug": "4007522",
    "lat": 29.603203,
    "lon": -95.624834,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809853",
    "slug": "459781",
    "lat": 34.59626,
    "lon": -120.1455328,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809856",
    "slug": "458741",
    "lat": 34.0479175,
    "lon": -118.263058,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809857",
    "slug": "458510",
    "lat": 34.0529354,
    "lon": -118.297287,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809860",
    "slug": "463382",
    "lat": 39.2346572,
    "lon": -120.0175422,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809863",
    "slug": "464404",
    "lat": 39.5881909,
    "lon": -104.8626098,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809864",
    "slug": "464502",
    "lat": 30.2374937,
    "lon": -97.7552252,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809872",
    "slug": "457207",
    "lat": 29.2914055,
    "lon": -94.8606911,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809878",
    "slug": "462421",
    "lat": 34.0316641,
    "lon": -118.4554446,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809883",
    "slug": "469054",
    "lat": 32.5436033,
    "lon": -94.7375331,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809887",
    "slug": "480305",
    "lat": 39.3102707,
    "lon": -119.6504864,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809888",
    "slug": "480953",
    "lat": 33.752296,
    "lon": -117.994853,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32809898",
    "slug": "453653",
    "lat": 36.4258159,
    "lon": -118.9144692,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809899",
    "slug": "460652",
    "lat": 36.7641665,
    "lon": -119.7205608,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809900",
    "slug": "459952",
    "lat": 36.422904,
    "lon": -118.921086,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809901",
    "slug": "459815",
    "lat": 38.5670293,
    "lon": -121.4865494,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809903",
    "slug": "460402",
    "lat": 36.3282819,
    "lon": -119.2907275,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809905",
    "slug": "470603",
    "lat": 33.7875724,
    "lon": -117.8447038,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809913",
    "slug": "474206",
    "lat": 29.9024751,
    "lon": -95.5443949,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32809915",
    "slug": "34128",
    "lat": 38.648811,
    "lon": -121.164576,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32809923",
    "slug": "407108",
    "lat": 29.722869,
    "lon": -95.442955,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32809975",
    "slug": "20410",
    "lat": 37.657078,
    "lon": -121.898,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32809977",
    "slug": "401263",
    "lat": 37.644503,
    "lon": -122.104011,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32809984",
    "slug": "400057",
    "lat": 34.25159,
    "lon": -116.884354,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32810026",
    "slug": "453503",
    "lat": 38.0438355,
    "lon": -120.5210672,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810027",
    "slug": "456260",
    "lat": 37.9624308,
    "lon": -122.0548814,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810042",
    "slug": "478452",
    "lat": 33.2221723,
    "lon": -97.1670058,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810050",
    "slug": "473864",
    "lat": 33.9482228,
    "lon": -118.3792581,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810057",
    "slug": "451114",
    "lat": 33.2527984,
    "lon": -116.9616473,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810062",
    "slug": "461355",
    "lat": 33.2091495,
    "lon": -96.824969,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810063",
    "slug": "461177",
    "lat": 36.4795505,
    "lon": -118.8385886,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810064",
    "slug": "466760",
    "lat": 33.7082477,
    "lon": -116.2441287,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810067",
    "slug": "466706",
    "lat": 30.1099227,
    "lon": -97.3473599,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810071",
    "slug": "481512",
    "lat": 40.7944394,
    "lon": -105.2167318,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810072",
    "slug": "481207",
    "lat": 32.7441365,
    "lon": -97.3329643,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810074",
    "slug": "51188",
    "lat": 34.448096,
    "lon": -119.807527,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810078",
    "slug": "dc6136",
    "lat": 33.935974,
    "lon": -117.27492,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810085",
    "slug": "dc6021",
    "lat": 38.746526,
    "lon": -105.174984,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810099",
    "slug": "53453",
    "lat": 34.051539,
    "lon": -118.258508,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810100",
    "slug": "53464",
    "lat": 39.718888,
    "lon": -104.955621,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810112",
    "slug": "dc85821",
    "lat": 38.793192,
    "lon": -121.297453,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810116",
    "slug": "dc67691",
    "lat": 36.091183,
    "lon": -95.924064,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810143",
    "slug": "404403",
    "lat": 39.6733739,
    "lon": -104.9871239,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810145",
    "slug": "dc403705",
    "lat": 32.4416917,
    "lon": -97.7903253,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810146",
    "slug": "dc405260",
    "lat": 29.5776994,
    "lon": -95.5760453,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810155",
    "slug": "436159",
    "lat": 36.0929942,
    "lon": -115.1757617,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810164",
    "slug": "448303",
    "lat": 33.9327846,
    "lon": -117.5570618,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810277",
    "slug": "dc5950",
    "lat": 34.099893,
    "lon": -118.325744,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810281",
    "slug": "dc737",
    "lat": 34.0666534,
    "lon": -118.4010018,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810292",
    "slug": "52657",
    "lat": 38.3978904,
    "lon": -120.8071345,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810295",
    "slug": "dc52743",
    "lat": 36.11814,
    "lon": -115.163598,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810304",
    "slug": "53564",
    "lat": 27.711,
    "lon": -97.371231,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810306",
    "slug": "dc634",
    "lat": 38.646898,
    "lon": -122.927687,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810309",
    "slug": "53587",
    "lat": 34.2508,
    "lon": -117.191926,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810320",
    "slug": "dc5874",
    "lat": 30.352669,
    "lon": -97.70974,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810323",
    "slug": "dc6530",
    "lat": 38.34591,
    "lon": -122.33966,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810363",
    "slug": "dc56645",
    "lat": 37.210841,
    "lon": -119.697699,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810369",
    "slug": "4002663",
    "lat": 39.504469,
    "lon": -119.779734,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810373",
    "slug": "dc413932",
    "lat": 36.1013105,
    "lon": -95.9126235,
    "locationType": [
      "destination_charger_nontesla",
      "self_serve_demo_drive"
    ]
  },
  {
    "uuid": "32810377",
    "slug": "dc412059",
    "lat": 35.1219568,
    "lon": -120.5887829,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810379",
    "slug": "412256",
    "lat": 39.628798,
    "lon": -106.49477,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810380",
    "slug": "dc412162",
    "lat": 38.5275421,
    "lon": -122.4834485,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810381",
    "slug": "412112",
    "lat": 39.465961,
    "lon": -119.790309,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810384",
    "slug": "426566",
    "lat": 33.0886896,
    "lon": -96.8398333,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810391",
    "slug": "19010",
    "lat": 32.5799439,
    "lon": -95.8563727,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810397",
    "slug": "dc75662",
    "lat": 32.373182,
    "lon": -99.749356,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810401",
    "slug": "51233",
    "lat": 33.828992,
    "lon": -116.5245,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810454",
    "slug": "dc9506",
    "lat": 39.755936,
    "lon": -105.222952,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810457",
    "slug": "54983",
    "lat": 34.241399,
    "lon": -119.177449,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810464",
    "slug": "dc6023",
    "lat": 38.750565,
    "lon": -105.173815,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810468",
    "slug": "55469",
    "lat": 29.638358,
    "lon": -95.275339,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810471",
    "slug": "55454",
    "lat": 39.716992,
    "lon": -120.545801,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810481",
    "slug": "dc401982",
    "lat": 36.1493385,
    "lon": -95.9148161,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810485",
    "slug": "409365",
    "lat": 26.1350585,
    "lon": -97.1710289,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810487",
    "slug": "dc409034",
    "lat": 33.193647,
    "lon": -117.382281,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810489",
    "slug": "409130",
    "lat": 30.2635204,
    "lon": -98.8472378,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810490",
    "slug": "lubbock6107",
    "lat": 33.5378987,
    "lon": -101.950164,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810492",
    "slug": "409418",
    "lat": 38.3671049,
    "lon": -122.3063988,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810494",
    "slug": "401268",
    "lat": 33.502094,
    "lon": -117.154357,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810496",
    "slug": "422711",
    "lat": 36.2852266,
    "lon": -115.2891796,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810497",
    "slug": "423755",
    "lat": 28.7052803,
    "lon": -96.4301537,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810509",
    "slug": "450505",
    "lat": 30.9039726,
    "lon": -102.9021166,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810515",
    "slug": "51356",
    "lat": 30.16678,
    "lon": -98.38211,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810527",
    "slug": "dc6284",
    "lat": 38.3033887,
    "lon": -122.3113571,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810528",
    "slug": "dc537247",
    "lat": 33.5408,
    "lon": -116.74073,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810565",
    "slug": "dc53921",
    "lat": 38.732843,
    "lon": -106.162829,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810575",
    "slug": "dc645",
    "lat": 40.578286,
    "lon": -124.152926,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810580",
    "slug": "dc56471",
    "lat": 39.64258,
    "lon": -106.378004,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810598",
    "slug": "401994",
    "lat": 30.2710479,
    "lon": -97.743495,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810605",
    "slug": "429705",
    "lat": 32.7538028,
    "lon": -97.3302639,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810606",
    "slug": "434259",
    "lat": 27.7046833,
    "lon": -97.3650702,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810607",
    "slug": "443558",
    "lat": 38.4390265,
    "lon": -105.2408453,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810611",
    "slug": "51052",
    "lat": 29.755234,
    "lon": -95.360952,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810615",
    "slug": "dc6494",
    "lat": 38.953437,
    "lon": -119.763589,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810621",
    "slug": "dc846079302",
    "lat": 38.955026,
    "lon": -119.763734,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810625",
    "slug": "dc877878363",
    "lat": 34.9474299,
    "lon": -119.6906598,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810634",
    "slug": "dc55818",
    "lat": 40.854412,
    "lon": -115.748573,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810636",
    "slug": "52778",
    "lat": 25.964085,
    "lon": -97.507339,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810647",
    "slug": "52780",
    "lat": 29.41212,
    "lon": -95.041771,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810662",
    "slug": "dc79537",
    "lat": 38.694947,
    "lon": -120.908402,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810664",
    "slug": "54352",
    "lat": 30.126261,
    "lon": -95.423845,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810671",
    "slug": "54816",
    "lat": 30.378657,
    "lon": -97.675981,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810697",
    "slug": "429565",
    "lat": 37.8132947,
    "lon": -107.6631984,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810703",
    "slug": "436955",
    "lat": 39.77558,
    "lon": -104.879655,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810706",
    "slug": "51057",
    "lat": 37.788655,
    "lon": -122.400563,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810707",
    "slug": "51245",
    "lat": 36.973388,
    "lon": -121.903908,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810722",
    "slug": "dc90331",
    "lat": 38.448967,
    "lon": -122.379919,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810732",
    "slug": "53362",
    "lat": 33.05045,
    "lon": -117.29306,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810746",
    "slug": "dc70751",
    "lat": 35.478122,
    "lon": -97.750819,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810754",
    "slug": "dc716",
    "lat": 38.4952778,
    "lon": -122.7588656,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810756",
    "slug": "dc6111",
    "lat": 38.137793,
    "lon": -120.464116,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810759",
    "slug": "teslasanfrancisco191sutterstsanfranciscoca94104galleriaparkhotel",
    "lat": 37.789651,
    "lon": -122.403558,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810760",
    "slug": "scottishinnssuitesiahairporthumble7827farmtomarket1960bypassrdw",
    "lat": 30.00558,
    "lon": -95.3083379,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810768",
    "slug": "409953",
    "lat": 35.2561196,
    "lon": -120.6777474,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810769",
    "slug": "dc409655",
    "lat": 38.7019544,
    "lon": -122.9562893,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810773",
    "slug": "409516",
    "lat": 33.457663,
    "lon": -94.076708,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810778",
    "slug": "440310",
    "lat": 37.7988032,
    "lon": -121.0558379,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810786",
    "slug": "dc783",
    "lat": 33.61548,
    "lon": -117.914397,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810789",
    "slug": "dc6072",
    "lat": 39.460496,
    "lon": -123.80675,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810790",
    "slug": "dc568",
    "lat": 38.9599005,
    "lon": -119.9445238,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810792",
    "slug": "51530",
    "lat": 37.04223,
    "lon": -122.14922,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810796",
    "slug": "dc87126",
    "lat": 38.58258,
    "lon": -122.576947,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810809",
    "slug": "dc9507",
    "lat": 29.966348,
    "lon": -98.90732,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810828",
    "slug": "dc681",
    "lat": 39.188821,
    "lon": -106.821168,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810845",
    "slug": "54779",
    "lat": 32.786616,
    "lon": -97.3497281,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810880",
    "slug": "416905",
    "lat": 29.8034925,
    "lon": -95.1621946,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810883",
    "slug": "427708",
    "lat": 34.1392221,
    "lon": -118.0145832,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810884",
    "slug": "428757",
    "lat": 32.2707629,
    "lon": -97.1872003,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810886",
    "slug": "427913",
    "lat": 36.0997689,
    "lon": -115.182243,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810892",
    "slug": "442364",
    "lat": 27.8518369,
    "lon": -97.6291301,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810895",
    "slug": "51152",
    "lat": 33.857812,
    "lon": -118.052659,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810898",
    "slug": "dc5979",
    "lat": 38.602511,
    "lon": -122.597651,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810905",
    "slug": "dc6328",
    "lat": 34.613487,
    "lon": -120.08196,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810907",
    "slug": "52386",
    "lat": 38.511994,
    "lon": -123.193433,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810914",
    "slug": "53273",
    "lat": 36.592387,
    "lon": -121.876274,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810936",
    "slug": "54033",
    "lat": 35.5655749,
    "lon": -121.0800223,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810945",
    "slug": "54661",
    "lat": 34.24239,
    "lon": -116.91475,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810951",
    "slug": "dc6252",
    "lat": 36.5593468,
    "lon": -121.9209566,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810971",
    "slug": "407512",
    "lat": 30.3602128,
    "lon": -97.7423068,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810974",
    "slug": "407832",
    "lat": 40.9841679,
    "lon": -122.7050624,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810976",
    "slug": "417508",
    "lat": 29.4058465,
    "lon": -98.6161104,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810977",
    "slug": "417861",
    "lat": 34.138483,
    "lon": -116.306134,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32810981",
    "slug": "441111",
    "lat": 34.1720771,
    "lon": -97.1614339,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810985",
    "slug": "441483",
    "lat": 39.72825,
    "lon": -121.8408,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32810991",
    "slug": "450620",
    "lat": 37.5543656,
    "lon": -122.2766427,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32811127",
    "slug": "dc12920",
    "lat": 37.730079,
    "lon": -122.213042,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811129",
    "slug": "dc13023",
    "lat": 33.694745,
    "lon": -117.858723,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811133",
    "slug": "dc12895",
    "lat": 38.489023,
    "lon": -122.450566,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811134",
    "slug": "dc12897",
    "lat": 28.989004,
    "lon": -95.928545,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811136",
    "slug": "dc13055",
    "lat": 41.084381,
    "lon": -122.718455,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811137",
    "slug": "dc12959",
    "lat": 37.952106,
    "lon": -120.423294,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811141",
    "slug": "dc13712",
    "lat": 35.589594,
    "lon": -120.715827,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811143",
    "slug": "dc13657",
    "lat": 32.8364691,
    "lon": -96.8058948,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811144",
    "slug": "dc13783",
    "lat": 31.048649,
    "lon": -94.124886,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811150",
    "slug": "dc15548",
    "lat": 30.149202,
    "lon": -96.386061,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811157",
    "slug": "dc1732",
    "lat": 37.651321,
    "lon": -118.986123,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811159",
    "slug": "dc166",
    "lat": 36.112044,
    "lon": -115.175225,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811160",
    "slug": "dc174",
    "lat": 38.955286,
    "lon": -119.943303,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811161",
    "slug": "dc17535",
    "lat": 36.355003,
    "lon": -105.613678,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811162",
    "slug": "dc17093",
    "lat": 37.418651,
    "lon": -122.135119,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811163",
    "slug": "dc17088",
    "lat": 37.934854,
    "lon": -107.846334,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811165",
    "slug": "dc16564",
    "lat": 36.108345,
    "lon": -115.168798,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811166",
    "slug": "dc1735",
    "lat": 39.604825,
    "lon": -106.515487,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811167",
    "slug": "dc1795",
    "lat": 34.408546,
    "lon": -119.693617,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811199",
    "slug": "dc2405",
    "lat": 34.009207,
    "lon": -118.492867,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811209",
    "slug": "dc26431",
    "lat": 29.859895,
    "lon": -97.951442,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811210",
    "slug": "dc26407",
    "lat": 33.331697,
    "lon": -105.675763,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811214",
    "slug": "dc2722",
    "lat": 34.420632,
    "lon": -119.702748,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811219",
    "slug": "dc26722",
    "lat": 40.464727,
    "lon": -106.823199,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811220",
    "slug": "dc271",
    "lat": 35.568983,
    "lon": -121.105261,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811222",
    "slug": "dc2729",
    "lat": 38.556018,
    "lon": -122.499959,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811227",
    "slug": "dc27781",
    "lat": 35.444932,
    "lon": -97.419801,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811229",
    "slug": "dc2779",
    "lat": 30.1516232,
    "lon": -93.6375554,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811230",
    "slug": "dc28012",
    "lat": 32.765541,
    "lon": -117.24046,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811234",
    "slug": "dc31296",
    "lat": 39.636509,
    "lon": -106.524947,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811235",
    "slug": "dc31459",
    "lat": 32.495518,
    "lon": -94.357031,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32811244",
    "slug": "dc31210",
    "lat": 29.80628,
    "lon": -94.984893,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811259",
    "slug": "dc426",
    "lat": 39.26742,
    "lon": -120.127504,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811265",
    "slug": "dc424",
    "lat": 40.575456,
    "lon": -124.264533,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811367",
    "slug": "dc25520",
    "lat": 36.984315,
    "lon": -122.022581,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811369",
    "slug": "dc25821",
    "lat": 39.633279,
    "lon": -106.533438,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811370",
    "slug": "dc25735",
    "lat": 38.653825,
    "lon": -121.126366,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811375",
    "slug": "dc260",
    "lat": 39.48972,
    "lon": -119.795622,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811385",
    "slug": "dc30615",
    "lat": 34.896575,
    "lon": -120.444896,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811407",
    "slug": "dc4070",
    "lat": 38.4996103,
    "lon": -122.9890892,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811409",
    "slug": "dc4033",
    "lat": 37.299769,
    "lon": -122.115738,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811412",
    "slug": "dc4064",
    "lat": 38.407219,
    "lon": -122.94643,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811413",
    "slug": "dc39749",
    "lat": 39.400372,
    "lon": -107.207925,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32811414",
    "slug": "dc39935",
    "lat": 37.961354,
    "lon": -122.054339,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811416",
    "slug": "dc4058",
    "lat": 38.8474668,
    "lon": -104.8645278,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811421",
    "slug": "dc5108",
    "lat": 30.0133,
    "lon": -98.10817,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811423",
    "slug": "dc5131",
    "lat": 35.5587454,
    "lon": -121.0801186,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811425",
    "slug": "dc5164",
    "lat": 35.645075,
    "lon": -120.688609,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811426",
    "slug": "dc5195",
    "lat": 35.59766,
    "lon": -120.564938,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811429",
    "slug": "tesladallas555slamarstdallastx75202omnidallas",
    "lat": 32.7751123,
    "lon": -96.8042019,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811432",
    "slug": "dc11508",
    "lat": 38.966973,
    "lon": -123.114044,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811435",
    "slug": "dc11343",
    "lat": 37.6499,
    "lon": -118.985167,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811436",
    "slug": "dc11350",
    "lat": 38.96084,
    "lon": -119.949216,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811437",
    "slug": "dc11346",
    "lat": 38.579553,
    "lon": -122.578636,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811438",
    "slug": "dc11482",
    "lat": 39.623703,
    "lon": -106.541101,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811439",
    "slug": "dc1149",
    "lat": 26.247609,
    "lon": -98.205917,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811440",
    "slug": "dc1153",
    "lat": 38.402469,
    "lon": -122.361104,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811534",
    "slug": "dc29034",
    "lat": 39.793039,
    "lon": -120.531491,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811537",
    "slug": "dc2867",
    "lat": 33.986065,
    "lon": -117.372628,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811551",
    "slug": "dc36933",
    "lat": 33.852474,
    "lon": -116.52098,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811558",
    "slug": "dc37019",
    "lat": 29.758401,
    "lon": -95.3642,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811562",
    "slug": "dc5016",
    "lat": 33.7603,
    "lon": -116.362218,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811564",
    "slug": "dc4987",
    "lat": 38.406448,
    "lon": -122.328279,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811565",
    "slug": "dc4986",
    "lat": 38.560196,
    "lon": -122.448882,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811566",
    "slug": "dc4959",
    "lat": 34.06329,
    "lon": -118.441191,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811567",
    "slug": "dc4953",
    "lat": 37.330348,
    "lon": -121.888385,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811570",
    "slug": "dc4931",
    "lat": 35.584158,
    "lon": -120.714971,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811586",
    "slug": "dc11932",
    "lat": 29.738161,
    "lon": -95.467246,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811587",
    "slug": "dc12473",
    "lat": 38.340537,
    "lon": -122.50572,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811593",
    "slug": "dc12164",
    "lat": 32.853915,
    "lon": -117.258396,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811594",
    "slug": "dc12098",
    "lat": 40.36083,
    "lon": -105.553686,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811596",
    "slug": "dc12052",
    "lat": 33.610142,
    "lon": -117.729803,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811597",
    "slug": "dc13196",
    "lat": 33.888289,
    "lon": -117.516795,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811605",
    "slug": "dc13204",
    "lat": 34.070333,
    "lon": -117.557221,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811635",
    "slug": "dc21790",
    "lat": 29.657367,
    "lon": -95.157818,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811638",
    "slug": "dc2127",
    "lat": 30.395197,
    "lon": -97.726426,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811662",
    "slug": "dc25162",
    "lat": 26.926011,
    "lon": -101.420193,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811668",
    "slug": "dc25146",
    "lat": 31.737611,
    "lon": -106.453343,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811687",
    "slug": "dc29613",
    "lat": 37.193039,
    "lon": -121.702313,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811690",
    "slug": "dc29291",
    "lat": 39.522924,
    "lon": -119.81402,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811692",
    "slug": "dc30195",
    "lat": 29.784211,
    "lon": -95.761397,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811694",
    "slug": "dc30520",
    "lat": 29.707875,
    "lon": -95.403851,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811695",
    "slug": "dc306",
    "lat": 37.839448,
    "lon": -120.229199,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811698",
    "slug": "dc29719",
    "lat": 36.5201253,
    "lon": -119.5653415,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811701",
    "slug": "dc32960",
    "lat": 37.609602,
    "lon": -122.401414,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811703",
    "slug": "dc33073",
    "lat": 37.407771,
    "lon": -122.120076,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811708",
    "slug": "dc32554",
    "lat": 40.803762,
    "lon": -124.160955,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811739",
    "slug": "dc12714",
    "lat": 35.574613,
    "lon": -120.689693,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811740",
    "slug": "dc12797",
    "lat": 35.55561,
    "lon": -120.748361,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811745",
    "slug": "dc12567",
    "lat": 39.423515,
    "lon": -119.739984,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811755",
    "slug": "dc15156",
    "lat": 36.732514,
    "lon": -119.78393,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811757",
    "slug": "dc15593",
    "lat": 33.742772,
    "lon": -116.412658,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811759",
    "slug": "dc15260",
    "lat": 37.296681,
    "lon": -121.853109,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811761",
    "slug": "dc15226",
    "lat": 34.283707,
    "lon": -118.781297,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811768",
    "slug": "dc15874",
    "lat": 34.014872,
    "lon": -118.491072,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811859",
    "slug": "dc32615",
    "lat": 37.663977,
    "lon": -121.874814,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811860",
    "slug": "dc32766",
    "lat": 32.903624,
    "lon": -96.563925,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811862",
    "slug": "dc32215",
    "lat": 37.83963,
    "lon": -122.292879,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811864",
    "slug": "dc322",
    "lat": 35.65105,
    "lon": -120.741489,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811866",
    "slug": "dc31662",
    "lat": 39.642952,
    "lon": -106.379133,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811868",
    "slug": "dc31999",
    "lat": 36.554085,
    "lon": -121.920933,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811889",
    "slug": "teslaaustin301brazosstwhitleyapartments",
    "lat": 30.26505,
    "lon": -97.74187,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32811901",
    "slug": "dc13098",
    "lat": 38.965646,
    "lon": -119.947856,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811912",
    "slug": "dc14806",
    "lat": 26.198734,
    "lon": -98.260723,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811913",
    "slug": "dc14865",
    "lat": 37.788097,
    "lon": -122.39918,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811917",
    "slug": "dc15163",
    "lat": 37.220969,
    "lon": -121.977106,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811932",
    "slug": "dc18880",
    "lat": 34.077106,
    "lon": -98.555634,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811933",
    "slug": "dc18843",
    "lat": 29.999578,
    "lon": -95.196049,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811937",
    "slug": "dc18849",
    "lat": 38.501427,
    "lon": -122.46489,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811940",
    "slug": "dc18521",
    "lat": 38.480967,
    "lon": -120.847971,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811948",
    "slug": "dc20526",
    "lat": 34.050184,
    "lon": -118.257063,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811949",
    "slug": "dc2046",
    "lat": 38.341938,
    "lon": -122.324832,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811951",
    "slug": "dc2029",
    "lat": 35.149106,
    "lon": -120.653272,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811952",
    "slug": "dc2045",
    "lat": 38.488989,
    "lon": -122.452143,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811953",
    "slug": "dc2025",
    "lat": 32.641745,
    "lon": -96.888506,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811954",
    "slug": "dc2030",
    "lat": 35.152539,
    "lon": -120.660449,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811956",
    "slug": "dc2073",
    "lat": 30.250541,
    "lon": -97.749422,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811996",
    "slug": "dc2826",
    "lat": 34.046049,
    "lon": -118.266185,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811997",
    "slug": "dc282",
    "lat": 39.641904,
    "lon": -106.373118,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811998",
    "slug": "dc279",
    "lat": 30.265397,
    "lon": -97.746566,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32811999",
    "slug": "dc28069",
    "lat": 38.522965,
    "lon": -122.879001,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812000",
    "slug": "dc2820",
    "lat": 33.901253,
    "lon": -118.371181,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812006",
    "slug": "dc28228",
    "lat": 32.844475,
    "lon": -117.275126,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812008",
    "slug": "dc2845",
    "lat": 38.142564,
    "lon": -120.495249,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812009",
    "slug": "dc2833",
    "lat": 34.007114,
    "lon": -118.491534,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812010",
    "slug": "dc28229",
    "lat": 39.30559,
    "lon": -123.799629,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812029",
    "slug": "dc38238",
    "lat": 32.717043,
    "lon": -117.171821,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812030",
    "slug": "dc3905",
    "lat": 35.6423898,
    "lon": -120.6876664,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812032",
    "slug": "dc386",
    "lat": 39.6433049,
    "lon": -106.3882985,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812035",
    "slug": "dc3965",
    "lat": 30.25196,
    "lon": -97.746725,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812036",
    "slug": "dc482",
    "lat": 33.801116,
    "lon": -116.540061,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812040",
    "slug": "11831",
    "lat": 37.657059,
    "lon": -122.3994003,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32812066",
    "slug": "dc14099",
    "lat": 30.410666,
    "lon": -97.849318,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812067",
    "slug": "dc14429",
    "lat": 34.642534,
    "lon": -120.453213,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812068",
    "slug": "dc14720",
    "lat": 37.792826,
    "lon": -122.397675,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812071",
    "slug": "dc1434",
    "lat": 38.688576,
    "lon": -122.946783,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812108",
    "slug": "dc19137",
    "lat": 38.744573,
    "lon": -120.718891,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812110",
    "slug": "dc19218",
    "lat": 33.832355,
    "lon": -116.545965,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812111",
    "slug": "dc19149",
    "lat": 38.604548,
    "lon": -122.886511,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812115",
    "slug": "dc191",
    "lat": 37.937018,
    "lon": -107.81787,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812117",
    "slug": "dc223",
    "lat": 39.746368,
    "lon": -104.998439,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812146",
    "slug": "dc24892",
    "lat": 35.754172,
    "lon": -96.664708,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812206",
    "slug": "dc11144",
    "lat": 32.870556,
    "lon": -117.225331,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812208",
    "slug": "dc11000",
    "lat": 38.465049,
    "lon": -120.04042,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812212",
    "slug": "dc1089",
    "lat": 35.110373,
    "lon": -106.5677521,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812213",
    "slug": "dc11047",
    "lat": 36.157123,
    "lon": -115.335113,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812251",
    "slug": "dc18151",
    "lat": 37.933296,
    "lon": -107.851414,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812252",
    "slug": "dc1828",
    "lat": 39.516978,
    "lon": -119.888626,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812255",
    "slug": "dc186",
    "lat": 33.482573,
    "lon": -117.714637,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812260",
    "slug": "dc1998",
    "lat": 35.573683,
    "lon": -121.112315,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812261",
    "slug": "dc1997",
    "lat": 35.576504,
    "lon": -121.113529,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812263",
    "slug": "dc20179",
    "lat": 32.779705,
    "lon": -116.99169,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812264",
    "slug": "dc19381",
    "lat": 29.302678,
    "lon": -94.809501,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812265",
    "slug": "dc19402",
    "lat": 34.41832,
    "lon": -119.671381,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812268",
    "slug": "dc19759",
    "lat": 33.703455,
    "lon": -116.293031,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812270",
    "slug": "dc2374",
    "lat": 34.470686,
    "lon": -114.348228,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32812275",
    "slug": "dc23952",
    "lat": 38.596348,
    "lon": -122.602268,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812278",
    "slug": "dc238",
    "lat": 34.446845,
    "lon": -119.623718,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812346",
    "slug": "dc468",
    "lat": 35.683768,
    "lon": -105.938017,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812364",
    "slug": "dc11535",
    "lat": 30.646748,
    "lon": -96.302227,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812365",
    "slug": "dc1158",
    "lat": 34.018311,
    "lon": -118.501067,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812366",
    "slug": "dc1188",
    "lat": 33.6511516,
    "lon": -117.990526,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812370",
    "slug": "dc11767",
    "lat": 33.18006,
    "lon": -97.111717,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812374",
    "slug": "dc11565",
    "lat": 37.786079,
    "lon": -122.4104325,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812376",
    "slug": "dc11581",
    "lat": 40.4066955,
    "lon": -120.6322662,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812378",
    "slug": "dc13207",
    "lat": 33.872319,
    "lon": -117.741279,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812379",
    "slug": "dc13242",
    "lat": 35.193396,
    "lon": -101.752268,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812380",
    "slug": "dc1322",
    "lat": 37.7924958,
    "lon": -122.4100354,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812382",
    "slug": "dc13306",
    "lat": 33.081451,
    "lon": -96.81778,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812384",
    "slug": "dc13473",
    "lat": 37.772713,
    "lon": -108.093936,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812385",
    "slug": "dc13420",
    "lat": 38.857167,
    "lon": -104.911329,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812386",
    "slug": "dc13397",
    "lat": 39.278015,
    "lon": -123.790152,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812413",
    "slug": "dc20704",
    "lat": 32.645761,
    "lon": -115.4690847,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812431",
    "slug": "dc2266",
    "lat": 32.88024,
    "lon": -96.768568,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812432",
    "slug": "dc23254",
    "lat": 39.462683,
    "lon": -123.806348,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812481",
    "slug": "dc357",
    "lat": 37.837856,
    "lon": -122.479836,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812486",
    "slug": "dc3461",
    "lat": 38.959887,
    "lon": -123.115359,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812487",
    "slug": "dc35396",
    "lat": 29.442684,
    "lon": -98.48113,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812488",
    "slug": "dc35452",
    "lat": 36.105689,
    "lon": -115.181968,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812490",
    "slug": "dc34913",
    "lat": 38.857872,
    "lon": -104.897045,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812491",
    "slug": "dc34305",
    "lat": 36.324517,
    "lon": -119.353754,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812493",
    "slug": "dc453",
    "lat": 33.9841057,
    "lon": -118.4507094,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812496",
    "slug": "dc4563",
    "lat": 37.213487,
    "lon": -108.071904,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812501",
    "slug": "dc4594",
    "lat": 35.449297,
    "lon": -120.905887,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812503",
    "slug": "dc43365",
    "lat": 32.730308,
    "lon": -117.172655,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812504",
    "slug": "dc43571",
    "lat": 33.066176,
    "lon": -96.885284,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32812597",
    "slug": "redbluffsupercharger",
    "lat": 40.182231,
    "lon": -122.2275,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812599",
    "slug": "11076",
    "lat": 29.768872,
    "lon": -96.047485,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812791",
    "slug": "traversupercharger",
    "lat": 36.448852,
    "lon": -119.486774,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812833",
    "slug": "idahospringscosupercharger",
    "lat": 39.74158,
    "lon": -105.518323,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812835",
    "slug": "SantaYsabelCAsupercharger",
    "lat": 33.109262,
    "lon": -116.674397,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812851",
    "slug": "3453",
    "lat": 34.614699,
    "lon": -120.188689,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812917",
    "slug": "15722",
    "lat": 38.854842,
    "lon": -120.013785,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812919",
    "slug": "DenverCOEastsupercharger",
    "lat": 39.71785,
    "lon": -104.9059,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812965",
    "slug": "lakewoodwcosupercharger",
    "lat": 39.733725,
    "lon": -105.154143,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812969",
    "slug": "13976",
    "lat": 37.126185,
    "lon": -120.247429,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32812975",
    "slug": "santanarowsjsupercharger",
    "lat": 37.321884,
    "lon": -121.949815,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32812981",
    "slug": "484052",
    "lat": 37.8610944,
    "lon": -122.4887878,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32812986",
    "slug": "4858",
    "lat": 38.040229,
    "lon": -122.788374,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32813003",
    "slug": "27157",
    "lat": 36.062251,
    "lon": -115.251721,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813015",
    "slug": "26825",
    "lat": 30.71166,
    "lon": -94.92037,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813017",
    "slug": "QuanahTXQ42022",
    "lat": 34.291734,
    "lon": -99.755223,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813035",
    "slug": "32846",
    "lat": 39.643908,
    "lon": -106.88829,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32813057",
    "slug": "35124",
    "lat": 39.804175,
    "lon": -104.770854,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813077",
    "slug": "32765",
    "lat": 30.390456,
    "lon": -97.733056,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813091",
    "slug": "NorthRichlandHillsTXQ322",
    "lat": 32.906768,
    "lon": -97.187274,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813127",
    "slug": "436107",
    "lat": 37.465045,
    "lon": -121.174538,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813131",
    "slug": "439888",
    "lat": 29.394108,
    "lon": -100.901589,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813151",
    "slug": "27050",
    "lat": 33.200156,
    "lon": -101.382598,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813171",
    "slug": "lubbocksupercharger",
    "lat": 33.520932,
    "lon": -101.961617,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813179",
    "slug": "27189",
    "lat": 35.48443,
    "lon": -94.224294,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813246",
    "slug": "34816",
    "lat": 33.930757,
    "lon": -118.327704,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813267",
    "slug": "31512",
    "lat": 35.067124,
    "lon": -118.176134,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813277",
    "slug": "28356",
    "lat": 40.590056,
    "lon": -122.37853,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813301",
    "slug": "27584",
    "lat": 36.128731,
    "lon": -115.14374,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813313",
    "slug": "401803",
    "lat": 36.171532,
    "lon": -115.207233,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813319",
    "slug": "404159",
    "lat": 36.030077,
    "lon": -115.135843,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813329",
    "slug": "402055",
    "lat": 40.153157,
    "lon": -105.106909,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32813331",
    "slug": "400323",
    "lat": 36.297366,
    "lon": -119.381773,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813341",
    "slug": "35401",
    "lat": 33.055957,
    "lon": -96.830796,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813355",
    "slug": "33906",
    "lat": 29.211775,
    "lon": -99.77725,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813358",
    "slug": "58329",
    "lat": 36.239055,
    "lon": -115.249802,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813381",
    "slug": "407954",
    "lat": 30.599847,
    "lon": -96.28905,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813389",
    "slug": "ShenandoahTX1Q42022",
    "lat": 30.188753,
    "lon": -95.452172,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813391",
    "slug": "58699",
    "lat": 39.548185,
    "lon": -105.005471,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32813393",
    "slug": "58803",
    "lat": 32.611534,
    "lon": -98.109965,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813399",
    "slug": "4007357",
    "lat": 38.92553,
    "lon": -121.054991,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813441",
    "slug": "32606",
    "lat": 29.464149,
    "lon": -98.289059,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813459",
    "slug": "58497",
    "lat": 37.019586,
    "lon": -121.564219,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813479",
    "slug": "33907",
    "lat": 28.811321,
    "lon": -97.85706,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813485",
    "slug": "4006752",
    "lat": 39.322725,
    "lon": -120.226024,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813505",
    "slug": "ParachuteCOQ322",
    "lat": 39.452514,
    "lon": -108.045897,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813565",
    "slug": "56606",
    "lat": 33.680746,
    "lon": -93.606763,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813579",
    "slug": "33792",
    "lat": 36.608033,
    "lon": -121.925096,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813583",
    "slug": "35521",
    "lat": 32.941272,
    "lon": -97.073712,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813625",
    "slug": "32561",
    "lat": 40.334105,
    "lon": -104.985129,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32813659",
    "slug": "4007105",
    "lat": 38.791097,
    "lon": -121.223494,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813673",
    "slug": "36231",
    "lat": 29.675562,
    "lon": -95.290672,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813708",
    "slug": "20601",
    "lat": 38.257516,
    "lon": -122.065443,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813744",
    "slug": "NewBostonTXQ42022",
    "lat": 33.469746,
    "lon": -94.454502,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813750",
    "slug": "20484",
    "lat": 32.979144,
    "lon": -96.296356,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32813778",
    "slug": "AustinTXSouthsupercharger",
    "lat": 30.162924,
    "lon": -97.792228,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813900",
    "slug": "MaderaCASupercharger",
    "lat": 36.851756,
    "lon": -119.952208,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813912",
    "slug": "gilroycacaminoarroyosupercharger",
    "lat": 37.001198,
    "lon": -121.553988,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32813922",
    "slug": "montrosecosupercharger",
    "lat": 38.481329,
    "lon": -107.876589,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32813946",
    "slug": "CopperopolisCAsupercharger",
    "lat": 37.97284,
    "lon": -120.65336,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814016",
    "slug": "BrownsvilleTXsupercharger",
    "lat": 25.950746,
    "lon": -97.487692,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814044",
    "slug": "brightoncosupercharger",
    "lat": 39.971975,
    "lon": -104.748579,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814070",
    "slug": "20928",
    "lat": 40.805973,
    "lon": -124.145858,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814072",
    "slug": "18583",
    "lat": 37.006781,
    "lon": -121.550715,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814076",
    "slug": "madisonvilletxsupercharger",
    "lat": 30.966103,
    "lon": -95.879513,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32814088",
    "slug": "CorpusChristiTXSupercharger",
    "lat": 27.710339,
    "lon": -97.368509,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814094",
    "slug": "19128",
    "lat": 41.994792,
    "lon": -117.717795,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814102",
    "slug": "19047",
    "lat": 31.68863,
    "lon": -106.264782,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814116",
    "slug": "AmarilloTXSupercharger",
    "lat": 35.193316,
    "lon": -101.744638,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814122",
    "slug": "26344",
    "lat": 36.14543,
    "lon": -115.327121,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814124",
    "slug": "20318",
    "lat": 34.825729,
    "lon": -114.594796,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814148",
    "slug": "llanotxsupercharger",
    "lat": 30.750518,
    "lon": -98.674887,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814154",
    "slug": "19179",
    "lat": 35.627747,
    "lon": -106.025841,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814160",
    "slug": "18332",
    "lat": 39.24572,
    "lon": -114.870653,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814162",
    "slug": "FernleyNVQ322",
    "lat": 39.609618,
    "lon": -119.220674,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814170",
    "slug": "NewBraunfelsTXSupercharger",
    "lat": 29.726988,
    "lon": -98.079645,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32814176",
    "slug": "BigSpringTXQ322",
    "lat": 32.258105,
    "lon": -101.453203,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814184",
    "slug": "18975",
    "lat": 35.171818,
    "lon": -106.586583,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814224",
    "slug": "YuccaValleyCASupercharger",
    "lat": 34.123734,
    "lon": -116.415685,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814232",
    "slug": "BeeCaveTXSupercharger",
    "lat": 30.303745,
    "lon": -97.941826,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814244",
    "slug": "DelValleTXSupercharger",
    "lat": 30.172435,
    "lon": -97.630898,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814248",
    "slug": "LamarCOSupercharger",
    "lat": 38.089382,
    "lon": -102.618311,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32814258",
    "slug": "19206",
    "lat": 31.137929,
    "lon": -97.328629,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32814272",
    "slug": "25857",
    "lat": 36.05664,
    "lon": -115.170459,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814338",
    "slug": "19219",
    "lat": 31.037366,
    "lon": -104.854841,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814344",
    "slug": "26343",
    "lat": 39.503387,
    "lon": -119.800739,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814427",
    "slug": "28670",
    "lat": 36.086723,
    "lon": -115.210726,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32814537",
    "slug": "CottonwoodCASupercharger",
    "lat": 40.389119,
    "lon": -122.288097,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32815072",
    "slug": "BastropTXSupercharger",
    "lat": 30.105946,
    "lon": -97.305485,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32815084",
    "slug": "CoalingaCAsupercharger",
    "lat": 36.253738,
    "lon": -120.24035,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32815487",
    "slug": "59093",
    "lat": 27.224785,
    "lon": -98.145197,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32815553",
    "slug": "dc19763",
    "lat": 38.396835,
    "lon": -120.755579,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815576",
    "slug": "dc1124",
    "lat": 37.8748518,
    "lon": -122.4576151,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815577",
    "slug": "dc11399",
    "lat": 33.6601961,
    "lon": -117.302192,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815582",
    "slug": "dc11633",
    "lat": 37.521383,
    "lon": -121.9909546,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815585",
    "slug": "dc1067",
    "lat": 40.513221,
    "lon": -121.81233,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815586",
    "slug": "dc11447",
    "lat": 32.807264,
    "lon": -117.21805,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815589",
    "slug": "dc10990",
    "lat": 30.04398,
    "lon": -95.431836,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815592",
    "slug": "dc13197",
    "lat": 33.878933,
    "lon": -117.60352,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815593",
    "slug": "dc13449",
    "lat": 38.417886,
    "lon": -122.323317,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815596",
    "slug": "dc13249",
    "lat": 37.438194,
    "lon": -122.322541,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815598",
    "slug": "dc13472",
    "lat": 38.521509,
    "lon": -120.818946,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815604",
    "slug": "dc1327",
    "lat": 33.90027,
    "lon": -118.388495,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815607",
    "slug": "dc13199",
    "lat": 34.003248,
    "lon": -117.829644,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815611",
    "slug": "dc1825",
    "lat": 33.982146,
    "lon": -118.459493,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815612",
    "slug": "dc183",
    "lat": 34.435065,
    "lon": -119.920236,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815653",
    "slug": "dc1200",
    "lat": 29.4606418,
    "lon": -98.6809713,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815657",
    "slug": "dc1202",
    "lat": 38.504217,
    "lon": -122.770179,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815658",
    "slug": "dc11624",
    "lat": 32.977989,
    "lon": -117.255156,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815660",
    "slug": "dc12050",
    "lat": 33.708309,
    "lon": -117.953806,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815662",
    "slug": "dc12284",
    "lat": 33.757146,
    "lon": -118.19861,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815664",
    "slug": "dc14035",
    "lat": 27.71813,
    "lon": -97.392836,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815665",
    "slug": "dc13895",
    "lat": 32.716655,
    "lon": -117.163677,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815666",
    "slug": "dc13806",
    "lat": 31.575288,
    "lon": -102.894648,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815672",
    "slug": "dc13543",
    "lat": 35.643897,
    "lon": -120.633493,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815693",
    "slug": "dc19760",
    "lat": 34.637418,
    "lon": -120.298425,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815707",
    "slug": "dc12725",
    "lat": 36.168972,
    "lon": -115.151857,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815708",
    "slug": "dc12658",
    "lat": 39.46583,
    "lon": -119.789914,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815715",
    "slug": "dc15886",
    "lat": 30.357106,
    "lon": -97.74863,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815784",
    "slug": "dc18158",
    "lat": 35.158014,
    "lon": -114.572081,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815785",
    "slug": "dc182",
    "lat": 35.165863,
    "lon": -120.69005,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815786",
    "slug": "dc17880",
    "lat": 39.466997,
    "lon": -121.515891,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815787",
    "slug": "dc17879",
    "lat": 38.652759,
    "lon": -122.925048,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815788",
    "slug": "dc1778",
    "lat": 35.6410124,
    "lon": -120.6872712,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815790",
    "slug": "dc1796",
    "lat": 40.57403,
    "lon": -122.358323,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815815",
    "slug": "dc12104",
    "lat": 38.746365,
    "lon": -105.178111,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815817",
    "slug": "dc12150",
    "lat": 36.020739,
    "lon": -115.090273,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815819",
    "slug": "dc12544",
    "lat": 36.127659,
    "lon": -115.150607,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815820",
    "slug": "dc12420",
    "lat": 30.105139,
    "lon": -95.429779,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815824",
    "slug": "dc12736",
    "lat": 35.157513,
    "lon": -120.536378,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815826",
    "slug": "dc12697",
    "lat": 32.915716,
    "lon": -96.896088,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815832",
    "slug": "dc15585",
    "lat": 39.958739,
    "lon": -104.99283,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815836",
    "slug": "dc15723",
    "lat": 39.489072,
    "lon": -119.721279,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815851",
    "slug": "dc20695",
    "lat": 32.5328777,
    "lon": -116.9462533,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815868",
    "slug": "dc1503",
    "lat": 38.312891,
    "lon": -122.482471,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815869",
    "slug": "dc14916",
    "lat": 38.308931,
    "lon": -122.246385,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815874",
    "slug": "dc14899",
    "lat": 38.732695,
    "lon": -122.624575,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815896",
    "slug": "dc21293",
    "lat": 34.095937,
    "lon": -118.371104,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815902",
    "slug": "dc211",
    "lat": 32.786413,
    "lon": -96.795473,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815903",
    "slug": "dc2126",
    "lat": 30.44599,
    "lon": -97.868845,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815905",
    "slug": "dc2145",
    "lat": 37.326493,
    "lon": -119.660074,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815909",
    "slug": "dc20597",
    "lat": 38.716197,
    "lon": -122.893565,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815917",
    "slug": "dc2251",
    "lat": 33.735562,
    "lon": -117.030779,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815925",
    "slug": "dc23504",
    "lat": 40.713669,
    "lon": -122.803812,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815954",
    "slug": "dc33245",
    "lat": 33.953317,
    "lon": -117.555626,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815955",
    "slug": "dc35597",
    "lat": 33.02097,
    "lon": -117.082304,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815956",
    "slug": "dc3447",
    "lat": 33.739751,
    "lon": -116.407298,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815957",
    "slug": "dc34880",
    "lat": 35.51663,
    "lon": -120.493938,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815964",
    "slug": "dc3454",
    "lat": 39.966312,
    "lon": -105.784233,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815965",
    "slug": "dc33777",
    "lat": 35.66093,
    "lon": -105.983492,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815966",
    "slug": "dc3440",
    "lat": 32.960062,
    "lon": -117.265986,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815967",
    "slug": "dc537223",
    "lat": 36.74757,
    "lon": -121.391234,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815968",
    "slug": "dc5018",
    "lat": 39.529751,
    "lon": -119.814875,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815970",
    "slug": "dc4994",
    "lat": 31.0863846,
    "lon": -97.7145113,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815972",
    "slug": "dc49628",
    "lat": 38.5009763,
    "lon": -122.4971795,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32815987",
    "slug": "51724",
    "lat": 32.515913,
    "lon": -93.738925,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816015",
    "slug": "426109",
    "lat": 33.9198416,
    "lon": -118.3901117,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816037",
    "slug": "dc28293",
    "lat": 34.007904,
    "lon": -118.490424,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816038",
    "slug": "dc28341",
    "lat": 34.135763,
    "lon": -118.352967,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816040",
    "slug": "dc28067",
    "lat": 33.799343,
    "lon": -116.417506,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816042",
    "slug": "dc2827",
    "lat": 34.046119,
    "lon": -118.266227,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816045",
    "slug": "dc28010",
    "lat": 38.643902,
    "lon": -121.268204,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816047",
    "slug": "dc2758",
    "lat": 37.854975,
    "lon": -121.2193169,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816051",
    "slug": "dc4076",
    "lat": 31.3959245,
    "lon": -103.5053541,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816072",
    "slug": "52309",
    "lat": 29.783684,
    "lon": -95.650532,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816076",
    "slug": "dc6380",
    "lat": 32.938489,
    "lon": -117.197766,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816077",
    "slug": "dc784",
    "lat": 32.8838084,
    "lon": -117.2449668,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816083",
    "slug": "dc625",
    "lat": 39.240101,
    "lon": -119.94198,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816110",
    "slug": "dc565",
    "lat": 36.2289982,
    "lon": -121.764704,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816186",
    "slug": "dc38901",
    "lat": 28.663588,
    "lon": -106.128347,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816197",
    "slug": "dc36382",
    "lat": 33.240214,
    "lon": -97.050542,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816204",
    "slug": "dc5961",
    "lat": 32.39623,
    "lon": -99.764642,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816208",
    "slug": "dc9519",
    "lat": 30.479799,
    "lon": -97.686671,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816209",
    "slug": "dc5943",
    "lat": 30.398309,
    "lon": -97.719381,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816214",
    "slug": "dc6065",
    "lat": 39.220443,
    "lon": -121.062682,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816229",
    "slug": "dc229",
    "lat": 38.490004,
    "lon": -122.883477,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816263",
    "slug": "dc31727",
    "lat": 38.606658,
    "lon": -122.861649,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816272",
    "slug": "dc315",
    "lat": 38.444093,
    "lon": -122.409261,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816278",
    "slug": "dc31787",
    "lat": 38.473609,
    "lon": -122.402659,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816283",
    "slug": "dc4750",
    "lat": 32.43976,
    "lon": -97.788643,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816289",
    "slug": "dc48677",
    "lat": 35.575524,
    "lon": -120.69023,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816290",
    "slug": "dc4892",
    "lat": 40.566111,
    "lon": -105.082853,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816291",
    "slug": "dc469",
    "lat": 35.799723,
    "lon": -105.921923,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816304",
    "slug": "51415",
    "lat": 30.188007,
    "lon": -97.663024,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816315",
    "slug": "dc786",
    "lat": 39.1844849,
    "lon": -106.81437,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816340",
    "slug": "dc26819",
    "lat": 29.417235,
    "lon": -98.489771,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816345",
    "slug": "dc30277",
    "lat": 29.71204,
    "lon": -95.220038,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816346",
    "slug": "dc30445",
    "lat": 30.477825,
    "lon": -97.680383,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816356",
    "slug": "dc29859",
    "lat": 32.322979,
    "lon": -96.206841,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816358",
    "slug": "dc29597",
    "lat": 37.134293,
    "lon": -121.631501,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816365",
    "slug": "dc38645",
    "lat": 38.344114,
    "lon": -122.326251,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816369",
    "slug": "dc392",
    "lat": 26.189078,
    "lon": -98.205367,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816373",
    "slug": "dc3963",
    "lat": 28.31911,
    "lon": -98.113639,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816375",
    "slug": "dc3980",
    "lat": 38.659382,
    "lon": -122.885417,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816384",
    "slug": "dc42549",
    "lat": 26.082599,
    "lon": -97.161387,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816398",
    "slug": "dc740",
    "lat": 33.097038,
    "lon": -117.283761,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816422",
    "slug": "dc2371",
    "lat": 33.120928,
    "lon": -117.216082,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816425",
    "slug": "dc2418",
    "lat": 38.174307,
    "lon": -122.451274,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816432",
    "slug": "dc25382",
    "lat": 33.660694,
    "lon": -116.244489,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816441",
    "slug": "dc24529",
    "lat": 38.486594,
    "lon": -122.401241,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816475",
    "slug": "dc5152",
    "lat": 39.277094,
    "lon": -123.791563,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816479",
    "slug": "dc5194",
    "lat": 29.9758381,
    "lon": -98.0922896,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816481",
    "slug": "51133",
    "lat": 35.15364,
    "lon": -120.605196,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816486",
    "slug": "51128",
    "lat": 33.804967,
    "lon": -116.539399,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816488",
    "slug": "51186",
    "lat": 38.693812,
    "lon": -122.832135,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816491",
    "slug": "51193",
    "lat": 38.661395,
    "lon": -122.799884,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32816507",
    "slug": "firebaughsupercharger",
    "lat": 36.639138,
    "lon": -120.625664,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816549",
    "slug": "32743",
    "lat": 32.046863,
    "lon": -97.093739,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32816560",
    "slug": "445602",
    "lat": 29.752975,
    "lon": -95.360996,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32816562",
    "slug": "4007302",
    "lat": 33.8346678,
    "lon": -118.3546617,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32816578",
    "slug": "484111",
    "lat": 30.2030098,
    "lon": -97.7735976,
    "locationType": [
      "destination_charger_nontesla"
    ]
  },
  {
    "uuid": "32816603",
    "slug": "26988",
    "lat": 29.503681,
    "lon": -98.699296,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816624",
    "slug": "WeavervilleCASupercharger",
    "lat": 40.720585,
    "lon": -122.928115,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816642",
    "slug": "32656",
    "lat": 39.817776,
    "lon": -104.773311,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816646",
    "slug": "19046",
    "lat": 31.751405,
    "lon": -106.344631,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816657",
    "slug": "18987",
    "lat": 29.774603,
    "lon": -95.400434,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816693",
    "slug": "401813",
    "lat": 38.547771,
    "lon": -121.759168,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816725",
    "slug": "VanBurenARsupercharger",
    "lat": 35.458462,
    "lon": -94.356157,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816744",
    "slug": "27430",
    "lat": 40.578926,
    "lon": -122.359301,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816768",
    "slug": "413725",
    "lat": 33.182003,
    "lon": -117.342624,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816774",
    "slug": "PuebloCOSupercharger",
    "lat": 38.267192,
    "lon": -104.60956,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816778",
    "slug": "438410",
    "lat": 33.010487,
    "lon": -96.970148,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816793",
    "slug": "58349",
    "lat": 39.506501,
    "lon": -106.141408,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32816799",
    "slug": "16986",
    "lat": 38.102452,
    "lon": -122.570357,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816812",
    "slug": "401806",
    "lat": 33.999023,
    "lon": -117.843844,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816818",
    "slug": "EastvaleCAsupercharger",
    "lat": 33.975917,
    "lon": -117.55681,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816820",
    "slug": "16173",
    "lat": 33.852745,
    "lon": -117.790223,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816822",
    "slug": "31522",
    "lat": 34.076981,
    "lon": -117.574311,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816824",
    "slug": "25976",
    "lat": 34.19356,
    "lon": -118.510582,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816832",
    "slug": "26322",
    "lat": 34.087063,
    "lon": -118.151196,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816834",
    "slug": "35728",
    "lat": 37.521139,
    "lon": -121.996779,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816836",
    "slug": "35956",
    "lat": 37.676506,
    "lon": -121.895506,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816840",
    "slug": "31347",
    "lat": 38.745282,
    "lon": -121.274031,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32816856",
    "slug": "400704",
    "lat": 33.944904,
    "lon": -118.334384,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816871",
    "slug": "BrentwoodCAsupercharger",
    "lat": 37.946852,
    "lon": -121.739575,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816873",
    "slug": "6304",
    "lat": 38.32176,
    "lon": -122.307404,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816877",
    "slug": "27776",
    "lat": 33.832712,
    "lon": -118.258614,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816881",
    "slug": "19880",
    "lat": 33.199406,
    "lon": -117.376549,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816883",
    "slug": "30860",
    "lat": 33.640331,
    "lon": -117.175255,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816885",
    "slug": "MartinezCAsupercharger",
    "lat": 37.993109,
    "lon": -122.121292,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816893",
    "slug": "27525",
    "lat": 37.399858,
    "lon": -122.114979,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816895",
    "slug": "26153",
    "lat": 33.129498,
    "lon": -117.087582,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816899",
    "slug": "35664",
    "lat": 34.012541,
    "lon": -117.460648,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816901",
    "slug": "18381",
    "lat": 33.678406,
    "lon": -116.296264,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816907",
    "slug": "lincolncagrovelandlanesupercharger",
    "lat": 38.869531,
    "lon": -121.303077,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816913",
    "slug": "20759",
    "lat": 37.930172,
    "lon": -122.014648,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816917",
    "slug": "58252",
    "lat": 38.617907,
    "lon": -121.538955,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816975",
    "slug": "UnionCityCAsupercharger",
    "lat": 37.587134,
    "lon": -122.020383,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816981",
    "slug": "18293",
    "lat": 33.859773,
    "lon": -117.921701,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816989",
    "slug": "20325",
    "lat": 37.460161,
    "lon": -122.13862,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816991",
    "slug": "26359",
    "lat": 37.543809,
    "lon": -122.285824,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32816999",
    "slug": "30599",
    "lat": 32.83264,
    "lon": -117.128417,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817001",
    "slug": "32071",
    "lat": 33.529421,
    "lon": -117.153208,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817003",
    "slug": "cupertinocastevenscreekblvdsupercharger",
    "lat": 37.324846,
    "lon": -122.036899,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817011",
    "slug": "27558",
    "lat": 37.313088,
    "lon": -121.808543,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817013",
    "slug": "26144",
    "lat": 34.237927,
    "lon": -118.589399,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817015",
    "slug": "35515",
    "lat": 37.663666,
    "lon": -122.39709,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817017",
    "slug": "402406",
    "lat": 37.361463,
    "lon": -120.613128,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817055",
    "slug": "16221",
    "lat": 34.1495357,
    "lon": -118.2478196,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817076",
    "slug": "26046",
    "lat": 34.277348,
    "lon": -119.283328,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817091",
    "slug": "RanchoCucamongaCAsupercharger",
    "lat": 34.106565,
    "lon": -117.526889,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817093",
    "slug": "TurlockCAsupercharger",
    "lat": 37.508836,
    "lon": -120.876125,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817095",
    "slug": "SanMarcosCAsupercharger",
    "lat": 33.13654,
    "lon": -117.17598,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817097",
    "slug": "17697",
    "lat": 34.068955,
    "lon": -117.556285,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817099",
    "slug": "LakeElsinoreCAQ322",
    "lat": 33.659408,
    "lon": -117.294472,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817101",
    "slug": "31055",
    "lat": 37.918074,
    "lon": -122.038352,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817108",
    "slug": "19778",
    "lat": 33.6902,
    "lon": -117.914729,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817110",
    "slug": "35889",
    "lat": 34.216885,
    "lon": -119.066362,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817116",
    "slug": "SantaMariaCAsupercharger",
    "lat": 34.952882,
    "lon": -120.434709,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817118",
    "slug": "14373",
    "lat": 37.971185,
    "lon": -122.517439,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817120",
    "slug": "SanBrunoCAsupercharger2",
    "lat": 37.618978,
    "lon": -122.440604,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817122",
    "slug": "longbeachsupercharger",
    "lat": 33.757541,
    "lon": -118.107489,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817126",
    "slug": "16817",
    "lat": 37.625891,
    "lon": -122.425601,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817128",
    "slug": "26075",
    "lat": 38.6564,
    "lon": -121.070813,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817132",
    "slug": "16754",
    "lat": 33.981381,
    "lon": -118.441476,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817134",
    "slug": "SandCityCAsupercharger",
    "lat": 36.622019,
    "lon": -121.844115,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817136",
    "slug": "14529",
    "lat": 37.389846,
    "lon": -122.095707,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817140",
    "slug": "ElkGroveCASupercharger2",
    "lat": 38.40999,
    "lon": -121.41807,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817142",
    "slug": "18845",
    "lat": 34.60224,
    "lon": -118.145984,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817148",
    "slug": "36205",
    "lat": 37.662151,
    "lon": -121.856814,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817150",
    "slug": "59132",
    "lat": 32.814089,
    "lon": -115.567876,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817158",
    "slug": "LaMesaCAsupercharger",
    "lat": 32.780967,
    "lon": -117.013486,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817162",
    "slug": "RedlandsCAsupercharger",
    "lat": 34.059498,
    "lon": -117.185118,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817164",
    "slug": "4009033",
    "lat": 37.419607,
    "lon": -121.915274,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817179",
    "slug": "goletacasupercharger",
    "lat": 34.42883,
    "lon": -119.873377,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817187",
    "slug": "vistasupercharger",
    "lat": 33.201028,
    "lon": -117.245665,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817191",
    "slug": "15737",
    "lat": 32.83317,
    "lon": -117.144773,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817193",
    "slug": "400110",
    "lat": 37.851622,
    "lon": -122.034087,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817197",
    "slug": "fresnocalifornia5001supercharger",
    "lat": 36.832109,
    "lon": -119.908459,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817201",
    "slug": "BurbankCASupercharger2",
    "lat": 34.18744,
    "lon": -118.318222,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817205",
    "slug": "chulavistacaliforniasupercharger",
    "lat": 32.649247,
    "lon": -116.967661,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817207",
    "slug": "34630",
    "lat": 36.813191,
    "lon": -119.735757,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817211",
    "slug": "34570",
    "lat": 34.192431,
    "lon": -117.362147,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817213",
    "slug": "stocktonsupercharger",
    "lat": 37.984978,
    "lon": -121.335981,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817221",
    "slug": "18948",
    "lat": 32.963303,
    "lon": -117.189419,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817223",
    "slug": "15162",
    "lat": 34.02462,
    "lon": -118.485497,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817225",
    "slug": "20828",
    "lat": 33.566137,
    "lon": -117.212572,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817230",
    "slug": "19084",
    "lat": 30.131572,
    "lon": -95.237261,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817240",
    "slug": "dc1136",
    "lat": 36.374129,
    "lon": -94.207805,
    "locationType": [
      "destination_charger",
      "self_serve_demo_drive"
    ]
  },
  {
    "uuid": "32817244",
    "slug": "58408",
    "lat": 36.0480279,
    "lon": -117.946613,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817273",
    "slug": "dc5203",
    "lat": 39.523305,
    "lon": -119.780968,
    "locationType": [
      "destination_charger"
    ]
  },
  {
    "uuid": "32817404",
    "slug": "412876",
    "lat": 32.864932,
    "lon": -97.313969,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817476",
    "slug": "27261",
    "lat": 33.663015,
    "lon": -114.240099,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817502",
    "slug": "26990",
    "lat": 31.797326,
    "lon": -106.267374,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817522",
    "slug": "PlacervilleCAsupercharger",
    "lat": 38.709807,
    "lon": -120.84233,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32817533",
    "slug": "32724",
    "lat": 31.395378,
    "lon": -97.207255,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817590",
    "slug": "437210",
    "lat": 30.642656,
    "lon": -96.350278,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817625",
    "slug": "MelissaTXQ322",
    "lat": 33.270588,
    "lon": -96.592931,
    "locationType": [
      "party"
    ]
  },
  {
    "uuid": "32817629",
    "slug": "400769",
    "lat": 36.608236,
    "lon": -121.846814,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817656",
    "slug": "31039",
    "lat": 38.494549,
    "lon": -121.097318,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817677",
    "slug": "35727",
    "lat": 37.333166,
    "lon": -119.656247,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817687",
    "slug": "33905",
    "lat": 32.391702,
    "lon": -104.220485,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817809",
    "slug": "35129",
    "lat": 32.878469,
    "lon": -117.169191,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817836",
    "slug": "56489",
    "lat": 29.984459,
    "lon": -95.299597,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32817842",
    "slug": "58505",
    "lat": 34.816549,
    "lon": -118.884346,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818260",
    "slug": "lonepinecasupercharger",
    "lat": 36.600714,
    "lon": -118.062481,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818390",
    "slug": "4001213",
    "lat": 37.765271,
    "lon": -121.958392,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818392",
    "slug": "401861",
    "lat": 37.506852,
    "lon": -120.88097,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818396",
    "slug": "28541",
    "lat": 33.716545,
    "lon": -117.810134,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818400",
    "slug": "34340",
    "lat": 33.990148,
    "lon": -118.216345,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818408",
    "slug": "ArroyoGrandeCAsupercharger",
    "lat": 35.127089,
    "lon": -120.595719,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818444",
    "slug": "simivalleycasupercharger",
    "lat": 34.272099,
    "lon": -118.797326,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818450",
    "slug": "32741",
    "lat": 37.269325,
    "lon": -121.906165,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818452",
    "slug": "20407",
    "lat": 37.483201,
    "lon": -121.939589,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818456",
    "slug": "28696",
    "lat": 33.691356,
    "lon": -117.769899,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818458",
    "slug": "19476",
    "lat": 32.6289,
    "lon": -117.041321,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818462",
    "slug": "17606",
    "lat": 37.554448,
    "lon": -122.29316,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818466",
    "slug": "anaheimeastkatellasupercharger",
    "lat": 33.805142,
    "lon": -117.882205,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818472",
    "slug": "20129",
    "lat": 32.78151,
    "lon": -117.127781,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818476",
    "slug": "mantecacaspreckelsavenuesupercharger",
    "lat": 37.795967,
    "lon": -121.197728,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818482",
    "slug": "29080",
    "lat": 38.792431,
    "lon": -121.298158,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818484",
    "slug": "santarosacasupercharger",
    "lat": 38.459503,
    "lon": -122.730131,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818488",
    "slug": "16169",
    "lat": 32.776427,
    "lon": -117.143863,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818490",
    "slug": "19801",
    "lat": 33.618301,
    "lon": -117.733651,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818529",
    "slug": "35474",
    "lat": 37.475252,
    "lon": -122.215659,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818537",
    "slug": "45386",
    "lat": 32.871517,
    "lon": -96.995036,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818616",
    "slug": "fremontcapacificcommonsblvdsupercharger",
    "lat": 37.502215,
    "lon": -121.967447,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818620",
    "slug": "19035",
    "lat": 32.672276,
    "lon": -96.968816,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818645",
    "slug": "20978",
    "lat": 34.145858,
    "lon": -118.078364,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818677",
    "slug": "29236",
    "lat": 34.014266,
    "lon": -118.238271,
    "locationType": [
      "nacs"
    ]
  },
  {
    "uuid": "32818690",
    "slug": "28487",
    "lat": 34.07064,
    "lon": -117.211614,
    "locationType": [
      "nacs"
    ]
  }
];

  const results = {};
  let successCount = 0;
  let errorCount = 0;

  // Helper function to sleep
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Helper to determine programType for each station
  function getProgramType(locationType) {
    if (!locationType) return 'supercharger';
    const isDestination = locationType.some(t => t.includes('destination_charger'));
    return isDestination ? 'charger' : 'supercharger';
  }

  // Fetch with retry logic
  async function fetchStationDetails(station, retries = 3) {
    const programType = getProgramType(station.locationType);
    const url = `${API_BASE}?${API_PARAMS}&programType=${programType}&locationSlug=${station.slug}`;

    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          return { success: true, data };
        } else if (response.status === 429) {
          // Rate limited, wait longer
          console.warn(`  ⚠️ Rate limited, waiting ${Math.pow(2, attempt + 1)}s...`);
          await sleep(Math.pow(2, attempt + 1) * 1000);
        } else {
          console.warn(`  ⚠️ HTTP ${response.status} for ${station.slug}`);
          if (attempt === retries - 1) {
            return { success: false, error: `HTTP ${response.status}` };
          }
        }
      } catch (error) {
        console.warn(`  ⚠️ Network error: ${error.message}`);
        if (attempt === retries - 1) {
          return { success: false, error: error.message };
        }
        await sleep(Math.pow(2, attempt) * 1000);
      }
    }
  }

  // Main fetch loop
  console.log('\nStarting fetch...\n');
  const startTime = Date.now();

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];
    const progress = `[${i + 1}/${stations.length}]`;

    console.log(`${progress} Fetching: ${station.slug}`);

    const result = await fetchStationDetails(station);

    if (result.success) {
      results[station.uuid] = result;
      successCount++;
    } else {
      console.error(`  ❌ Failed: ${result.error}`);
      errorCount++;
      // Still save the error info
      results[station.uuid] = {
        success: false,
        error: result.error,
        station: station
      };
    }

    // Show checkpoint every 50 stations
    if ((i + 1) % 50 === 0) {
      const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
      console.log(`\n📊 Checkpoint: ${i + 1}/${stations.length} - ${elapsed}m elapsed`);
      console.log(`   Success: ${successCount} | Errors: ${errorCount}\n`);
    }

    // Delay before next request
    await sleep(DELAY_MS);
  }

  // Final summary
  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log('\n' + '═'.repeat(60));
  console.log('✅ FETCH COMPLETE');
  console.log('═'.repeat(60));
  console.log(`Total time: ${totalTime} minutes`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Total: ${stations.length}\n`);

  // Save to variable for copying
  window.stationDetails = results;

  console.log('📋 Data saved to window.stationDetails');
  console.log('\nTo save the data:');
  console.log('1. Run: copy(JSON.stringify(window.stationDetails))');
  console.log('2. Paste into: backend/data/raw-details-fetched.json');
  console.log('3. Run: node scraping/3-merge-details.js\n');

})();
