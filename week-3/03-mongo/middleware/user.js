const { User } = require("../db/index");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    })
    .catch((err) => {
      console.error("Error authenticating user:", err);
      res.status(500).send("Internal Server Error");
    });
}

module.exports = userMiddleware;
