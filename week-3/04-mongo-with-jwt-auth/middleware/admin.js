const { verifyJwt } = require("../../02-jwt");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

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

module.exports = adminMiddleware;