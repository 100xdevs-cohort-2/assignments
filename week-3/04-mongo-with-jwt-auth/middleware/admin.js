const jwtPassword = "secret";
const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let token = req.headers.authorization;
  if (!token) return res.send(404, { message: "Token not found" });
  try {
    token = token.replace("Bearer ", "");
    jwt.verify(token, jwtPassword);
    next();
  } catch (e) {
    return res.send(401, { message: "Invalid Token" });
  }
}

module.exports = adminMiddleware;
