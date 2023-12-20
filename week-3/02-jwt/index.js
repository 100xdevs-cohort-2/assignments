const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "secret";

//Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

//zod schemas to check email and password constraints
const passwordSchema = zod.string().min(6);
const emailSchema = zod.string().email();

//generating token after checking schema
function signJwt(username, password) {
  let token = null;
  //safeParse returns an object with properties: data and a boolean success
  if (
    emailSchema.safeParse(username).success &&
    passwordSchema.safeParse(password).success
  ) {
    token = jwt.sign({ username }, jwtPassword, { expiresIn: "1h" });
  } else {
    token = null;
  }
  return token;
}

//Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

function verifyJwt(token) {
  let res;

  if (!token) {
    res = false;
  }

  jwt.verify(token, jwtPassword, (err, decoded) => {
    if (err) {
      res = false;
    } else {
      res = true;
    }
  });

  return res;
}

//Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise

function decodeJwt(token) {
  const decoded = jwt.decode(token, { complete: true });
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
