const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require('zod');

/**
 * Generate a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const schema = z.object({
    username : z.string().email(),
    password : z.string().min(6),
});
// const emailSchema = z.string().email();
// const passSchema = z.string().min(6);

function signJwt(username, password) {
    let user = {username, password};
    if(schema.safeParse(user).success){
        const token = jwt.sign({username},jwtPassword);
        return token;
    }else{
        return null;
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
        jwt.verify(token,jwtPassword);
        return true;
    } catch (error) {
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
    return jwt.decode(token) ? true : false;
}

//testing

// console.log(signJwt("pranav@jsjs.com","ueuu22"));

// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5hdkBqc2pzLmNvbSIsImlhdCI6MTcwOTIwMTU0M30.p189iv-te5h-62UXWR8UqbJxZTbll2L65SnDliBImGE"));

// console.log(verifyJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5hdkBqc2pzLmNvbSIsImlhdCI6MTcwOTIwMTU0M30.p189iv-te5h-62UXWR8UqbJxZTbll2L65SniBImGE',jwtPassword));

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
