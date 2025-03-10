const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
// so now for checking the user name and password here using the zod 
const zod = require('zod');
const scheamusername = zod.string().email();
const scheampassword = zod.string().min(6);


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
    // so now passing the both value here 
    const user = scheamusername.safeParse(username);
    const pass = scheampassword.safeParse(password);
    // so now if any of them fail return null
    if(!user.success || !pass.success){
        return null
    }
    const token = jwt.sign({username} , jwtPassword);
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
    // Your code here
    // so now here we have to verify it with this 
    let verification = true
    try{
        const verified = jwt.verify(token , jwtPassword);
        if(verified){
            verification = true
        }
    }catch{
        verification = false
    }
    return verification
    
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
    const decode = jwt.decode(token)
    if(decode){
        return true
    }else{
        return false
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
