const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
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

//for emial validation using the zod library;
//Create schema for jwt payload 
const jwtpayload = zod.object(
    {
        username: zod.string().email(),
        password: zod.string().min(6),
    }
)
function signJwt(username, password) {
    // Your code here
    const validation = jwtpayload.safeParse({username,password})
    const token = jwt.sign({username,password},jwtPassword)
    if (validation.success) {
        return token
    } else {
        return null;
    }
    // var token = jwt.sign(jwtpayload,jwtPassword);

    // const email = jwtpayload.safeParse(username);
    // const Password = jwtpayload.safeParse(password)

    // if (!Password.success || !email.success){
    //     return null
    // }
    // else{
    //     return token
    // }
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
    try{
        const verifiedToken = jwt.verify(token,jwtPassword);
        return true
    } catch(err) {
        return false
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
    const decodedData = jwt.decode(token);
    if (decodedData) {
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
