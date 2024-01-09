const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;

  try {
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
