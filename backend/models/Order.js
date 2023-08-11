// Importing necessary modules
const mongoose = require('mongoose');


// Defining the Order schema
const orderSchema = new mongoose.Schema({
products: [
{
product: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Product',
required: true,
},
quantity: {
type: Number,
required: true,
min: 1,
},
},
],
user: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User',
required: true,
},
status: {
type: String,
enum: ['pending', 'completed', 'canceled'],
default: 'pending',
},
});


// Creating the Order model
const Order = mongoose.model('Order', orderSchema);


// Exporting the model
module.exports = Order;