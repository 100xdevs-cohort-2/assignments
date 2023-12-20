const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod");
const userSchema = z
  .string()
  .email({ message: "Please enter a valid email address." });
const passSchema = z
  .string()
  .min(6, { message: "Pass should be more than 6 characters" });

function signJwt(username, password) {
  let userCheck = userSchema.safeParse(username);
  let passCheck = passSchema.safeParse(password);
  if (!userCheck.success) {
    // console.log(userCheck.error);
    return null;
  } else if (!passCheck.success) {
    // console.log(passCheck.error);
    return null;
  } else {
    const jwtToken = jwt.sign({ username: username }, jwtPassword);
    // console.log("sign", jwtToken);
    return jwtToken;
  }
}

function verifyJwt(token) {
  try {
    const payload = jwt.verify(token, jwtPassword);
    return true;
  } catch (err) {
    return false;
  }
}

function decodeJwt(token) {
  try {
    const payload = jwt.decode(token);
    // console.log("decode", payload);
    if (!payload) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
