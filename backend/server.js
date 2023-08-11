// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


// Create an Express app
const app = express();


// Middleware: JSON body parser
app.use(express.json());


// Middleware: CORS
app.use(cors());


// Middleware: Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));


// Middleware: Error handling
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ message: 'Internal Server Error' });
});


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('Connected to MongoDB');
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
})
.catch(error => {
console.error('Error connecting to MongoDB:', error.message);
});