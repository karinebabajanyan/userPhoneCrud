const mongoose = require('mongoose');

const connectDB = () => {
    const mongoURI = process.env.MONGO_URI;
    mongoose.connect(mongoURI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('MongoDB connection error:', err));
};

module.exports = connectDB;
