const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../config");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;

  const words = token.split(" ");
  const jwtToken = words[1];

  const decodedValue = jwt.verify(jwtToken, jwtsecret);

  if (decodedValue.username) {
    req.username = decodedValue.username;
    next();
  } else {
    res.status(404).json({ msg: "You are not authenticated" });
  }
}

module.exports = userMiddleware;
