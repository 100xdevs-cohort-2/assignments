// Middleware for handling auth
const { Admin } = require("../db/index");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const { adminname, adminpassword } = req.headers;
  //   console.log(adminname, adminpassword);
  try {
    const adminExists = await Admin.findOne({
      adminName: adminname,
      adminPassword: adminpassword,
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
