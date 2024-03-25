const { Admin } = require('../db/index');
const jwt = require('jsonwebtoken');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  try {
    jwt.verify(req.headers.authorization, '12345678');
    req.username = jwt.decode(req.headers.authorization);
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = adminMiddleware;
