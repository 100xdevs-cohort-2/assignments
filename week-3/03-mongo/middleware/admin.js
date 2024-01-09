const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const data = await Admin.find({
    username: username,
    password: password,
  }).exec();
  console.log(data);
  if (data.length > 0) {
    next();
  } else {
    res.status(401).send("Admin Not found");
    return;
  }
}

module.exports = adminMiddleware;
