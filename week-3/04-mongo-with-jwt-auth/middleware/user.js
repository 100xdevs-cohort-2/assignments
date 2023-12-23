const { User } = require('../db');
const { verifyJwt, decodeJwt } = require('../utils/jwt');

async function userMiddleware(req, res, next) {
  const token = req.token;
  if (!verifyJwt(token)) {
    return res.status(400).json({ message: 'Bad Token' });
  }
  const decodedToken = decodeJwt(token);
  const userId = decodedToken.id;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'user not found' });
  req.user = user;
  req.userId = userId;
  next();
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
