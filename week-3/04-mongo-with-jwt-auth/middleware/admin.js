<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const { Admin } = require('../db/index');
require('dotenv').config();

async function adminMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);

    const decoded = jwt.verify(token,process.env.secret_key);
    console.log('decode in middleware:',decoded);
    if (decoded && decoded.adminId) {
      const user = await Admin.findById(decoded.adminId);

      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ error: 'Unauthorized - User not found' });
      }
    } else {
      res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
  } catch (error) {
    console.error('Error in adminMiddleware:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = adminMiddleware;
=======
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
>>>>>>> origin/master
