// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { Admin } = require("../db");
const jwtPass = "123456";
function adminMiddleware(req, res, next) {
  //----------------------------------------------------------------
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let token = req.headers.Authorization;
  try {
    jwt.verify(token, jwtPass);
    next();
  } catch (err) {
    res.send(new Error("Invalid auth token"));
  }
  // ----------------------------------------------------------------
  // Admin.find(
  //   { userName: userName, password: password },
  //   null,
  //   { limit: 1 },
  //   function (err, user) {
  //     if (err) {
  //       return res.json(err);
  //     }
  //     if (!user) {
  //       return res.json(new Error("Invalid username or password"));
  //     } else {
  //       res.json({ Authentication: jwt.sign({ userName: userName }, jwtPass) });
  //       next();
  //     }
  //   }
  // );
}

module.exports = adminMiddleware;
