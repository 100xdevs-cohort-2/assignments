
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
function userMiddleware(req, res, next) {
   const token=req.headers.authorization
const words=token.split("")            //Split Bearer and no.s into an array
const jwtToken=words[1]                //we want the nos
const decodedValue=jwt.verify(jwtToken,JWT_SECRET)            //verify the nos in header with jwt for that admin saved in db
if(decodedValue.username) {             //if the user exists
next()
}else{
    res.status(403).json({
        msg:"You are not authenticated"
    })
}
}

module.exports = userMiddleware;