const { verifyJwt } = require("../../02-jwt");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        let token = req.headers.Authorization;
    } catch (error) {
        res.status(404).json({message: "Authorisation details missing"});
    }
    if(!verifyJwt(token)){
        res.status(404).json({message:"Please log in"});
    }
    
    next();
}

module.exports = userMiddleware;