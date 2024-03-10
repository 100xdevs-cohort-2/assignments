const jwt = require('jsonwebtoken');

function generateAccessToken(_id, username) {
  return jwt.sign({ _id, username }, process.env.TOKEN_SECRET, { expiresIn: '3000s' });
}

module.exports = {
  generateAccessToken
}