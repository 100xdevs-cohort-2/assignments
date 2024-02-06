const { Admin } = require("../db");
const jwt = require("jsonwebtoken");

async function adminMiddleware(req, res, next) {
  try {
    const authToken = req.headers.authorization;
    const verifiedToken = jwt.verify(authToken, process.env.JWT_PASS);
    if (!verifiedToken) {
      res.status(500).json({ message: "Unverified User" });
      return;
    }

    const adminFound = await Admin.findOne({
      userName: verifiedToken,
    });

    if (!adminFound) {
      res.status(500).json({ message: "Admin DOes not exist" });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = adminMiddleware;
