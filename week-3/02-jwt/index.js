const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

function signJwt(username, password) {
  const payload = { username, password };
  const options = { expiresIn: "1h" };

  return jwt.sign(payload, jwtPassword, options);
}

function verifyJwt(token) {
  try {
    return jwt.verify(token, jwtPassword);
  } catch (err) {
    return null;
  }
}

function decodeJwt(token) {
  return jwt.decode(token, { complete: true });
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
