const { verifyJwt } = require("../jwt");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    console.log("request reached to user middleware");

    try {
        var token = req.headers.authorization;     
    } catch (error) {
        res.status(404).json({message: "Authorisation details missing"});
        return;
    }
    
    if(!verifyJwt(token)){
        res.status(404).json({message:"Please log in"});
        return;
    }
    next();
}

module.exports = userMiddleware;