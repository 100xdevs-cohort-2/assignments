const { Admin } = require('../db');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const username = req.headers['username'];
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(404).send();
  req.admin = admin;
  next();
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
