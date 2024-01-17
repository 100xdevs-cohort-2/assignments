const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function signJwt(username, password) {
  if (!isValidEmail(username) || password.length < 6) {
    return null;
  }
  return jwt.sign({ username: username }, password); // Use 'password' instead of 'jwtPassword'
}

function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  try {
    const decode = jwt.decode(token);
// const decoded1 = decode
//     const decoded = jwt.decode(token);
    if(decode){
        return true
    }else{
        return false
    }
  } catch (error) {
    return false;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
