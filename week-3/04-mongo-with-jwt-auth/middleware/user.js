const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const auth_header = req.headers.authorization;
  const token = auth_header.split(" ")[1];

  try {
    const user = jwt.verify(token, JWT_SECRET);
    if (user.username) {
      req.username = user.username;
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports = userMiddleware;
