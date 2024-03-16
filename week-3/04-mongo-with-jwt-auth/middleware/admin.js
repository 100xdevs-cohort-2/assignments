const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  if (!token) {
    res.json({ msg: "Token not present" });
  }
  const jwtToken = token.split(" ")[1];
  jwt.verify(jwtToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403).json({ msg: "You are not authorized admin" });
    } else next();
  });
}

module.exports = adminMiddleware;
