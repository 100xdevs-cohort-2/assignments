const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let token = req.headers.authorization;

  if (!token) return res.send(404, { message: "Token not found" });

  token = token.replace("Bearer ", "");
  try {
    jwt.verify(token, jwtPassword);
    next();
  } catch (e) {
    res.send(401, { message: "Invalid Token" });
  }
}

module.exports = userMiddleware;
