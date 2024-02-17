const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod')

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
    const emailSchema = zod.string().email();
    const passSchema = zod.string().min(6);

    if(emailSchema.safeParse(username).success && passSchema.safeParse(password).success)
    {
        return jwt.sign({username, password}, jwtPassword);
    }
    else
    {
        return null;
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
    let verified = undefined;
    try{
        jwt.verify(token, jwtPassword);
        verified = true;
    }
    catch{
        verified = false;
    }

    return verified;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {boolean} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    const obj = jwt.decode(token);
    if(obj === null) return false;
    else return true;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
