const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod=require('zod');


function isValid(email,pwd){
    const emailSchema=zod.string().email();
    const pwdSchema=zod.string().min(6);

    return emailSchema.safeParse(email).success && pwdSchema.safeParse(pwd).success;
}

function signJwt(email, password) {
    if(! isValid(email,password) ) return null;

    const token=jwt.sign({email},jwtPassword);
    return token;
}

function verifyJwt(token) {
    if(!token) return false;
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch (e){
        return false;
    } 
}

function decodeJwt(token) {
    const payload=jwt.decode(token);
    return !!payload
    
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}

// console.log(decodeJwt('token'))