const jwt = require("jsonwebtoken");
const { jwtDecode } = require("jwt-decode");
const { jwtSecretKey } = require("../constants");
function userMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  const verifyToken = jwt.verify(token, jwtSecretKey);
  let decodeJwt = jwtDecode(token);
  const { _id } = decodeJwt;
  req.headers["userId"] = _id;
  if (verifyToken) {
    next();
  } else {
    res.json({ error: "authentication fails" });
  }
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
