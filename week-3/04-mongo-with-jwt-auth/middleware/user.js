const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { token } = req.headers;

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    next();
  } catch (e) {
    res.send("access denied");
  }
}

module.exports = userMiddleware;
