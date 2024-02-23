const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

/* Generates a JWT for a given username and password. */
function signJwt(username, password) {
    // Your code here
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const token = jwt.sign({
        username
    }, jwtPassword);

    return token;
}

/* Verifies a JWT using a secret key. */
function verifyJwt(token) {
    // Your code here
    let ans = true;
    try{
        jwt.verify(token, jwtPassword)
    }
    catch(e){
        ans = false;
    }
    return ans;
}

/* Decodes a JWT to reveal its payload without verifying its authenticity. */
function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token);
    if(decoded) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
