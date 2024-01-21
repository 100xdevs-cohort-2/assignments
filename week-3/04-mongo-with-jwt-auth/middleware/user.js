const jwt = require("jsonwebtoken")
const jwtPassword = "usersecret";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const splitToken = token.split()
    const  jwtToken = splitToken[1]

    //use .verify() function which takes the token and the jwtpassword to verify the username with password
    //If the Verification is succesful, verifiedData contains the decoded payload of the token
    try {
        const decodedPayloadToken = jwt.verify(jwtToken,jwtPassword);
        //This line checks if the decoded JWT payload contains a "username" property.
        //if it does, it mean that token is valid and associated with a specific User.
        if (decodedPayloadToken.username) {
            //the req.username property is set to the "username" value extracted from the decoded Jwt payload
            req.username = decodedPayloadToken.username,
            req.random = "kjavkjfvbbhvdv" //is for some testing or debugging
        }
        next()
    } catch(err) {
        res.status(403).json({
            msg: "You are not Authenticated!"
        })
    }

}

module.exports = userMiddleware;