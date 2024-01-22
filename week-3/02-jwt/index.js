const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const { z } = require("zod");

const secretKey = jwtPassword;


const emailSchema = z.string().email()

const passwordSchema = z.string().min(6)

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
    try{
        emailValidation = emailSchema.parse(username)
        passwordValidation = passwordSchema.parse(password)
    }
    catch{
        return null
    }
    
    token = jwt.sign({ username: username, password: password }, secretKey)
    console.log(token)
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
function verifyJwt(tokenn) {
    try{
        //console.log("Token: ",tokenn)
        ans = jwt.verify(tokenn, secretKey)
        //console.log(ans)

    }
    catch{
        return false
    }
    return true
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(tokenn) {
    let tempToken = tokenn.split('.')
    if(tempToken.length != 3){
        return false
    }

    try{
        ans = jwt.decode(tokenn, secretKey)
        //console.log(token)
        console.log(`ans for ${secretKey}: ${ans}`)
    }
    catch{
        return false
    }

    return true
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
