const jwt = require("jsonwebtoken");
const JWT_SECRET = "ravinder";
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization;
    let words = token.split(" ");
    let jwtToken = words[1];


    try{
        let decoded = jwt.verify(jwtToken, JWT_SECRET);
    console.log(decoded)

        if(decoded.username){
            next();
        }else{
            res.status(403).json({
                message:"you are not authenticated"
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            message:"Invalid inputs"
        })
    }
}

module.exports = adminMiddleware;