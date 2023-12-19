const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod=require('zod');


function isValid(email,pwd){
    const emailSchema=zod.string().email();
    const pwdSchema=zod.string().min(6);

    return emailSchema.safeParse(email).success && pwdSchema.safeParse(pwd).success;
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
function signJwt(email, password) {
    if(! isValid(email,password) ) return null;

    const token=jwt.sign({email},jwtPassword);
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
    if(!token) return false;
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch (e){
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
    const payload=jwt.decode(token);
    return !!payload
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}

// console.log(decodeJwt('token'))

