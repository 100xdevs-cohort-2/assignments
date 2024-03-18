const jwt = require('jsonwebtoken');
const secret = require('../config').JWT_SECRET;
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers?.authorization.split(' ')[1];
  const decodedValue = jwt.verify(token, secret);
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: 'you are not authenticated',
    });
  }
}

module.exports = adminMiddleware;
