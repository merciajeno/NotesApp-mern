require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB...');
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connection SUCCESS');
    } catch (err) {
        console.error('MongoDB connection FAIL:', err.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
