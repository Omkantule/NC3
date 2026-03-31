# Agridisruptor Marketplace

A simple role-based farm marketplace built with Node.js, Express, MongoDB, and vanilla JavaScript.

This project supports three roles:

- Farmer: Upload products and manage listing inventory
- Customer: Browse products and place orders
- Wholesaler: Buy in bulk quantities

## Tech Stack

- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Frontend: HTML, CSS, vanilla JavaScript
- Config: dotenv

## Project Structure

- server.js: Express server, API routes, MongoDB models
- script.js: Frontend app logic (catalog, cart, checkout, role flow)
- styles.css: Main UI styles
- login.html: Role selection page
- index.html: Catalog/dashboard page
- product-detail.html: Product details page
- cart.html: Cart page
- checkout.html: Checkout flow page
- .env: Local environment configuration

## Prerequisites

- Node.js 18+ (Node 22 works)
- MongoDB running locally (or a remote MongoDB URI)
- npm

## Environment Variables

Create a .env file in project root:

PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/agridisruptor

## Install Dependencies

npm install

## Run the Project

npm start

Server starts at:

http://localhost:4000

## MongoDB Compass Setup

1. Open MongoDB Compass
2. Connect with:
   mongodb://127.0.0.1:27017
3. Open database:
   agridisruptor
4. Check collections:
   - products
   - orders

If you do not see updates in Compass:

- Ensure you are in database agridisruptor
- Clear collection filter
- Click Refresh
- Confirm app .env points to the same MONGODB_URI

## API Endpoints

- GET /api/health
- GET /api/products
- POST /api/products
- POST /api/orders
- GET /api/orders/recent?role=<role>&hours=24

## Common Issues

### 1) Error: EADDRINUSE: address already in use :::4000

Another process is already using port 4000.

Fix on Windows:

netstat -ano | findstr :4000
taskkill /PID <PID> /F
npm start

### 2) App opens but actions do not work

- Hard refresh browser: Ctrl + F5
- Verify server is running
- Check browser console for JavaScript errors

### 3) No database updates visible

- Confirm MongoDB server is running
- Confirm .env MONGODB_URI is correct
- Confirm Compass is looking at agridisruptor database

## Development Notes

- Role is stored in localStorage
- Cart is maintained client-side and validated against server inventory at checkout
- Orders reduce stock in products collection

## Git Push (Manual)

If you want to push manually:

git add .
git commit -m "Add README and updates"
git push origin main

## License

For learning and internal project use.
