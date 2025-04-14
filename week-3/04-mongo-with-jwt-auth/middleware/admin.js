const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const authHeader = req.headers.authorization;
    const jwtToken = authHeader.split(" ")[1];
    const decodedJwt = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedJwt.username) {
      next();
    } else {
      res.status(403).json({ message: "Authentication failed !!!" });
    }
  } catch (err) {
    res.status(401).json({ message: "Ivalid token" });
  }
}

module.exports = adminMiddleware;
