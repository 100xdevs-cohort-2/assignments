
const jwt= require('jsonwebtoken');


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected


    const token= req.headers.authorization;

    const realtoken= token.split(" ")[1];

    try {
        const jwtToken= jwt.verify(realtoken, 'secret')

        if (jwtToken.username){
            next();
          
        }
        else{
            res.status(401).send('Unauthorized access')
        }
        
    } catch (error) {
        res.send("Invalid token")
    }
   
}

module.exports = adminMiddleware;