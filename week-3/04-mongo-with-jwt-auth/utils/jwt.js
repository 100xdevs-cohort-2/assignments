const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/config');

function signJwt(data) {
  return jwt.sign(data, SECRET, { algorithm: 'HS256' });
}

function verifyJwt(token) {
  try {
    return Boolean(jwt.verify(token, SECRET, { algorithms: 'HS256' }));
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

function decodeJwt(token) {
  return jwt.decode(token);
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
};
