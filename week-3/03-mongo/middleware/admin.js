const { Admin } = require("../db/");

async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;
  const verifiedAdmin = await Admin.findOne({
    username: username,
    password: password,
  });

  if (!verifiedAdmin) {
    return res.status(401).json({ msg: "Unauthorized Admin !" });
  } else {
    next();
  }
}

module.exports = adminMiddleware;
