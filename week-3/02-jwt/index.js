//Done ✅ 

const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod')

function signJwt(username, password) {
    // Your code here
    const myschema = zod.object({
        username : zod.string().email(),
        password : zod.string().min(6)
    })
    const result = myschema.safeParse({
        username : username,
        password : password
    })
    if(!result.success){
        return null;
    }
const payload = {username : username}
    const token = jwt.sign(payload,jwtPassword);
    return token;
}

function verifyJwt(token) {
    // Your code here
    try{
        const verified = jwt.verify(token,jwtPassword);
    }catch(error){
        return false;
    }
    return true;
}

function decodeJwt(token) {
    // Your code here
    const decoding = jwt.decode(token);
    if(decoding){
        return true;
    }else{
        return false;
    }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
