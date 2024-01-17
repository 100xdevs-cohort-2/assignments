const jwt = require("jsonwebtoken");
// Importing the Zod library for input validation.
const zod = require("zod");
const jwtPassword = "secret";

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

// For email validation, use Zod library.
// Create a schema for email.
const schema = zod.string().email();

function signJwt(username, password) {
  // Create a token containing the username and password and return it to the user.
  let token = jwt.sign({ username: username }, password);
  // Parse it to compare with schema defined earlier and store the value in response.
  // If the schema type and the data type of the username match, it will return success as true else false.
  const email = schema.safeParse(username);
  // If the password length is less than 6 or the username is not a valid email, return null else return the token.
  if (password.length < 6 || !email.success) {
    return null;
  } else {
    return token;
  }
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
  try {
    // Use .verify() function which takes the token and the password to verify the username with password.
    // If successful, return true.
    const verifiedData = jwt.verify(token, jwtPassword);
    return true;
  } catch (err) {
    // If verification fails, return false stating invalid token.
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
  // Use .decode() function which takes the token and returns the decoded payload JSON object containg some data along with username.
  // It does not do any verification operation on the token.
  const decodedData = jwt.decode(token);
  if (decodedData) {
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