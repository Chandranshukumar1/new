// Product.js - Data model for product information


const mongoose = require('mongoose');


// Define the product schema
const productSchema = new mongoose.Schema({
title: {
type: String,
required: true
},
description: {
type: String,
required: true
},
price: {
type: Number,
required: true
},
availability: {
type: Boolean,
default: true
}
});


// Create and export the Product model
module.exports = mongoose.model('Product', productSchema);