// User.js - Data model for user-related information


const mongoose = require('mongoose');


// Define the user schema
const userSchema = new mongoose.Schema({
username: {
type: String,
required: true
},
password: {
type: String,
required: true
},
email: {
type: String,
required: true
},
profile: {
firstName: String,
lastName: String,
age: Number,
address: String
}
});


// Create and export the User model
module.exports = mongoose.model('User', userSchema);