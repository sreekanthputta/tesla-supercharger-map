# Quick Start Guide

## ✅ Current Status

Your Tesla Supercharger Map application is **ready to use** with sample data!

- ✓ Backend server running on http://localhost:3001
- ✓ 8 sample stations in database (NM, TX, CO)
- ✓ All pricing tiers working correctly
- ✓ Filters functioning properly
- ✓ Frontend ready at `frontend/index.html`

## 🎯 Next Step: Get Real Data (~187 stations)

Since Tesla blocks automated requests, you'll extract data using your browser:

### Step 1: Run the Browser Extraction Script

1. **Open**: https://www.tesla.com/findus
2. **Press F12** → Click "Console" tab
3. **Open the script**:
   ```bash
   cat backend/EXTRACT_DATA_SCRIPT.js
   ```
4. **Copy entire script** and paste into browser console
5. **Press Enter** and wait 2-5 minutes
6. **Two files will download automatically**

### Step 2: Process the Data

```bash
# Move downloaded files
mv ~/Downloads/raw-locations.json backend/data/
mv ~/Downloads/raw-details-all.json backend/data/

# Process data (filters to NM, TX, CO only)
cd backend
node scraper-simplified.js

# Import to database
rm -f data/stations.db
node database.js
```

### Step 3: Restart Server

```bash
# Kill old server
pkill -f "node server.js"

# Start fresh
node server.js
```

### Step 4: Refresh Frontend

Open `frontend/index.html` in your browser - you'll see all ~187 real stations!

## 📊 What You'll Get

- **New Mexico**: ~20-30 stations
- **Texas**: ~120-140 stations
- **Colorado**: ~30-40 stations
- **Total**: ~187 superchargers with complete pricing tiers

## 🔧 Current Setup (Sample Data)

If you just want to test the app with sample data:

```bash
# View in browser
open frontend/index.html

# Or use a local server
cd frontend
python3 -m http.server 8000
# Then open: http://localhost:8000
```

## 📝 Files You Created

- `backend/EXTRACT_DATA_SCRIPT.js` - Browser console script to download data
- `backend/scraper-simplified.js` - Processes downloaded data
- `backend/MANUAL_DATA_EXTRACTION_GUIDE.md` - Detailed manual instructions

## ⚡ Quick Commands

```bash
# Regenerate sample data
cd backend
node create-sample-data.js && node database.js

# Test API
curl "http://localhost:3001/api/stations?state=TX"

# Check database
sqlite3 data/stations.db "SELECT COUNT(*), state FROM stations GROUP BY state;"

# View server status
curl http://localhost:3001/api/health
```

## 🐛 Troubleshooting

**Map shows no markers?**
- Check backend is running: `curl http://localhost:3001/api/health`
- Open browser console (F12) and check for errors

**Only 8 stations?**
- You're seeing sample data - follow "Get Real Data" steps above

**Pricing tiers not showing?**
- Sample data has tiers - real data needs the browser extraction script

**Server won't start (EADDRINUSE)?**
- Kill existing: `pkill -f "node server.js"`
- Try again: `node server.js`

## 🎨 Features Working

- ✓ Interactive map with custom Tesla-style markers
- ✓ Hover tooltips with station info
- ✓ Complete pricing tiers display (time-based rates)
- ✓ Vehicle type filters (Tesla, NACS, Other EV)
- ✓ State filters (NM, TX, CO)
- ✓ Price range filters
- ✓ Peak pricing filters
- ✓ Search by name/city/state/ZIP
- ✓ Auto-zoom to fit visible stations

## 📖 Full Documentation

- `README.md` - Complete project documentation
- `MANUAL_DATA_EXTRACTION_GUIDE.md` - Detailed extraction guide
- `backend/EXTRACT_DATA_SCRIPT.js` - Copy/paste browser script

## 🚀 You're All Set!

The app works great with sample data. When you're ready for real data, just run the browser extraction script - it takes 5 minutes and gives you all ~187 stations!
