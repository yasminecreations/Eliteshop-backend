const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// 1. PORT CONFIG (Crucial for Railway)
const PORT = process.env.PORT || 5000;

// 2. MIDDLEWARE
app.use(express.json());
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

// 3. STATIC FILES (Images and Frontend)
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(__dirname));

// 4. START SERVER IMMEDIATELY (Prevents 502 Timeout)
app.listen(PORT, '0.0.0.0', () => { 
    console.log(`🚀 Server is LIVE on port ${PORT}`); 
});

// 5. DATABASE CONNECTION
const mongoURI = process.env.MONGO_URL || process.env.MONGODB_URL;
if (mongoURI) {
    mongoose.connect(mongoURI)
        .then(() => console.log("✅ Connected to MongoDB"))
        .catch(err => console.error("❌ MongoDB Connection Error:", err));
} else {
    console.warn("⚠️ Warning: MONGO_URL not found in environment variables.");
}

// 6. SCHEMAS & MODELS
const OrderSchema = new mongoose.Schema({
    paypalOrderId: { type: String, required: true },
    status: String,
    amountUSD: String,    
    amountMAD: String,      
    shippingFeeMAD: String,
    currency: String,
    customerEmail: String,
    items: [{ name: String, quantity: Number, priceMAD: String }], 
    createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', OrderSchema);

// 7. PAYPAL CONFIG
const { PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_ENVIRONMENT = 'sandbox' } = process.env;
const PAYPAL_API = PAYPAL_ENVIRONMENT === 'sandbox' 
    ? 'https://api-m.sandbox.paypal.com' 
    : 'https://api-m.paypal.com';

const MAD_TO_USD_RATE = 0.10; 

// --- ROUTES ---

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'index.html')); 
});

// CREATE ORDER
app.post('/api/orders', async (req, res) => {
    try {
        const { cart } = req.body; 
        // Logic for getPayPalAccessToken and Order creation...
        // Note: Use global fetch() here, no require needed
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CAPTURE ORDER
app.post('/api/orders/:orderId/capture', async (req, res) => {
    // Capture logic...
});