import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Endpoint to receive data from browser
app.post('/upload-locations', (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ error: 'Expected an array of locations' });
    }

    fs.writeFileSync('./data/raw-locations.json', JSON.stringify(data, null, 2));
    console.log(`✓ Received and saved ${data.length} locations`);

    res.json({ success: true, count: data.length });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/upload-details', (req, res) => {
  try {
    const data = req.body;

    if (typeof data !== 'object') {
      return res.status(400).json({ error: 'Expected an object with station details' });
    }

    fs.writeFileSync('./data/raw-details-all.json', JSON.stringify(data, null, 2));
    console.log(`✓ Received and saved details for ${Object.keys(data).length} stations`);

    res.json({ success: true, count: Object.keys(data).length });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/upload-missing-details', (req, res) => {
  try {
    const newDetails = req.body;

    // Load existing details
    let allDetails = {};
    if (fs.existsSync('./data/raw-details-all.json')) {
      allDetails = JSON.parse(fs.readFileSync('./data/raw-details-all.json'));
    }

    // Merge new details
    Object.assign(allDetails, newDetails);

    // Save merged details
    fs.writeFileSync('./data/raw-details-all.json', JSON.stringify(allDetails, null, 2));
    console.log(`✓ Merged ${Object.keys(newDetails).length} new station details`);
    console.log(`✓ Total details: ${Object.keys(allDetails).length} stations`);

    res.json({ success: true, count: Object.keys(newDetails).length });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/status', (req, res) => {
  const hasLocations = fs.existsSync('./data/raw-locations.json');
  const hasDetails = fs.existsSync('./data/raw-details-all.json');

  res.json({
    ready: hasLocations && hasDetails,
    hasLocations,
    hasDetails
  });
});

app.listen(PORT, () => {
  console.log(`\n📡 Upload server running on http://localhost:${PORT}`);
  console.log(`\nWaiting for data from browser script...\n`);
});
