const jwt = require('jsonwebtoken');
const { jwtPassword } = require('../02-jwt');
const jwtPassword = '123456';


function performChecks(email,pass) {
    if (!emailSchema.safeParse(email).success) {
        return false;
    }
    if (!passSchema.safeParse(pass).success) {
        return false;
    }
    return true;
}

function verifyJwt(token) {
    try {
        jwt.verify(token,jwtPassword); 
    } catch (error) {
        return false;
    }
    return true;
}


function signJwt(username, password) {
    
    if(!performChecks(username,password)){
        return null;
    }
    return  jwt.sign({username:username, password: password},jwtPassword);
}

function decodeJwt(token) {
    
    return jwt.decode(token).username;
}

module.exports = {signJwt,decodeJwt,verifyJwt,jwtPassword}