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
<<<<<<< HEAD
function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  }
  
function signJwt(username, password) {
    if(isValidEmail(username)&& password.length>=6){
        const token=jwt.sign({username:username},jwtPassword);
        return token;

    }else return null;
=======
function signJwt(username, password) {
    // Your code here
>>>>>>> origin/master
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
<<<<<<< HEAD
    try{
        ans=jwt.verify(token,jwtPassword);
        return true
    }catch(error){
        return false;
    }
=======
    // Your code here
>>>>>>> origin/master
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
<<<<<<< HEAD
    const response= jwt.decode(token);
    if(response){
        return true;
    }else{
        return false;
    }


=======
    // Your code here
>>>>>>> origin/master
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
