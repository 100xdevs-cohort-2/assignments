<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const { User } = require('../db/index');
require('dotenv').config();

async function userMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token not provided' });
    }

    const decoded = jwt.verify(token, process.env.secret_key);

    if (decoded && decoded.userId) {

      const user = await User.findById(decoded.userId);

      if (user) {
        // Attach the user information to the request object for later use
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: 'Unauthorized - User not found' });
      }
    } else {
      res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
  } catch (error) {
    console.error('Error in userMiddleware:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = userMiddleware;
=======
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
>>>>>>> origin/master
