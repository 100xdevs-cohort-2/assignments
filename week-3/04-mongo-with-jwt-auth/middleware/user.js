const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const jwtToken = token.split(" ")[1];

    try{
        const decoded = jwt.verify(jwtToken,JWT_SECRET);
        req.username = decoded.username;
        next()
    }catch(e){
        console.log(e)
        return res.status(403).json({
            message:"You are not authenticated"
        })
    }
}

module.exports = userMiddleware;