const jwt = require('jsonwebtoken');
const jwtPassword = '123456';

function verifyJwt(token) {
    console.log("jwt verify");
    try {
        jwt.verify(token,jwtPassword); 
    } catch (error) {
        return false;
    }
    return true;
}


function signJwt(username, password) {
    console.log("sign sign");
    return  jwt.sign({username:username},jwtPassword);
}

function decodeJwt(token) {
    console.log("jwt decode");
    return jwt.decode(token).username;
}

module.exports = {signJwt,decodeJwt,verifyJwt,jwtPassword}