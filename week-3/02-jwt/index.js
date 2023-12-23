const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

/**
 * Generates a JWT for a given username and password.
 *
 *  - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 *  - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {

     const usernameResponse = emailSchema.safeParse(username);
     const passwordResponse = passwordSchema.safeParse(password);

     if(!usernameResponse.success || !passwordResponse.success){
        return null;
     }

     const signature = jwt.sign({username},  jwtPassword);  //generate jwtToken
    return signature;
    }    

/**
 * Verifies a JWT using a secret key.
 *
 * - The JWT string to verify.
 *Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {

  let ans = true;
  try{
    jwt.verify(token, jwtPassword);   //verifying jwt token
  }  
  catch(e){
    ans = false;
  }
  return ans;

}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 *  - The JWT string to decode.
 * } The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {

   const decoded = jwt.decode(token);
   if(decoded){
    return true;
   }
   else{
    return false;
   }

}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
