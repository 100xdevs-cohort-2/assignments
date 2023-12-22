const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

//**for email validation we can use "zod" library */
const zod = require("zod")

//schema for email and password
const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6) //min letter for password must be 6


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
    //here username is email
    const userRespone = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)

    if (!userRespone.success || !passwordResponse.success) {
        return null;
    }
    else {
        const token = jwt.sign({ username }, jwtPassword)
        return token
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
        //verify and decode
        const decode = jwt.verify(token, jwtPassword)
        return true;
    }
    catch (e) {
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
    const decoded = jwt.decode(token)
    if (decoded) return true;
    else return false;
}


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
