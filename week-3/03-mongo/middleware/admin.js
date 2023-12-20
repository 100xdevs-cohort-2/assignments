const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  let username = req.headers.username;
  let password = req.headers.password;

  const admin = await Admin.find({ username: username, password: password });
  if (admin.length) {
    console.log("INSIDE IF");
    next();
  } else {
    res
      .status(505)
      .json({ msg: "This user is not authorized to perform this action" });
  }
}

module.exports = adminMiddleware;
