const {JWT_SECRET} = require("../config")

function userMiddleware(req, res, next) {
// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
const token= req.headers.authorization;
// get the token bearer
const words=token.split(" ");
const jwtToken = words[1];
const decodedValue =   jwt.verify(jwtToken, JWT_SECRET);

//also you sould check the type: "admin | "user

if(decodedValue.username){
  next();
}else{
res.status(403).json({
msg:" you are not authenticated"
})
}


}

module.exports = userMiddleware;