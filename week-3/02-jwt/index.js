const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

const zod = require('zod');

// creating a schema for user
const User = zod.object({
    username: zod.string().email(),
    password: zod.string().length(6)
  });

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
    const response = User.safeParse({username:username, password:password});
    console.log(response);
    if(!response.success){
        return null;
    }
    else{
        let token = jwt.sign({username:username}, jwtPassword);
        console.log(token);
        return token;
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
    // Your code here
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        return true;
    }
    catch (err){
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
    const response= jwt.decode(token);
    if(response){
        return true;
    }else{
        return false;
    }
}

// let token = signJwt("shra@gmail.com", "123456");
// verifyJwt(token);


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
