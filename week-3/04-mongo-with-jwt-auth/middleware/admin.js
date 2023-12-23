const jwt = require("jsonwebtoken");
const jwtSecret = "12345";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const AuthHeaders = req.headers["authorization"].split(" ");
        const token = AuthHeaders[1];
        const isBearer = AuthHeaders[0] === "Bearer"? true : false;
        if(token && isBearer) {
            const decodedToken = jwt.verify(token,jwtSecret);
            if(decodedToken) {
                req.user = decodedToken.username;
                next();
            }
        }
    } catch (e) {
        res.json("Error occurred in auth check");
    }



}

module.exports = adminMiddleware;