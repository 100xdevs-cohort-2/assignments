const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const data = await jwt.verify(jwtToken, JWT_SECRET);
  if (data.username) {
    req.username = data.username;
    next();
  } else {
    res.status(403).json({
      message: "Admin does not exist",
    });
  }
}

module.exports = userMiddleware;
