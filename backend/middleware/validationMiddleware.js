// Importing necessary modules
const { validationResult } = require('express-validator');


// Middleware function to validate incoming requests
const validateRequest = (req, res, next) => {
// Check for validation errors
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
}


// If no validation errors, proceed to the next middleware/route
next();
};


// Middleware function to validate user registration request
const validateUserRegistration = [
// Add validation rules here using express-validator
// For example:
// check('username').notEmpty().withMessage('Username is required'),
// check('email').isEmail().withMessage('Invalid email'),
// check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
validateRequest, // Use the validateRequest middleware to check for validation errors
];


// Middleware function to validate product creation request
const validateProductCreation = [
// Add validation rules here using express-validator
// For example:
// check('title').notEmpty().withMessage('Title is required'),
// check('price').isNumeric().withMessage('Invalid price'),
validateRequest, // Use the validateRequest middleware to check for validation errors
];


// Middleware function to validate order creation request
const validateOrderCreation = [
// Add validation rules here using express-validator
// For example:
// check('products').isArray().withMessage('Products must be an array'),
// check('user').notEmpty().withMessage('User ID is required'),
// check('status').isIn(['pending', 'completed', 'canceled']).withMessage('Invalid status'),
validateRequest, // Use the validateRequest middleware to check for validation errors
];


// Exporting the middleware functions
module.exports = {
validateUserRegistration,
validateProductCreation,
validateOrderCreation,
};