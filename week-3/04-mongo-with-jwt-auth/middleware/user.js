const { User } = require("../db/index");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization?.split(" ")[1];

  try {
    // verify the token
    // const verifyToken = JWT.verify(token, "SecretKey");
    const { username, password } = JWT.decode(token);

    const userExists = await User.findOne({
      username: username,
      password: password,
    });

    if (userExists == null) {
      return res.status(404).json({ msg: "User not found in db!", userExists });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
  next();
}

module.exports = userMiddleware;
