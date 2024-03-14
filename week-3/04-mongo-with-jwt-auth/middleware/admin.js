const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;
  const words = token.split(" "); // ["Bearer", "token"]
  const jwtToken = words[1]; // token
  // To Check if the token is provided
  if (!jwtToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Token not provided" });
  }

  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    // Check if the user is an admin
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "Forbidden - User is not an admin",
      });
    }
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
}

module.exports = adminMiddleware;
