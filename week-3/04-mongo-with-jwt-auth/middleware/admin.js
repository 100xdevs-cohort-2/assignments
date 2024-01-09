// Middleware for handling auth
const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
const secretKey = "yourSecretKey";
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const authHeader = req.headers.authorization;

  if (authHeader) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, secretKey, (err, user) => {
        if (err) {
          return res.status(403).send("Wrong token");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).send();
    }
  }
}

module.exports = adminMiddleware;
