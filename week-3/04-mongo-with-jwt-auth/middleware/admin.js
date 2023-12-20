const { Admin } = require("../db/index");
const jwtPassword = "secret";
const jwt = require("jsonwebtoken");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

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

module.exports = adminMiddleware;
