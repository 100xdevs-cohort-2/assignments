const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    if (!token) {
      res.json({ msg: "Token not present" });
    }
    const jwtToken = token.split(" ")[1];
    jwt.verify(jwtToken, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json({ msg: "You are not authorized admin" });
      } else next();
    });
}

module.exports = userMiddleware;