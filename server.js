const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const mongoURI = process.env.MONGO_URL || process.env.MONGODB_URL;

if (mongoURI) {
    mongoose.connect(mongoURI)
        .then(() => console.log("✅ Connected to MongoDB Atlas"))
        .catch(err => console.error("❌ MongoDB Connection Error:", err));
} else {
    console.warn("⚠️ Warning: MONGO_URL not found in Vercel Environment Variables.");
}
// 1. PORT CONFIG
const PORT = process.env.PORT || 5000;

// 2. MIDDLEWARE
app.use(express.json());
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

// 3. STATIC FILES (Images and Frontend)
// Note: Vercel serves the 'public' folder automatically, but this keeps your logic intact
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(__dirname));

// 4. DATABASE CONNECTION (Using MongoDB Atlas)


// 5. SCHEMAS & MODELS
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

// Check if model exists before defining to prevent Vercel re-compilation errors
const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

// 6. PAYPAL CONFIG
const { PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_ENVIRONMENT = 'sandbox' } = process.env;
const PAYPAL_API = PAYPAL_ENVIRONMENT === 'sandbox' 
    ? 'https://api-m.sandbox.paypal.com' 
    : 'https://api-m.paypal.com';

const MAD_TO_USD_RATE = 0.10; 

// --- ROUTES ---

// Serve your index.html for the root route
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'index.html')); 
});
// Route for the products page
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
});
app.get('/index1', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
});
app.get('/api/status', async (req, res) => {
    // This tells the code to wait up to 2 seconds for the DB to wake up
    if (mongoose.connection.readyState !== 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    res.json({ 
        message: "Elite Shop API is LIVE",
        database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
        connectionState: mongoose.connection.readyState // 0=disc, 1=conn, 2=conn-ing
    });
});

// CREATE ORDER
app.post('/api/orders', async (req, res) => {
    try {
        const { cart } = req.body;
        // Your PayPal Access Token and Order Logic here...
        // Ensure you use the global fetch() for the API calls
        res.status(200).json({ message: "Order creation logic triggered" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CAPTURE ORDER
app.post('/api/orders/:orderId/capture', async (req, res) => {
    try {
        const { orderId } = req.params;
        // Your PayPal Capture Logic here...
        res.status(200).json({ message: `Capturing order ${orderId}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 7. START SERVER (Modified for Vercel)
// Vercel handles the listening, but this allows you to still test locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => { 
        console.log(`🚀 Local Server is LIVE on port ${PORT}`); 
    });
}

// 8. EXPORT FOR VERCEL (The most important line!)
module.exports = app;