const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod')


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


//  const emailSchema = zod.string().email()
//  const passwordSchema = zod.string().min(6)


function signJwt(username, password) {
    // Your code here
    if (isValidGmail(username) == false) {
        return null
    }
    if (isValidGmail(username) && password.length >= 6) {
        const token = jwt.sign({ username: username }, jwtPassword)
        return token;
    } else {
        return null
    }


// by harkirat method
//      const usernameResponse = emailSchema.safeParse(username)
//      const passwordResponse = passwordSchema.safeParse(password)

//      if(!usernameResponse.success || !passwordResponse.success){
//         return null;
//      }

//     const signature = jwt.sign({
//         username
//     },jwtPassword)
//     return signature;

// }
}


function isValidGmail(username) {
    try {
        const emailSchema = zod.string().email()
        emailSchema.parse(username)
        return true
    } catch {
        return false
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
    try {
        const verifytoken = jwt.verify(token, jwtPassword);
    } catch (error) {
    return false
    }

    return true;
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
    const res = jwt.decode(token)
    if (res) {
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
