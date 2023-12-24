const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const secretKey = "youruserKey";
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).send("Wrong token given");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).send();
  }
}

module.exports = userMiddleware;
