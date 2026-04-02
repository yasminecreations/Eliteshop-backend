const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "*", methods: ["GET", "POST"] }));

// --- FIXED SECTION ---
// 1. Serve images from the /images folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// 2. Serve other static files (like index.js or index.html) from the root
app.use(express.static(__dirname)); 
// --- END FIXED SECTION ---

const mongoURI = process.env.MONGO_URL || process.env.MONGODB_URL;
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ... The rest of your Schema ...

// IMPORTANT: Fixed the exchange rate logic
// 1 MAD is roughly 0.10 USD. 
const MAD_TO_USD_RATE = 0.10;