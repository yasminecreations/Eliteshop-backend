const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "*", methods: ["GET", "POST"] }));

const mongoURI = process.env.MONGO_URL || process.env.MONGODB_URL;
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// --- 1. UPDATED SCHEMA ---
const OrderSchema = new mongoose.Schema({
    paypalOrderId: { type: String, required: true },
    status: String,
    amount: String,
    currency: String,
    customerEmail: String,
    // Add this line to save the products!
    items: [{ name: String, quantity: Number, price: String }], 
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

// --- 2. UPDATED ORDER CREATION ---
app.post('/api/orders', async (req, res) => {
    try {
        // We assume your frontend sends the 'cart' in the body
        const { cart } = req.body; 
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
                        value: '45.00', // Total Price
                        breakdown: {
                            item_total: { currency_code: 'USD', value: '45.00' }
                        }
                    },
                    // THIS PART makes the names show up in your PayPal Inbox
                    items: cart.map(item => ({
                        name: item.name,
                        unit_amount: { currency_code: 'USD', value: item.price },
                        quantity: item.quantity
                    }))
                }]
            })
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --- 3. UPDATED CAPTURE ---
app.post('/api/orders/:orderId/capture', async (req, res) => {
    const { orderId } = req.params;
    const { cart } = req.body; // Pass the cart here too to save to DB

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
                customerEmail: data.payer.email_address,
                // SAVING THE ITEMS TO MONGODB
                items: cart.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                }))
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

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => { console.log(`🚀 Server running on port ${PORT}`); });