// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../constants");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  try {
    const { authorization } = req.headers;

    let splitAuthorization = authorization.split(" ");
    let token = splitAuthorization[1];
    let verifyToken = jwt.verify(token, jwtSecretKey);
    if (verifyToken.username) {
      next();
    } else {
      res.status(400).json({ message: "jwt verification failed" });
    }
  } catch (error) {
    res.status(400).json({ message: "error occured" });
    console.log("error: ", error);
  }
}

module.exports = adminMiddleware;
