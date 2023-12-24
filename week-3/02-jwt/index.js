const jwt = require('jsonwebtoken');
const z = require('zod')
const jwtPassword = 'secret';
const emailSchema = z.string().email();
const passSchema = z.string().min(6);

function performChecks(email,pass) {
    if (!emailSchema.safeParse(email).success) {
        return false;
    }
    if (!passSchema.safeParse(pass).success) {
        return false;
    }
    return true;
}

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
    // Your code here
    if(!performChecks(username,password)){
        return null;
    }
    return  jwt.sign({username:username, password: password},jwtPassword);
   
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
    try {
        jwt.verify(token,jwtPassword); 
    } catch (error) {
        return false;
    }
    return true;
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
    let data = jwt.decode(token);
    if (data === null) {
        return false;
    }
    return true;
}
module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};

