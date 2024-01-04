const jwt = require('jsonwebtoken');
require('dotenv').config({path: "config.env"});

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const jwtToken = req.headers.authorization;
    const words = jwtToken.split(' ');
    if(words.length < 2) return res.json({msg : "invalid authorization"});
    const token = words[1];
    
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.username){
            console.log("user verified successfully")
            next();
        }else{  
            return res.json({msg : "invalid authorization"});
        }
    }
    catch(e){
        return res.json({msg : "invalid authorization"})
    }
}

module.exports = userMiddleware;