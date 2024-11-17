const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost/mydb')
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('MongoDB connection error:', err));
};

module.exports = connectDB;
