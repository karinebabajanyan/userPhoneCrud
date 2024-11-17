const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const phoneRoutes = require('./routes/phoneRoutes');
const connectDB = require('./config/db');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/phones', phoneRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
