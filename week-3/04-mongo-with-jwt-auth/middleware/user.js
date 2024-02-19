const jwt = require("jsonwebtoken");
const JWT_SECRET = "ravinder";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization;
    let words = token.split(" ");
    let jwt = words[1];

    try{
        let decoded = jwt.verify(jwt, JWT_SECRET);
        if(decoded.username){
            req.username = decoded.username;
            next();
        }else{
            res.status(403).json({
                message:"you are not authenticated"
            })
        }
    }catch(err){
        res.json({
            message:"Invalid inputs"
        })
    }
}

module.exports = userMiddleware;