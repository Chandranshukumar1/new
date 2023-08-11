// UserController.js - Handling user-related actions

// Sample user data (for demonstration purposes)
const users = [];

// Function to register a new user
const registerUser = (req, res) => {
  // Extract user data from request body
  const { username, email, password } = req.body;

  // Create a new user object
  const newUser = { username, email, password, id: users.length + 1 };

  // Add the user to the users array
  users.push(newUser);

  // Return success response
  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Function to handle user login
const loginUser = (req, res) => {
  // Extract login credentials from request body
  const { email, password } = req.body;

  // Find user by email
  const user = users.find(u => u.email === email);

  // Check if user exists and password matches
  if (user && user.password === password) {
    // Return success response
    res.json({ message: 'Login successful', user });
  } else {
    // Return error response
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Function to update user profile
const updateProfile = (req, res) => {
  // Extract user ID from request parameters
  const userId = parseInt(req.params.id);

  // Find user by ID
  const user = users.find(u => u.id === userId);

  // Check if user exists
  if (user) {
    // Update user data with new profile information
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    // Return success response
    res.json({ message: 'Profile updated successfully', user });
  } else {
    // Return error response
    res.status(404).json({ message: 'User not found' });
  }
};

// Export controller functions
module.exports = {
  registerUser,
  loginUser,
  updateProfile
};
