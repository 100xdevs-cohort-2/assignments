const jwt = require("jsonwebtoken");
const { Admin } = require("../db/index");

async function adminMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    const authArr = authorization.split(" ");
    const decoded = jwt.verify(authArr[1], process.env.JWT_PASSWORD);

    if (decoded && decoded.username) {
      const user = await Admin.findOne({ username: decoded.username });
      if (user) {
        req.user = user;
        return next();
      } else {
        throw new Error("Unauthorized");
      }
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = adminMiddleware;
