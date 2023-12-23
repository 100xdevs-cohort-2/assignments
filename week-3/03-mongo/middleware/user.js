const { User } = require('../db');

async function userMiddleware(req, res, next) {
  const username = req.headers['username'];
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: 'user not found' });
  req.user = user;
  next();
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
