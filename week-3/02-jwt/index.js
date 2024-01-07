const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');


const usernameZodSchema = zod.string().email();
const passwordZodSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = usernameZodSchema.safeParse(username);
    const passwordResponse = passwordZodSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success)
        return null;
    else{
        const token = jwt.sign({
            username,
            password
        },jwtPassword);
        return token;
    }
}




function verifyJwt(token) {
    // Your code here
    let ans = false;
    try{
   const verified = jwt.verify(token,jwtPassword);
    ans = true;
    }
    catch(err){

    }
    return ans;

}




function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token); // for decoding we dont need secreat , decode function just convert jwt token into original form before jwt singining.
    if(decoded)
        return true;
    else
        return false;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
