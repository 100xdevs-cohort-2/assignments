const { JWT_SECRET } = require("../config.js");
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    req.username = decodedValue.username;
    next();
  } catch (e) {
    res.status(403).json({
      message: "You are not authenticated",
    });
  }
}
module.exports = userMiddleware;
