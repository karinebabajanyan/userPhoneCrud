const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const phoneRoutes = require('./routes/phoneRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/phones', phoneRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});