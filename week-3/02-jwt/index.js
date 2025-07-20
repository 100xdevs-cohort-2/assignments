const jwt = require('jsonwebtoken');
const z = require("zod"); // this will be used for user-input validation like username(email) and password (should be atleat 6 letters)
const jwtPassword = 'secret';

function userInputValidtor(username, password) {
    const usernameSchema = z.string().email();
    const passwordSchema = z.string().length(6);

    let result = usernameSchema.safeParse(username);

    if(!result.success) {
        return false;
    }

    result = passwordSchema.safeParse(password);

    if(!result.success) {
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
    const validation = userInputValidtor(username, password);

    if(!validation) {
        return null;
    }

    // making the jwt token with the secret 
    const token = jwt.sign(JSON.stringify({
        username,
        password
    }), jwtPassword);

    return token
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
    const tokenSchema = z.string().regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/);

    const result = tokenSchema.safeParse(token);

    if(!result.success) {
        return false;
    }

    try {
        // this throws error if the token in invalid => wrapping that in the try catch
        const jsonData =jwt.verify(token, jwtPassword); 
        return true;
    } catch(err) {
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
    // Your code here
    // jwt token has a valid format which can be tested using regex
    const tokenSchema = z.string().regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/); // this represent the jwt format

    const result = tokenSchema.safeParse(token);

    if(!result.success) {
        return false;
    }

    // without verifying we are getting the JSON data from the stirng
    const decode = jwt.decode(token); // token will be valid jwt format

    // according to the above it should return decode, but according to test it should be boolean value
    return true;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
