// PaymentController.js - Handling payment-related actions


// Sample payment data (for demonstration purposes)
const payments = [];


// Function to process a payment
const processPayment = (req, res) => {
// Extract payment information from request body
const { amount, cardNumber, expirationDate, cvv } = req.body;


// Simulate payment processing (for demonstration)
const paymentStatus = Math.random() < 0.8 ? 'success' : 'failure';


// Create a new payment object
const newPayment = {
amount,
cardNumber: '**** **** **** ' + cardNumber.slice(-4),
expirationDate,
status: paymentStatus,
timestamp: new Date()
};


// Add the payment to the payments array
payments.push(newPayment);


// Return payment status response
if (paymentStatus === 'success') {
res.json({ message: 'Payment processed successfully', payment: newPayment });
} else {
res.status(400).json({ message: 'Payment processing failed', payment: newPayment });
}
};


// Function to retrieve all payments
const getAllPayments = (req, res) => {
res.json(payments);
};


// Export controller functions
module.exports = {
processPayment,
getAllPayments
};