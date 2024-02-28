const { Admin } = require("../db");


//middleware to verify if user aldready exists (own)
async function adminNotExists(req,res,next) {
  const adminName = req.body.adminName;
  const password = req.body.password;
  let adminExists = await Admin.findOne({ adminName: adminName , password : password});
  if (adminExists) {
    return res.status(400).json({
      message: "user aldready exists",
    });
  }
  next();
}

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const adminName = req.headers.adminName;
  const password = req.headers.password;
  let adminExists = await Admin.findOne({
    adminName,
    password,
  });
  if (!adminExists) {
    return res.status(403).json({
      msg: "user doesn't exist",
    });
  }
  next();
}

module.exports = adminMiddleware,adminNotExists;
