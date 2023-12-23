const jwt = require("jsonwebtoken");
const jwtSecret = "12345";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
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

module.exports = userMiddleware;