
const jwt= require('jsonwebtoken')


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token= req.headers.authorization;

    const realtoken= token.split(" ")[1];

    const jwtToken= jwt.verify(realtoken, 'secret')

     if (jwtToken.username){

        req.username= jwtToken.username;
        next();

     }
     else{
        res.status(401).json({
            message:'Unauthorized access'
        })
     }

}



module.exports = userMiddleware;