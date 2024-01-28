const jwt = require('jsonwebtoken');
const secret = require('../config').JWT_SECRET;

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers?.authorization.split(' ')[1];
  const decodedValue = jwt.verify(token, secret);
  if (decodedValue.username) {
    req.username = decodedValue.username;
    next();
  } else {
    res.status(403).json({
      msg: 'you are not authenticated',
    });
  }
}

module.exports = userMiddleware;
