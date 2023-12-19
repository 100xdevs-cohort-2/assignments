const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

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
    // Validate the username as a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        return null;
    }

    // Validate the password length
    if (password.length < 6) {
        return null;
    }

    // Sign the JWT with the provided payload and secret key
    const payload = { username, password };
    const token = jwt.sign(payload, jwtPassword);

    return token;
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
        // Verify the JWT using the secret key
        jwt.verify(token, jwtPassword);
        return true;
    } catch (error) {
        // If verification fails, return false
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
    try {
        // Decode the JWT to reveal its payload
        const decodedPayload = jwt.decode(token);
        return decodedPayload;
    } catch (error) {
        // If decoding fails, return false
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
