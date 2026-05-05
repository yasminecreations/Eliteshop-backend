const express = require('express');
const cors = require('cors');
const products = require('./products'); // Ensure products.js is in the same folder

const app = express();

// 1. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 2. HEALTH CHECK (To see if server is alive)
app.get('/', (req, res) => {
    res.send("Elite Store Server is Running");
});

// 3. SECURE CHECKOUT ROUTE
app.post('/api/create-order', (req, res) => {
    try {
        const { cart } = req.body; 
        if (!cart || !Array.isArray(cart)) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        let subtotalMAD = 0;

        // 1. Calculate Subtotal from your secure products.js file
        cart.forEach(item => {
            const secureProduct = products.find(p => p.id === item.id);
            if (secureProduct) {
                subtotalMAD += secureProduct.price * item.quantity;
            }
        });

        // 2. Shipping Logic (Free over 500 DH, otherwise 35 DH)
        let shippingMAD = subtotalMAD >= 500 ? 0 : 35;

        // 3. Transaction Fee Logic (5%)
        let feeMAD = (subtotalMAD + shippingMAD) * 0.05;

        // 4. Final Total in MAD
        let finalTotalMAD = subtotalMAD + shippingMAD + feeMAD;

        // 5. Convert to USD for PayPal (Using 0.098 or 0.10)
        // Note: Use the same rate as your frontend for consistency
        const totalUSD = (finalTotalMAD * 0.10).toFixed(2);

        console.log(`Verification: Subtotal ${subtotalMAD}, Shipping ${shippingMAD}, Fees ${feeMAD}`);
        console.log(`Final Secure Total: ${totalUSD} USD`);
        
        res.json({ totalUSD });

    } catch (error) {
        console.error("Checkout Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});