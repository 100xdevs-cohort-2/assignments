const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const emailSchema = zod.string().email();
const passwordSceham = zod.string().min(6);

function signJwt(username, password) {
  // Your code here

  const resUsername = emailSchema.safeParse(username);
  const resPassword = passwordSceham.safeParse(password);

  if (!resUsername.success || !resPassword.success) return null;

  const signature = jwt.sign({ username }, jwtPassword);

  return signature;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  // Your code here

  let ans = true;

  try {
    jwt.verify(token, jwtPassword);
  } catch (error) {
    ans = false;
  }

  return ans;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  // Your code here

  const decoded = jwt.decode(token);

  console.log(decoded);

  if (decoded) return true;
  else return false;
}

// practice

// const value = {
//   name: "Hashir",
//   accountNumber: 123445534,
// };

// const token = jwt.sign(value, "secret");

// // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFzaGlyIiwiYWNjb3VudE51bWJlciI6MTIzNDQ1NTM0LCJpYXQiOjE3MDMzMjc5NDJ9.deBNR0MRtBVm8Rcv_SNDylPlwoIHyFvqYquz8xLqY2s

// console.log(token);

// console.log(signJwt("hashiryameen8@gmail.com", "12345678"));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2hpcnlhbWVlbjhAZ21haWwuY29tIiwiaWF0IjoxNzAzMzI5MTQ5fQ.JgxaHBTS-5fgWb6NxlWbJeC0NuaPMX6GShlGPkw5xVg

// console.log(
//   decodeJwt(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2hpcnlhbWVlbjhAZ21haWwuY29tIiwiaWF0IjoxNzAzMzI5MjMzfQ.mvkA00-_3JL1G8bji0q7_SYVuJ1e2M22PhV4we9Rl8I"
//   )
// );

console.log(
  verifyJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2hpcnlhbWVlbjhAZ21haWwuY29tIiwiaWF0IjoxNzAzMzI5MjMzfQ.mvkA00-_3JL1G8bji0q7_SYVuJ1e2M22PhV4we9Rl8I"
  )
);

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
