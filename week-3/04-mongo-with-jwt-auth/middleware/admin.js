const { verifyJwt } = require("../jwt");


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    console.log("request reached to admin middleware");

    try {
        var token = req.headers.authorization;
    } catch (error) {
        res.status(404).json({message: "Authorisation details missing"});
        return;
    }
    if(!verifyJwt(token)){
        res.status(404).json({message:"Please log in again"});
        return;
    }
    
    next();
}

module.exports = adminMiddleware;