const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://samarthbhaty:admin123@parent.awon9ef.mongodb.net/WhereBNB');

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
