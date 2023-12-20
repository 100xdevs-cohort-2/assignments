const { User } = require("../db/index");
const jwtPassword = "secret";
const jwt = require("jsonwebtoken");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  let authHeader = req.headers.authorisation; //"authHeader: Bearer {token}"

  let token = authHeader.split(" ")[1];

  jwt.verify(token, jwtPassword, (err, decoded) => {
    if (err) {
      res
        .status(505)
        .json({ msg: "This user is not authorized to perform this action" });
    } else {
      next();
    }
  });
}

module.exports = userMiddleware;
