// Middleware for handling auth
const jwt = require("jsonwebtoken");
async function userMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  if (!token) {
    res.json({ msg: "Token not found!" });
  }
  const jwt_token = token.split(" ")[1];
  try {
    jwt.verify(jwt_token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json({ msg: " You are not authorized user" });
      } else {
        req.username = user.username;
        next();
      }
    });
  } catch {
    return res.status(404).send({ message: "Not Found" });
  }
}

module.exports = userMiddleware;
