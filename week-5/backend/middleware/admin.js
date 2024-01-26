const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
      req.username = decodedValue.username;
      next();
    } else {
      res.status(403).json({
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      message: "Wrong inputs sent",
    });
  }
}
module.exports = adminMiddleware;
