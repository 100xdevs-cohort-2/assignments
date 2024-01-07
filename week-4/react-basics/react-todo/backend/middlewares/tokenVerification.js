const jwt = require("jsonwebtoken");
const jwtSecret = "user";

function tokenVerification(req, res, next) {
  const token = String(req.headers.authorization);
  if (!token) return res.status(401).json({ msg: "No token provided" });

  const verified = jwt.verify(token, jwtSecret);

  if (verified) {
    // //sending the username in the request object.
    // const decodedToken = jwt.decode(token);
    // req.username = decodedToken.username;
    res.status(200);
    next();
  }
}

module.exports = tokenVerification;
