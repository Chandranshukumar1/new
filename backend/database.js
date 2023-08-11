// Importing necessary modules
const mongoose = require('mongoose');
require('dotenv').config();


// Establishing a database connection
const connectDatabase = async () => {
try {
await mongoose.connect(process.env.MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
});
console.log('Connected to the database');
} catch (error) {
console.error('Error connecting to the database:', error.message);
}
};


// Exporting the function to establish the database connection
module.exports = connectDatabase;