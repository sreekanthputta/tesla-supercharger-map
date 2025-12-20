#!/bin/bash

echo "========================================="
echo "Tesla Supercharger Map - Setup Script"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo ""

# Setup backend
echo "📦 Installing backend dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

echo ""
echo "🔄 Scraping Tesla Supercharger data..."
npm run scrape

if [ $? -ne 0 ]; then
    echo "❌ Failed to scrape data"
    exit 1
fi

echo ""
echo "💾 Setting up database..."
node database.js

if [ $? -ne 0 ]; then
    echo "❌ Failed to setup database"
    exit 1
fi

cd ..

# Setup frontend
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

cd ..

echo ""
echo "========================================="
echo "✅ Setup Complete!"
echo "========================================="
echo ""
echo "To start the application:"
echo ""
echo "1. Start backend (in one terminal):"
echo "   cd backend && npm start"
echo ""
echo "2. Start frontend (in another terminal):"
echo "   cd frontend && npm run dev"
echo ""
echo "The app will open at http://localhost:3000"
echo "========================================="
