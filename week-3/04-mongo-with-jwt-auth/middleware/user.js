const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let authorized = true;
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, "USER");
  } catch (e) {
    authorized = false;
  }
  if (authorized) {
    next();
  } else {
    res.status(404).json({
      error: "Invalid Token",
    });
  }
}

module.exports = userMiddleware;
