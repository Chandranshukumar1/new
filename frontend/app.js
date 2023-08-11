// app.js - Main application file

const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');
const AuthMiddleware = require('./middlewares/AuthMiddleware');

const app = express();

// Middleware to parse request body as JSON
app.use(bodyParser.json());

// Endpoint to register a new user
app.post('/register', UserController.registerUser);

// Endpoint for user login
app.post('/login', UserController.loginUser);

// Apply authentication middleware to the following routes
app.use(AuthMiddleware);

// Endpoint to update user profile
app.put('/users/:id', UserController.updateProfile);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
