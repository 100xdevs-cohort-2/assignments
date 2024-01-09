// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { adminPassword } = require("../routes/admin");

function adminMiddleware(req, res, next) {
  const { authorization } = req.headers;
  let verification = true;
  const token = authorization.split(" ")[1];
  try {
    const verifyJwt = jwt.verify(token, "ADMIN");
    console.log(verifyJwt);
  } catch (e) {
    verification = false;
  }
  if (verification) {
    next();
  } else {
    res.status(500).json({
      error: "Invalid Token",
    });
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
