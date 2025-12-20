/**
 * Fetch pricing details for stations that are missing them
 * Run this in browser console at https://www.tesla.com/findus
 */

(async function fetchMissingDetails() {
  const missingStations = [
    { name: "Colorado Springs, CO", slug: "416259", id: "32794059" },
    { name: "Burleson, TX", slug: "32367", id: "32794077" },
    { name: "Lubbock, TX", slug: "402621", id: "32794245" },
    { name: "Tyler, TX", slug: "27055", id: "32794507" },
    { name: "Houston, TX", slug: "26635", id: "32795595" },
    { name: "Weimar, TX", slug: "437163", id: "32798001" },
    { name: "Ozona, TX", slug: "19144", id: "32803595" },
    { name: "Baytown, TX", slug: "19083", id: "32803625" },
    { name: "Refugio, TX", slug: "409113", id: "32805314" },
    { name: "Grand Junction, CO", slug: "431902", id: "32805530" },
    { name: "Pueblo, CO", slug: "12745", id: "32809869" },
    { name: "Pflugerville, TX", slug: "19021", id: "32815451" },
    { name: "Houston, TX", slug: "451489", id: "32849481" },
    { name: "Silverthorne, CO", slug: "30786", id: "32854449" },
    { name: "Houston, TX", slug: "457119", id: "32857785" },
    { name: "Frisco, TX", slug: "457015", id: "32857841" },
    { name: "Frisco, TX", slug: "30738", id: "32858037" },
    { name: "Pueblo West, CO", slug: "435801", id: "32859057" },
    { name: "Houston, TX", slug: "456984", id: "32859083" },
    { name: "Arlington, TX", slug: "456930", id: "32859105" },
    { name: "Groom, TX", slug: "467401", id: "32927733" }
  ];

  console.log('🔄 Fetching details for', missingStations.length, 'missing stations...\\n');

  const newDetails = {};
  let successCount = 0;
  let errorCount = 0;

  for (const station of missingStations) {
    try {
      const url = `https://www.tesla.com/api/findus/get-charger-details?locationSlug=${station.slug}&programType=supercharger&locale=en-US&isInHkMoTw=false`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        newDetails[station.id] = data;
        successCount++;
        console.log(`✓ ${station.name} (${successCount}/${missingStations.length})`);
      } else {
        console.warn(`⚠️  Failed: ${station.name} (HTTP ${response.status})`);
        errorCount++;
      }

      // Wait between requests
      await new Promise(resolve => setTimeout(resolve, 400));
    } catch (error) {
      console.error(`❌ Error: ${station.name}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\\n✓ Completed! Success: ${successCount}, Failed: ${errorCount}\\n`);

  // Send to server
  try {
    const response = await fetch('http://localhost:3002/upload-missing-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDetails)
    });

    if (response.ok) {
      console.log('✅ Uploaded missing details to server!');
      console.log('\\n📝 Next: Run "node merge-details.js" in terminal');
    } else {
      // Fallback: download file
      console.log('⚠️  Server not available, downloading file...');
      const blob = new Blob([JSON.stringify(newDetails, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'missing-details.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      console.log('✓ Downloaded: missing-details.json');
      console.log('\\nMove it to backend/data/ and run: node merge-details.js');
    }
  } catch (error) {
    console.log('⚠️  Could not connect to server, downloading instead...');
    const blob = new Blob([JSON.stringify(newDetails, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'missing-details.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('✓ Downloaded: missing-details.json');
  }
})();
