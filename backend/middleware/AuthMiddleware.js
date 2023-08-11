// Importing necessary modules
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming the path to User.js is correct


// Middleware function to authenticate user
const authenticateUser = async (req, res, next) => {
const token = req.header('Authorization');


try {
if (!token) {
return res.status(401).json({ message: 'Authorization denied' });
}
const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
const user = await User.findOne({ _id: decodedToken._id, 'tokens.token': token });

if (!user) {
  throw new Error();
}

req.user = user;
req.token = token;
next();
} catch (error) {
    res.status(401).json({ message: 'Authorization denied' });
    }
    };
    
    
    // Middleware function to check if user is admin
    const isAdmin = (req, res, next) => {
    const user = req.user;
    
    
    if (user && user.isAdmin) {
    next();
    } else {
    res.status(403).json({ message: 'Admin authorization required' });
    }
    };
    
    
    // Exporting the middleware functions
    module.exports = {
    authenticateUser,
    isAdmin,
    };