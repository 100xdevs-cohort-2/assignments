const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = 'secret';

// /**
//  * Generates a JWT for a given username and password.
//  *
//  * @param {string} username - The username to be included in the JWT payload.
//  *                            Must be a valid email address.
//  * @param {string} password - The password to be included in the JWT payload.
//  *                            Should meet the defined length requirement (e.g., 6 characters).
//  * @returns {string|null} A JWT string if the username and password are valid.
//  *                        Returns null if the username is not a valid email or
//  *                        the password does not meet the length requirement.
//  */

const schema = zod.string().email()
const schema1 = zod.string().min(6)

function signJwt(username, password) {
    const emailresponse = schema.safeParse(username)
    const passwordresponse = schema1.safeParse(password)
    if (!emailresponse.success || !passwordresponse.success) {
        return null
    } else {
        const token = jwt.sign({ username }, jwtPassword)
        return token;
    }
}

// /**
//  * Verifies a JWT using a secret key.
//  *
//  * @param {string} token - The JWT string to verify.
//  * @returns {boolean} Returns true if the token is valid and verified using the secret key.
//  *                    Returns false if the token is invalid, expired, or not verified
//  *                    using the secret key.
//  */

function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword)
        return true
    }
    catch (e) {
        return false
    }
}

// /**
//  * Decodes a JWT to reveal its payload without verifying its authenticity.
// *
// * @param {string} token - The JWT string to decode.
// * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
// *                         Returns false if the token is not a valid JWT format.
// */

function decodeJwt(token) {
    const decoded = jwt.decode(token)
    if (decoded) {
        return true
    } else {
        return false
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
