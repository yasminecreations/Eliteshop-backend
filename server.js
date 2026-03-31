const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const app = express();


app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL || "*", 
    methods: ["GET", "POST"]
}));


const mongoURI = process.env.MONGO_URL || process.env.MONGODB_URL;

mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));


const OrderSchema = new mongoose.Schema({
    paypalOrderId: { type: String, required: true },
    status: String,
    amount: String,
    currency: String,
    customerEmail: String,
    createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', OrderSchema);

const { PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_ENVIRONMENT = 'sandbox' } = process.env;
const PAYPAL_API = PAYPAL_ENVIRONMENT === 'sandbox' 
    ? 'https://api-m.sandbox.paypal.com' 
    : 'https://api-m.paypal.com';

async function getPayPalAccessToken() {
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64');
    const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
        method: 'POST',
        body: 'grant_type=client_credentials',
        headers: { Authorization: `Basic ${auth}` }
    });
    const data = await response.json();
    return data.access_token;
}

app.post('/api/orders', async (req, res) => {
    try {
        const accessToken = await getPayPalAccessToken();
        const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'USD',
                        value: '45.00' 
                    }
                }]
            })
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/orders/:orderId/capture', async (req, res) => {
    const { orderId } = req.params;
    try {
        const accessToken = await getPayPalAccessToken();
        const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        });

        const data = await response.json();

        if (data.status === 'COMPLETED') {
           
            const newOrder = new Order({
                paypalOrderId: data.id,
                status: data.status,
                amount: data.purchase_units[0].payments.captures[0].amount.value,
                currency: data.purchase_units[0].payments.captures[0].amount.currency_code,
                customerEmail: data.payer.email_address
            });
            await newOrder.save();
            return res.json({ message: "Order Saved!", order: newOrder });
        }
        
        res.status(400).json(data);
    } catch (error) {
        console.error("Capture Error:", error);
        res.status(500).json({ error: "Failed to capture payment" });
    }
});


const PORT = process.env.PORT || 5000;
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); });
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});