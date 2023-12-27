const z=require('zod')
const jwt = require('jsonwebtoken');

const jwtPassword = 'secret';
const emailSchema = z.string().email();
const passSchema = z.string().min(6);

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
    if(!emailSchema.safeParse(username).success || !passSchema.safeParse(password).success){
        return null;
    }
    const token=jwt.sign({
        username: username
    },jwtPassword);
    return token;
}

// const token = signJwt("raghavgmail.com", "323");
// console.log(token);

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    return jwt.verify(token,jwtPassword,(err,decoded)=>{
        if (err) {
            return false;
        } else {
            return true;
        }
    })
}


// const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhZ2hhdkBnbWFpbC5jb20iLCJpYXQiOjE3MDMwODA3NTZ9.sbnFhdZItaVYbbrunmN89cnWr-2TJofGI6g41mkQ5-M");
// console.log(ans);

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {boolean} 
 */
function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if(decoded==null) return false;
    return true;
}

// const ans = decodeJwt("kpXVCJ9.eyJ1c2VybmFtZSI6InJhZ2hhdkBnbWFpbC5jb20iLCJpYXQiOjE3MDMwODA3NTZ9.sbnFhdZItaVYbbrunmN89cnWr-2TJofGI6g41mkQ5-M");
// console.log(ans);


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
