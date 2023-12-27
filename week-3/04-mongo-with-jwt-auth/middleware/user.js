
const jwt = require('jsonwebtoken');
const UserSecret = "User";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const jwtToken = req.headers.authorization;
        const verification = jwt.verify(jwtToken,UserSecret);
        if(verification){
            req.user = verification;
            next();
        }else{
            res.json({message:"Invalid Token"})
        }
    }catch(err){
        res.status(500).json({err});
    }
}

module.exports = userMiddleware;