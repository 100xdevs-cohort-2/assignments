// Middleware for handling auth
const jwtObject = require("../webToken");
const {Admin} = require("../db");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // expecting jwt in authorization

    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(token) {
        token = token.replace(/^Bearer\s+/,""); //getting rid of bearer string
        try {
          jwtObject.jwt.verify(token, jwtObject.jwtSecret);
        } catch(err) {
            res.status(500).send("Could not verify the token passed! Access denied!");
            return;
        }

        const jwtData = jwtObject.jwt.decode(token);
        const username = jwtData.username || '';

        const adminExists = Admin.findOne({
            username: username
        });

        if(!adminExists) {
            res.status(404).send("Access Denied!");
            return;
        }
    } else {
        res.status(404).send("Access denied! Token is missing!");
        return;
    }
    next()

}

module.exports = adminMiddleware;