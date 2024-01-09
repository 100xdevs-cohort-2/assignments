// Middleware for handling auth
const jwt = require('jsonwebtoken');
require('dotenv').config({path : 'config.env'});

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const jwtToken = req.headers.authorization;
    const words = jwtToken.split(' ');
    if(words.length < 2) return res.json({msg : "invalid authorization"});
    const token = words[1];
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.username){
            console.log("admin verified successfully")
            next();
        }else{  
            return res.json({msg : "invalid authorization"});
        }
    }
    catch(e){
        return res.json({msg : "invalid authorization"})
    }
}

module.exports = adminMiddleware;