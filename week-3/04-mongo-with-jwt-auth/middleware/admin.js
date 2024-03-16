const jwt = require("jsonwebtoken");
const jwt_secret = "adminmiddleware";
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.autorization; // token with both "Bearer + token"
    //use .split(" ") to split the Bearer snd Token
    const webtoken = token.split(" "); //['bearer'+"token"]
    const jwttoken = webtoken[1] //actual token

    try { 
        //use verify() function to which takes the token and the secret key to verify the username with password
        //If the Verification is scuccesfull, verifiedToken contain the decoded payload of the token
        const decodedPayloadToken = jwt.verify(jwttoken,jwt_secret);
        // check if the decodedPayloadToken contains a "username" property.
        if (verifiedToken.username) {
            //if it does, the user is Authticated.
            //Move to the next middleware or route.
            next();
        } else {
            //if it is not present, the user is not authenticated. send the error response.
            res.status(403).json({
                msg: "You are Authticated!",
            })
        }
    } catch(err) {
        //if the verification is failed, return stating invalid token
        res.status.json({
            msg: "Incorrect Inputs",
        })
    }
}

module.exports = adminMiddleware;