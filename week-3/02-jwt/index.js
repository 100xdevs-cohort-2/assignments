const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

const { z } = require("zod");

// Define the email schema
const emailSchema = z.string().email();

// Define the password schema
const passwordSchema = z.string().min(6);

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
function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );

  return signature;
}

function verifyJwt(token) {
    let ans = true;
    try {
       jwt.verify(token, jwtPassword);
    } catch(e) {
       ans = false;
    }
    return ans;
}

function decodeJwt(token) {
    // true, false
    const decoded = jwt.decode(token);
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
