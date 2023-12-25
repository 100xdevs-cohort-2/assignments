const { User } = require("../db/index");
const JWT = require("jsonwebtoken");
const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  // const { adminname, adminpassword } = req.headers;
  //   console.log(adminname, adminpassword);

  const token = req.headers.authorization?.split(" ")[1];
  try {
    // const verifyToken = JWT.verify(token, "SecretKey");
    // console.log(process.env.JWT_SECRETKEY);
    const verfiyToken = JWT.verify(token, process.env.JWT_SECRETKEY);

    // console.log(verfiyToken);
    const { adminName, adminPassword } = JWT.decode(token);
    // console.log(adminName, adminPassword);
    const adminExists = await Admin.findOne({
      adminName: adminName,
      adminPassword: adminPassword,
    });
    // console.log(adminExists);
    if (adminExists == null) {
      return res
        .status(404)
        .json({ msg: "Admin not found in db!", adminExists });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
  next();
}

module.exports = adminMiddleware;
