const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  try {
    const Bearertoken = req.headers.authorization;
    if (!Bearertoken.startsWith("Bearer")) {
      res.status(401).json({ message: "UNAUTHORIZED_INVALID_TOKEN" });
    }
    const token = Bearertoken.slice(7);
    const verifiedToken = jwt.verify(token, process.env.JWT_PASSWORD);
    if (!verifiedToken) {
      res.status(401).json({ message: "UNAUTHORIZED_INVALID_TOKEN" });
    }
    const adminExists = await Admin.findOne({
      username: verifiedToken,
    });
    if (!adminExists) {
      res.status(403).json({ message: "ADMIN_DOES_NOT_EXIST" });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = adminMiddleware;
