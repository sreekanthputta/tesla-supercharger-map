
/**
 * TESLA SUPERCHARGER DETAIL FETCHER
 * Generated: 2025-12-21T01:16:08.699Z
 *
 * Copy and paste this entire script into browser console at:
 * https://www.tesla.com/findus
 *
 * This will fetch details for 223 stations.
 * Estimated time: ~2 minutes
 */

(async function() {
  console.clear();
  console.log('═'.repeat(60));
  console.log('🚀 Tesla Supercharger Detail Fetcher');
  console.log('═'.repeat(60));
  console.log('Total stations to fetch: 223');
  console.log('Estimated time: ~2 minutes\n');

  const API_BASE = 'https://www.tesla.com/api/findus/get-charger-details';
  const API_PARAMS = new URLSearchParams({"programType":"supercharger","locale":"en-US","isInHkMoTw":false});
  const DELAY_MS = 500;

  const stations = [
  {
    "uuid": "32790069",
    "slug": "457017",
    "lat": 33.037701,
    "lon": -96.707066
  },
  {
    "uuid": "32790204",
    "slug": "58767",
    "lat": 30.210521,
    "lon": -97.666623
  },
  {
    "uuid": "32792793",
    "slug": "centennialcosupercharger",
    "lat": 39.567251,
    "lon": -104.877918
  },
  {
    "uuid": "32792795",
    "slug": "conifercosupercharger",
    "lat": 39.544076,
    "lon": -105.289933
  },
  {
    "uuid": "32792886",
    "slug": "VillaAhumadaChihuahuasupercharger",
    "lat": 30.623561,
    "lon": -106.514457
  },
  {
    "uuid": "32792890",
    "slug": "chihuahuasupercharger",
    "lat": 28.630123,
    "lon": -106.12058
  },
  {
    "uuid": "32792962",
    "slug": "KyleTXSupercharger",
    "lat": 30.012812,
    "lon": -97.862652
  },
  {
    "uuid": "32792988",
    "slug": "thortoncosupercharger",
    "lat": 39.914831,
    "lon": -104.986678
  },
  {
    "uuid": "32793034",
    "slug": "AllenTXQ322",
    "lat": 33.129626,
    "lon": -96.674108
  },
  {
    "uuid": "32793046",
    "slug": "superiorcosouthmarshallroadsupercharging",
    "lat": 39.954889,
    "lon": -105.164575
  },
  {
    "uuid": "32793050",
    "slug": "CraigCOsupercharger",
    "lat": 40.514098,
    "lon": -107.539133
  },
  {
    "uuid": "32793071",
    "slug": "SilverthorneCOsupercharger",
    "lat": 39.645915,
    "lon": -106.080116
  },
  {
    "uuid": "32793111",
    "slug": "lowellarsupercharger",
    "lat": 36.255358,
    "lon": -94.152633
  },
  {
    "uuid": "32793113",
    "slug": "EdwardsCOSupercharger",
    "lat": 39.648563,
    "lon": -106.587126
  },
  {
    "uuid": "32793185",
    "slug": "westlakehillstxsupercharger",
    "lat": 30.2898,
    "lon": -97.827474
  },
  {
    "uuid": "32793187",
    "slug": "WhartonTXSupercharger",
    "lat": 29.325153,
    "lon": -96.124313
  },
  {
    "uuid": "32793205",
    "slug": "hustontxhempsteadroadsupercharger",
    "lat": 29.91308,
    "lon": -95.615888
  },
  {
    "uuid": "32793213",
    "slug": "18084",
    "lat": 30.502829,
    "lon": -97.580934
  },
  {
    "uuid": "32793219",
    "slug": "AlbuquerqueNMSupercharger2",
    "lat": 35.1043,
    "lon": -106.565943
  },
  {
    "uuid": "32793233",
    "slug": "AustinTXSupercharger10",
    "lat": 30.226205,
    "lon": -97.82193
  },
  {
    "uuid": "32793249",
    "slug": "SanAntonioTXAlamoHeightssupercharger",
    "lat": 29.610496,
    "lon": -98.488674
  },
  {
    "uuid": "32793261",
    "slug": "AustinTXCentralsupercharger",
    "lat": 30.247179,
    "lon": -97.750003
  },
  {
    "uuid": "32793273",
    "slug": "SoccoroNMsupercharger",
    "lat": 34.071722,
    "lon": -106.892959
  },
  {
    "uuid": "32793289",
    "slug": "BaytownTXSupercharger",
    "lat": 29.801474,
    "lon": -94.998058
  },
  {
    "uuid": "32793299",
    "slug": "20472",
    "lat": 29.4289,
    "lon": -95.0644
  },
  {
    "uuid": "32793303",
    "slug": "19044",
    "lat": 31.429766,
    "lon": -100.512491
  },
  {
    "uuid": "32793313",
    "slug": "19146",
    "lat": 33.672459,
    "lon": -95.52005
  },
  {
    "uuid": "32793357",
    "slug": "20309",
    "lat": 29.650997,
    "lon": -97.595652
  },
  {
    "uuid": "32793361",
    "slug": "19232",
    "lat": 32.340654,
    "lon": -108.713904
  },
  {
    "uuid": "32793387",
    "slug": "20485",
    "lat": 33.178594,
    "lon": -97.101533
  },
  {
    "uuid": "32793391",
    "slug": "25854",
    "lat": 29.49712,
    "lon": -98.482133
  },
  {
    "uuid": "32793671",
    "slug": "MountainVillageCOsupercharger",
    "lat": 37.933397,
    "lon": -107.854592
  },
  {
    "uuid": "32793956",
    "slug": "58765",
    "lat": 32.151799,
    "lon": -94.787308
  },
  {
    "uuid": "32793975",
    "slug": "32648",
    "lat": 31.886436,
    "lon": -106.580786
  },
  {
    "uuid": "32794059",
    "slug": "416259",
    "lat": 38.871035,
    "lon": -104.822445
  },
  {
    "uuid": "32794061",
    "slug": "58900",
    "lat": 35.191789,
    "lon": -101.722212
  },
  {
    "uuid": "32794077",
    "slug": "32367",
    "lat": 32.578964,
    "lon": -97.317692
  },
  {
    "uuid": "32794105",
    "slug": "412627",
    "lat": 35.880089,
    "lon": -97.395593
  },
  {
    "uuid": "32794123",
    "slug": "nashtx",
    "lat": 33.452316,
    "lon": -94.131086
  },
  {
    "uuid": "32794153",
    "slug": "26970",
    "lat": 29.99713,
    "lon": -95.57552
  },
  {
    "uuid": "32794177",
    "slug": "35400",
    "lat": 33.102506,
    "lon": -96.808687
  },
  {
    "uuid": "32794183",
    "slug": "58751",
    "lat": 36.103781,
    "lon": -95.912091
  },
  {
    "uuid": "32794195",
    "slug": "29612",
    "lat": 39.748228,
    "lon": -105.057764
  },
  {
    "uuid": "32794221",
    "slug": "26823",
    "lat": 32.783342,
    "lon": -97.273693
  },
  {
    "uuid": "32794223",
    "slug": "26969",
    "lat": 29.580957,
    "lon": -95.391909
  },
  {
    "uuid": "32794245",
    "slug": "402621",
    "lat": 33.52775,
    "lon": -101.871049
  },
  {
    "uuid": "32794257",
    "slug": "33908",
    "lat": 32.406277,
    "lon": -99.766841
  },
  {
    "uuid": "32794259",
    "slug": "brownsvilletxbocachicablvd",
    "lat": 25.943927,
    "lon": -97.429526
  },
  {
    "uuid": "32794395",
    "slug": "CollegeStationTXQ42022",
    "lat": 30.612959,
    "lon": -96.317135
  },
  {
    "uuid": "32794407",
    "slug": "26828",
    "lat": 35.264578,
    "lon": -101.830734
  },
  {
    "uuid": "32794411",
    "slug": "32766",
    "lat": 30.214927,
    "lon": -97.742312
  },
  {
    "uuid": "32794475",
    "slug": "403607",
    "lat": 29.185201,
    "lon": -98.844916
  },
  {
    "uuid": "32794495",
    "slug": "31117",
    "lat": 38.965713,
    "lon": -104.785245
  },
  {
    "uuid": "32794507",
    "slug": "27055",
    "lat": 32.440581,
    "lon": -95.137062
  },
  {
    "uuid": "32794549",
    "slug": "402203",
    "lat": 40.617725,
    "lon": -103.181034
  },
  {
    "uuid": "32794563",
    "slug": "58726",
    "lat": 33.134345,
    "lon": -96.055096
  },
  {
    "uuid": "32794565",
    "slug": "59081",
    "lat": 38.763963,
    "lon": -102.790932
  },
  {
    "uuid": "32794567",
    "slug": "403157",
    "lat": 30.200095,
    "lon": -97.767168
  },
  {
    "uuid": "32794571",
    "slug": "408203",
    "lat": 30.376938,
    "lon": -96.068166
  },
  {
    "uuid": "32794597",
    "slug": "27129",
    "lat": 31.706223,
    "lon": -98.122215
  },
  {
    "uuid": "32794617",
    "slug": "26974",
    "lat": 28.445995,
    "lon": -99.243522
  },
  {
    "uuid": "32794932",
    "slug": "19099",
    "lat": 31.0728,
    "lon": -97.661556
  },
  {
    "uuid": "32795595",
    "slug": "26635",
    "lat": 29.778898,
    "lon": -95.559446
  },
  {
    "uuid": "32795906",
    "slug": "WallerTXSupercharger",
    "lat": 30.070749,
    "lon": -95.930802
  },
  {
    "uuid": "32797073",
    "slug": "58746",
    "lat": 32.727658,
    "lon": -97.364482
  },
  {
    "uuid": "32797141",
    "slug": "58717",
    "lat": 32.763049,
    "lon": -97.166805
  },
  {
    "uuid": "32797220",
    "slug": "32612",
    "lat": 29.432158,
    "lon": -98.482699
  },
  {
    "uuid": "32797318",
    "slug": "McKinneyTX2Q42022",
    "lat": 33.151846,
    "lon": -96.717142
  },
  {
    "uuid": "32797945",
    "slug": "403408",
    "lat": 39.797522,
    "lon": -105.07872
  },
  {
    "uuid": "32798001",
    "slug": "437163",
    "lat": 29.692891,
    "lon": -96.777389
  },
  {
    "uuid": "32798026",
    "slug": "GrapevineTXsupercharger",
    "lat": 32.941969,
    "lon": -97.065631
  },
  {
    "uuid": "32798028",
    "slug": "32654",
    "lat": 30.140394,
    "lon": -96.399349
  },
  {
    "uuid": "32798683",
    "slug": "418116",
    "lat": 37.271964,
    "lon": -107.883424
  },
  {
    "uuid": "32798757",
    "slug": "401980",
    "lat": 37.349684,
    "lon": -108.566253
  },
  {
    "uuid": "32799932",
    "slug": "27134",
    "lat": 36.068138,
    "lon": -95.780551
  },
  {
    "uuid": "32803173",
    "slug": "DallasTXsupercharger",
    "lat": 32.867744,
    "lon": -96.767178
  },
  {
    "uuid": "32803179",
    "slug": "kremmlingcoparkavenuesupercharger",
    "lat": 40.059633,
    "lon": -106.387909
  },
  {
    "uuid": "32803297",
    "slug": "houstonsupercharger",
    "lat": 29.735994,
    "lon": -95.538444
  },
  {
    "uuid": "32803305",
    "slug": "ClaytonNMsupercharger",
    "lat": 36.449453,
    "lon": -103.181919
  },
  {
    "uuid": "32803313",
    "slug": "clarksvillesupercharger",
    "lat": 35.523754,
    "lon": -93.863571
  },
  {
    "uuid": "32803323",
    "slug": "WestminsterCOsupercharger",
    "lat": 39.832098,
    "lon": -105.023935
  },
  {
    "uuid": "32803483",
    "slug": "RedOakTXSupercharger",
    "lat": 32.516874,
    "lon": -96.821522
  },
  {
    "uuid": "32803487",
    "slug": "abbotttxsupercharger",
    "lat": 31.898879,
    "lon": -97.090962
  },
  {
    "uuid": "32803509",
    "slug": "EnnisTXQ322",
    "lat": 32.322578,
    "lon": -96.605087
  },
  {
    "uuid": "32803519",
    "slug": "19218",
    "lat": 36.054286,
    "lon": -96.004607
  },
  {
    "uuid": "32803525",
    "slug": "centervilletxsupercharger",
    "lat": 31.259686,
    "lon": -95.985294
  },
  {
    "uuid": "32803533",
    "slug": "johnsoncitytxus281supercharger",
    "lat": 30.269924,
    "lon": -98.398071
  },
  {
    "uuid": "32803547",
    "slug": "19117",
    "lat": 29.612994,
    "lon": -98.601275
  },
  {
    "uuid": "32803561",
    "slug": "19222",
    "lat": 34.161543,
    "lon": -99.297446
  },
  {
    "uuid": "32803565",
    "slug": "KatyTXQ322",
    "lat": 29.779068,
    "lon": -95.848861
  },
  {
    "uuid": "32803577",
    "slug": "19226",
    "lat": 26.159998,
    "lon": -97.877651
  },
  {
    "uuid": "32803581",
    "slug": "18976",
    "lat": 30.356828,
    "lon": -103.653122
  },
  {
    "uuid": "32803585",
    "slug": "19339",
    "lat": 32.557695,
    "lon": -93.707353
  },
  {
    "uuid": "32803591",
    "slug": "19073",
    "lat": 35.183029,
    "lon": -107.898154
  },
  {
    "uuid": "32803593",
    "slug": "18997",
    "lat": 40.031523,
    "lon": -105.257355
  },
  {
    "uuid": "32803595",
    "slug": "19144",
    "lat": 30.706458,
    "lon": -101.202558
  },
  {
    "uuid": "32803599",
    "slug": "CedarParkTXSupercharger",
    "lat": 30.525714,
    "lon": -97.819321
  },
  {
    "uuid": "32803625",
    "slug": "19083",
    "lat": 29.758579,
    "lon": -94.929995
  },
  {
    "uuid": "32803637",
    "slug": "HarlingenTXSupercharger",
    "lat": 26.187903,
    "lon": -97.756415
  },
  {
    "uuid": "32803645",
    "slug": "19064",
    "lat": 32.663597,
    "lon": -97.331564
  },
  {
    "uuid": "32803667",
    "slug": "20483",
    "lat": 33.023187,
    "lon": -97.279119
  },
  {
    "uuid": "32803693",
    "slug": "18980",
    "lat": 32.670218,
    "lon": -97.113481
  },
  {
    "uuid": "32803753",
    "slug": "HoustonTX1Q42022",
    "lat": 29.740627,
    "lon": -95.645796
  },
  {
    "uuid": "32803771",
    "slug": "32767",
    "lat": 30.403726,
    "lon": -97.673309
  },
  {
    "uuid": "32803785",
    "slug": "32616",
    "lat": 32.770984,
    "lon": -96.87335
  },
  {
    "uuid": "32803807",
    "slug": "27100",
    "lat": 33.634777,
    "lon": -97.154815
  },
  {
    "uuid": "32803831",
    "slug": "McKinneyTX1Q42022",
    "lat": 33.217467,
    "lon": -96.657195
  },
  {
    "uuid": "32803845",
    "slug": "AddisonTXQ322",
    "lat": 32.950181,
    "lon": -96.81855
  },
  {
    "uuid": "32803849",
    "slug": "27102",
    "lat": 34.188748,
    "lon": -101.749154
  },
  {
    "uuid": "32803869",
    "slug": "32776",
    "lat": 39.522778,
    "lon": -107.774449
  },
  {
    "uuid": "32803879",
    "slug": "32760",
    "lat": 30.814366,
    "lon": -97.610371
  },
  {
    "uuid": "32803915",
    "slug": "30884",
    "lat": 32.296645,
    "lon": -106.812591
  },
  {
    "uuid": "32804414",
    "slug": "4003014",
    "lat": 36.880188,
    "lon": -104.439329
  },
  {
    "uuid": "32804421",
    "slug": "407909",
    "lat": 39.709912,
    "lon": -105.075442
  },
  {
    "uuid": "32804423",
    "slug": "DenverCOQ322",
    "lat": 39.778313,
    "lon": -104.848533
  },
  {
    "uuid": "32804513",
    "slug": "DenisonTXsupercharger",
    "lat": 33.79303,
    "lon": -96.555043
  },
  {
    "uuid": "32805302",
    "slug": "ShenandoahTX2Q42022",
    "lat": 30.194963,
    "lon": -95.452475
  },
  {
    "uuid": "32805314",
    "slug": "409113",
    "lat": 28.307219,
    "lon": -97.275193
  },
  {
    "uuid": "32805318",
    "slug": "35665",
    "lat": 29.734352,
    "lon": -95.605588
  },
  {
    "uuid": "32805330",
    "slug": "400716",
    "lat": 39.618542,
    "lon": -105.092465
  },
  {
    "uuid": "32805530",
    "slug": "431902",
    "lat": 39.091349,
    "lon": -108.552632
  },
  {
    "uuid": "32805542",
    "slug": "58769",
    "lat": 29.712493,
    "lon": -95.314552
  },
  {
    "uuid": "32805546",
    "slug": "58720",
    "lat": 32.636205,
    "lon": -97.062084
  },
  {
    "uuid": "32805570",
    "slug": "33917",
    "lat": 32.215727,
    "lon": -95.824895
  },
  {
    "uuid": "32805574",
    "slug": "58811",
    "lat": 30.533729,
    "lon": -97.784482
  },
  {
    "uuid": "32805608",
    "slug": "34556",
    "lat": 30.05031,
    "lon": -95.438297
  },
  {
    "uuid": "32805612",
    "slug": "425553",
    "lat": 39.592059,
    "lon": -104.87839
  },
  {
    "uuid": "32805614",
    "slug": "400788",
    "lat": 32.130351,
    "lon": -94.333
  },
  {
    "uuid": "32805642",
    "slug": "58896",
    "lat": 35.622516,
    "lon": -97.478602
  },
  {
    "uuid": "32805660",
    "slug": "58749",
    "lat": 27.793269,
    "lon": -97.651247
  },
  {
    "uuid": "32805676",
    "slug": "401970",
    "lat": 39.889404,
    "lon": -104.990375
  },
  {
    "uuid": "32805678",
    "slug": "58714",
    "lat": 28.111057,
    "lon": -97.818435
  },
  {
    "uuid": "32805686",
    "slug": "45384",
    "lat": 32.92554,
    "lon": -96.991721
  },
  {
    "uuid": "32805694",
    "slug": "404915",
    "lat": 39.66665,
    "lon": -104.862573
  },
  {
    "uuid": "32805769",
    "slug": "58303",
    "lat": 29.740071,
    "lon": -95.411915
  },
  {
    "uuid": "32805819",
    "slug": "ClydeTXQ322",
    "lat": 32.417478,
    "lon": -99.526559
  },
  {
    "uuid": "32805870",
    "slug": "32090",
    "lat": 32.880789,
    "lon": -97.074506
  },
  {
    "uuid": "32805893",
    "slug": "32614",
    "lat": 28.995815,
    "lon": -98.432241
  },
  {
    "uuid": "32805963",
    "slug": "BeaumontTXQ322",
    "lat": 30.038821,
    "lon": -94.160454
  },
  {
    "uuid": "32806013",
    "slug": "19078",
    "lat": 35.440565,
    "lon": -95.970074
  },
  {
    "uuid": "32806906",
    "slug": "MonumentCOsupercharger",
    "lat": 39.092311,
    "lon": -104.852583
  },
  {
    "uuid": "32806918",
    "slug": "DallasTXCentralQ322",
    "lat": 32.767263,
    "lon": -96.807834
  },
  {
    "uuid": "32807034",
    "slug": "30883",
    "lat": 37.467355,
    "lon": -105.868565
  },
  {
    "uuid": "32807048",
    "slug": "32629",
    "lat": 32.428679,
    "lon": -96.874374
  },
  {
    "uuid": "32807588",
    "slug": "4003236",
    "lat": 29.766719,
    "lon": -95.366075
  },
  {
    "uuid": "32807603",
    "slug": "20482",
    "lat": 32.717361,
    "lon": -96.323141
  },
  {
    "uuid": "32807611",
    "slug": "19055",
    "lat": 31.725357,
    "lon": -96.177634
  },
  {
    "uuid": "32807942",
    "slug": "58895",
    "lat": 35.508774,
    "lon": -97.501428
  },
  {
    "uuid": "32808042",
    "slug": "6854",
    "lat": 35.610604,
    "lon": -97.578048
  },
  {
    "uuid": "32808069",
    "slug": "19060",
    "lat": 39.591149,
    "lon": -106.096934
  },
  {
    "uuid": "32808388",
    "slug": "27147",
    "lat": 32.900424,
    "lon": -105.956248
  },
  {
    "uuid": "32809541",
    "slug": "19056",
    "lat": 36.767938,
    "lon": -108.148363
  },
  {
    "uuid": "32809548",
    "slug": "26628",
    "lat": 39.40804,
    "lon": -104.863051
  },
  {
    "uuid": "32809923",
    "slug": "407108",
    "lat": 29.722869,
    "lon": -95.442955
  },
  {
    "uuid": "32812599",
    "slug": "11076",
    "lat": 29.768872,
    "lon": -96.047485
  },
  {
    "uuid": "32812833",
    "slug": "idahospringscosupercharger",
    "lat": 39.74158,
    "lon": -105.518323
  },
  {
    "uuid": "32812919",
    "slug": "DenverCOEastsupercharger",
    "lat": 39.71785,
    "lon": -104.9059
  },
  {
    "uuid": "32812965",
    "slug": "lakewoodwcosupercharger",
    "lat": 39.733725,
    "lon": -105.154143
  },
  {
    "uuid": "32813015",
    "slug": "26825",
    "lat": 30.71166,
    "lon": -94.92037
  },
  {
    "uuid": "32813017",
    "slug": "QuanahTXQ42022",
    "lat": 34.291734,
    "lon": -99.755223
  },
  {
    "uuid": "32813035",
    "slug": "32846",
    "lat": 39.643908,
    "lon": -106.88829
  },
  {
    "uuid": "32813057",
    "slug": "35124",
    "lat": 39.804175,
    "lon": -104.770854
  },
  {
    "uuid": "32813077",
    "slug": "32765",
    "lat": 30.390456,
    "lon": -97.733056
  },
  {
    "uuid": "32813091",
    "slug": "NorthRichlandHillsTXQ322",
    "lat": 32.906768,
    "lon": -97.187274
  },
  {
    "uuid": "32813131",
    "slug": "439888",
    "lat": 29.394108,
    "lon": -100.901589
  },
  {
    "uuid": "32813151",
    "slug": "27050",
    "lat": 33.200156,
    "lon": -101.382598
  },
  {
    "uuid": "32813171",
    "slug": "lubbocksupercharger",
    "lat": 33.520932,
    "lon": -101.961617
  },
  {
    "uuid": "32813179",
    "slug": "27189",
    "lat": 35.48443,
    "lon": -94.224294
  },
  {
    "uuid": "32813329",
    "slug": "402055",
    "lat": 40.153157,
    "lon": -105.106909
  },
  {
    "uuid": "32813341",
    "slug": "35401",
    "lat": 33.055957,
    "lon": -96.830796
  },
  {
    "uuid": "32813355",
    "slug": "33906",
    "lat": 29.211775,
    "lon": -99.77725
  },
  {
    "uuid": "32813381",
    "slug": "407954",
    "lat": 30.599847,
    "lon": -96.28905
  },
  {
    "uuid": "32813389",
    "slug": "ShenandoahTX1Q42022",
    "lat": 30.188753,
    "lon": -95.452172
  },
  {
    "uuid": "32813391",
    "slug": "58699",
    "lat": 39.548185,
    "lon": -105.005471
  },
  {
    "uuid": "32813393",
    "slug": "58803",
    "lat": 32.611534,
    "lon": -98.109965
  },
  {
    "uuid": "32813441",
    "slug": "32606",
    "lat": 29.464149,
    "lon": -98.289059
  },
  {
    "uuid": "32813479",
    "slug": "33907",
    "lat": 28.811321,
    "lon": -97.85706
  },
  {
    "uuid": "32813505",
    "slug": "ParachuteCOQ322",
    "lat": 39.452514,
    "lon": -108.045897
  },
  {
    "uuid": "32813565",
    "slug": "56606",
    "lat": 33.680746,
    "lon": -93.606763
  },
  {
    "uuid": "32813583",
    "slug": "35521",
    "lat": 32.941272,
    "lon": -97.073712
  },
  {
    "uuid": "32813625",
    "slug": "32561",
    "lat": 40.334105,
    "lon": -104.985129
  },
  {
    "uuid": "32813673",
    "slug": "36231",
    "lat": 29.675562,
    "lon": -95.290672
  },
  {
    "uuid": "32813744",
    "slug": "NewBostonTXQ42022",
    "lat": 33.469746,
    "lon": -94.454502
  },
  {
    "uuid": "32813750",
    "slug": "20484",
    "lat": 32.979144,
    "lon": -96.296356
  },
  {
    "uuid": "32813778",
    "slug": "AustinTXSouthsupercharger",
    "lat": 30.162924,
    "lon": -97.792228
  },
  {
    "uuid": "32813922",
    "slug": "montrosecosupercharger",
    "lat": 38.481329,
    "lon": -107.876589
  },
  {
    "uuid": "32814016",
    "slug": "BrownsvilleTXsupercharger",
    "lat": 25.950746,
    "lon": -97.487692
  },
  {
    "uuid": "32814044",
    "slug": "brightoncosupercharger",
    "lat": 39.971975,
    "lon": -104.748579
  },
  {
    "uuid": "32814076",
    "slug": "madisonvilletxsupercharger",
    "lat": 30.966103,
    "lon": -95.879513
  },
  {
    "uuid": "32814088",
    "slug": "CorpusChristiTXSupercharger",
    "lat": 27.710339,
    "lon": -97.368509
  },
  {
    "uuid": "32814102",
    "slug": "19047",
    "lat": 31.68863,
    "lon": -106.264782
  },
  {
    "uuid": "32814116",
    "slug": "AmarilloTXSupercharger",
    "lat": 35.193316,
    "lon": -101.744638
  },
  {
    "uuid": "32814148",
    "slug": "llanotxsupercharger",
    "lat": 30.750518,
    "lon": -98.674887
  },
  {
    "uuid": "32814154",
    "slug": "19179",
    "lat": 35.627747,
    "lon": -106.025841
  },
  {
    "uuid": "32814170",
    "slug": "NewBraunfelsTXSupercharger",
    "lat": 29.726988,
    "lon": -98.079645
  },
  {
    "uuid": "32814176",
    "slug": "BigSpringTXQ322",
    "lat": 32.258105,
    "lon": -101.453203
  },
  {
    "uuid": "32814184",
    "slug": "18975",
    "lat": 35.171818,
    "lon": -106.586583
  },
  {
    "uuid": "32814232",
    "slug": "BeeCaveTXSupercharger",
    "lat": 30.303745,
    "lon": -97.941826
  },
  {
    "uuid": "32814244",
    "slug": "DelValleTXSupercharger",
    "lat": 30.172435,
    "lon": -97.630898
  },
  {
    "uuid": "32814248",
    "slug": "LamarCOSupercharger",
    "lat": 38.089382,
    "lon": -102.618311
  },
  {
    "uuid": "32814258",
    "slug": "19206",
    "lat": 31.137929,
    "lon": -97.328629
  },
  {
    "uuid": "32814338",
    "slug": "19219",
    "lat": 31.037366,
    "lon": -104.854841
  },
  {
    "uuid": "32815072",
    "slug": "BastropTXSupercharger",
    "lat": 30.105946,
    "lon": -97.305485
  },
  {
    "uuid": "32815487",
    "slug": "59093",
    "lat": 27.224785,
    "lon": -98.145197
  },
  {
    "uuid": "32816549",
    "slug": "32743",
    "lat": 32.046863,
    "lon": -97.093739
  },
  {
    "uuid": "32816603",
    "slug": "26988",
    "lat": 29.503681,
    "lon": -98.699296
  },
  {
    "uuid": "32816642",
    "slug": "32656",
    "lat": 39.817776,
    "lon": -104.773311
  },
  {
    "uuid": "32816646",
    "slug": "19046",
    "lat": 31.751405,
    "lon": -106.344631
  },
  {
    "uuid": "32816657",
    "slug": "18987",
    "lat": 29.774603,
    "lon": -95.400434
  },
  {
    "uuid": "32816725",
    "slug": "VanBurenARsupercharger",
    "lat": 35.458462,
    "lon": -94.356157
  },
  {
    "uuid": "32816774",
    "slug": "PuebloCOSupercharger",
    "lat": 38.267192,
    "lon": -104.60956
  },
  {
    "uuid": "32816778",
    "slug": "438410",
    "lat": 33.010487,
    "lon": -96.970148
  },
  {
    "uuid": "32816793",
    "slug": "58349",
    "lat": 39.506501,
    "lon": -106.141408
  },
  {
    "uuid": "32817230",
    "slug": "19084",
    "lat": 30.131572,
    "lon": -95.237261
  },
  {
    "uuid": "32817404",
    "slug": "412876",
    "lat": 32.864932,
    "lon": -97.313969
  },
  {
    "uuid": "32817502",
    "slug": "26990",
    "lat": 31.797326,
    "lon": -106.267374
  },
  {
    "uuid": "32817533",
    "slug": "32724",
    "lat": 31.395378,
    "lon": -97.207255
  },
  {
    "uuid": "32817590",
    "slug": "437210",
    "lat": 30.642656,
    "lon": -96.350278
  },
  {
    "uuid": "32817625",
    "slug": "MelissaTXQ322",
    "lat": 33.270588,
    "lon": -96.592931
  },
  {
    "uuid": "32817687",
    "slug": "33905",
    "lat": 32.391702,
    "lon": -104.220485
  },
  {
    "uuid": "32817836",
    "slug": "56489",
    "lat": 29.984459,
    "lon": -95.299597
  },
  {
    "uuid": "32818537",
    "slug": "45386",
    "lat": 32.871517,
    "lon": -96.995036
  },
  {
    "uuid": "32818620",
    "slug": "19035",
    "lat": 32.672276,
    "lon": -96.968816
  }
];

  const results = {};
  let successCount = 0;
  let errorCount = 0;

  // Helper function to sleep
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Fetch with retry logic
  async function fetchStationDetails(station, retries = 3) {
    const url = `${API_BASE}?${API_PARAMS}&locationSlug=${station.slug}`;

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
