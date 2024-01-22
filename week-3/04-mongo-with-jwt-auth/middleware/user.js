const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  const isVerified = jwt.verify(jwtToken, JWT_SECRET);
  console.log(isVerified.username);

  if (isVerified.username) {
    req.username = isVerified.username;
    next();
  } else {
    res.status(403).json({
      msg: "You are not authneticated",
    });
  }
}

module.exports = userMiddleware;
