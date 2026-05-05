if (typeof Promise.withResolvers === 'undefined') {
    Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        return { promise, resolve, reject };
    };
}
require('dotenv').config();
const mongoose = require('mongoose');
// Import your array from your existing file
const myProducts = require('./products'); 

// The Schema tells MongoDB how to organize your data
const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    status: String,
    image: String,
    images: [String],
    description: String,
    sizes: [String],
    images2: [String],
    description2: String
});

const Product = mongoose.model('Product', ProductSchema);

async function seed() {
    try {
        // Uses the URL you just put in your .env file
        await mongoose.connect(process.env.MONGO_URL || process.env.MONGODB_URL);
        console.log(" Connected to Atlas...");

        // Clear existing items so you don't have duplicates if you run this twice
        await Product.deleteMany({});
        
        // Push the array to the cloud
        await Product.insertMany(myProducts);
        
        console.log(" Success! Your 'Elite Store' products are now in the database.");
        process.exit();
    } catch (err) {
        console.error(" Seeding Error:", err);
        process.exit(1);
    }
}

seed();