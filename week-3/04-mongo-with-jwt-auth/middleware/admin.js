const jwt = require("jsonwebtoken");
const jwtpassword = "secretpassword#123";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const auth = req.headers.authorization.split(" ");
  const token = auth[1];

  try {
    jwt.verify(token, jwtpassword);
    next();
  } catch (err) {
    return res.status(403).json({ message: "Not a valid token" });
  }
}

module.exports = adminMiddleware;
