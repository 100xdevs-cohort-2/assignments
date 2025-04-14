const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const authHeaders = req.headers.authorization;
    const jwtToken = authHeaders.split(" ")[1];
    const decodedToken = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedToken.username) {
      req.username = decodedToken.username;
      next();
    } else {
      res.status(401).json({ message: "No claims in the token" });
    }
  } catch (err) {
    res.status(401).json({ message: "Authentication denied !!!" });
  }
}

module.exports = userMiddleware;
