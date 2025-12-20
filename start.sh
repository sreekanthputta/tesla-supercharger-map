#!/bin/bash

echo "========================================="
echo "Tesla Supercharger Map"
echo "========================================="
echo ""
echo "Starting backend server..."
echo ""

# Start backend in background
cd backend
npm start &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend
cd ../frontend
echo ""
echo "Starting frontend..."
echo ""
npm run dev

# Cleanup on exit
trap "kill $BACKEND_PID 2>/dev/null" EXIT
