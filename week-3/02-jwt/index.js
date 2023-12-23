const jwt = require('jsonwebtoken');
<<<<<<< HEAD
<<<<<<< HEAD
const jwtPassword = "secret";
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
=======
const jwtPassword = 'secret';
>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b

=======
const jwtPassword = 'secret';

>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b

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
<<<<<<< HEAD
<<<<<<< HEAD
     const usernameResponse = emailSchema.safeParse(username);
     const passwordResponse = passwordSchema.safeParse(password);

     if(!usernameResponse.success || !passwordResponse.success){
        return null;
     }

     const signature = jwt.sign({username},  jwtPassword);  //generate jwtToken
    return signature;
    }    

=======
=======
>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b
    // Your code here
}
>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b

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
<<<<<<< HEAD
  let ans = true;
  try{
    jwt.verify(token, jwtPassword);   //verifying jwt token
  }  
  catch(e){
    ans = false;
  }
  return ans;
=======
    // Your code here
>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b
=======
    // Your code here
>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b
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
<<<<<<< HEAD
   const decoded = jwt.decode(token);
   if(decoded){
    return true;
   }
   else{
    return false;
   }
=======
    // Your code here
>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b
=======
    // Your code here
>>>>>>> f56f0feac0b76bc94a161d9c725949f5138cbd6b
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
