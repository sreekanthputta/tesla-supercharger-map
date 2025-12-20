/**
 * Fetch the second Lubbock station details
 * UUID: 32813171, Slug: lubbocksupercharger
 * Run this in browser console at https://www.tesla.com/findus
 */

(async function fetchSecondLubbock() {
  console.log('🔄 Fetching second Lubbock station details...\n');

  const station = {
    name: "Lubbock, TX (Tesla Center)",
    slug: "lubbocksupercharger",
    uuid: "32813171"
  };

  try {
    const url = `https://www.tesla.com/api/findus/get-charger-details?locationSlug=${station.slug}&programType=supercharger&locale=en-US&isInHkMoTw=false`;
    console.log('Fetching:', url);

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log('✓ Successfully fetched details!\n');
      console.log('Station name:', data.data?.data?.name);
      console.log('Address:', data.data?.data?.address?.street);
      console.log('Stalls:', data.data?.data?.publicStallCount);
      console.log('\nData to save:');

      const newDetails = {};
      newDetails[station.uuid] = data;

      // Try to upload to server
      try {
        const uploadResponse = await fetch('http://localhost:3002/upload-missing-details', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newDetails)
        });

        if (uploadResponse.ok) {
          console.log('✅ Uploaded to server!');
          console.log('\n📝 Next: Run "node merge-missing-details.js" in terminal');
        } else {
          throw new Error('Server not available');
        }
      } catch (error) {
        // Fallback: download file
        console.log('⚠️  Server not available, downloading file...');
        const blob = new Blob([JSON.stringify(newDetails, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'second-lubbock-details.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        console.log('✓ Downloaded: second-lubbock-details.json');
        console.log('\nMove it to backend/data/ and merge manually');
      }
    } else {
      console.error(`❌ Failed: HTTP ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
})();
