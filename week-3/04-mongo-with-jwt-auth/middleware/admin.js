const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers["authorization"];
  const jwtToken = token.split(" ")[1];

  try {
    const decoded = jwt.verify(jwtToken, JWT_SECRET);
    if (decoded.username) {
      Admin.findOne({
        username: decoded.username,
      }).then((user) => {
        if (user) {
          next();
        } else {
          res.status(403).send({
            msg: "Invalid Credentials",
          });
        }
      });
    } else {
      res.status(400).json({
        message: "Not Authorised",
      });
    }
  } catch (e) {
    res.status(400).json({
      message: "Invalid Token",
    });
  }
}

module.exports = adminMiddleware;
