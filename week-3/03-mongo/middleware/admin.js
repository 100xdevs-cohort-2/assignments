// Middleware for handling auth

const { Admin } = require("../db/index");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const { username } = req.headers;
  let findAdmin = await Admin.findOne({ username });
  if (findAdmin) {
    next();
  } else {
    res.status(400).json({ message: `no user exist with ${username} email` });
  }
}

async function existingUserName(req, res, next) {
  const { username } = req.body;
  let findAdmin = await Admin.findOne({ username });
  if (!findAdmin) {
    next();
  } else {
    res
      .status(400)
      .json({
        message: `username is already registered with  ${username} email`,
      });
  }
}

module.exports = { adminMiddleware, existingUserName };
