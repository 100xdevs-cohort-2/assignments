const { SECRET } = require('../../03-mongo/utils/config');
const { Admin } = require('../db');
const { verifyJwt, decodeJwt } = require('../utils/jwt');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const token = req.token;
  const tokenVerified = verifyJwt(token);
  if (!tokenVerified) {
    return res.status(400).send({ message: 'Bad Token' });
  }
  const decodedToken = decodeJwt(token);
  const adminId = decodedToken.id;
  const admin = await Admin.findById(adminId);
  if (!admin) return res.status(404).send();
  req.admin = admin;
  req.adminId = adminId;
  next();
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
