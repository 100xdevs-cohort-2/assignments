const jwt = require("jsonwebtoken");
const jwtAdminSecret = "Admin";
const jwtUserSecret = "User";

function adminTokenVerification(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(404).json({ error: "Token required!" });
  }

  try {
    const authorized = jwt.verify(token, jwtAdminSecret);
    if (authorized) {
      req.adminData = jwt.decode(token);
      next();
    }
  } catch (error) {
    res.status(404).json({ error: "Token authorization error!" });
  }
}

function userTokenVerification(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(404).json({ error: "Token required!" });
  }

  try {
    const authorized = jwt.verify(token, jwtUserSecret);
    if (authorized) {
      req.userData = jwt.decode(token);
      next();
    }
  } catch (error) {
    res.status(404).json({ error: "Token authorization error!" });
  }
}

module.exports = {
  adminTokenVerification,
  userTokenVerification,
};
