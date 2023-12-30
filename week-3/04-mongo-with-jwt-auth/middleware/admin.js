const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let authorizationHeader = req.headers['authorization'];
    console.log(authorizationHeader);

    if(authorizationHeader == null || !authorizationHeader.startsWith('Bearer '))
        return res.status(400).json({"message": "Auth token is missing"});

    const token = authorizationHeader.split(' ')[1];

    if(!jwt.verify(token, SECRET_KEY))
        return res.status(400).json({"message": "Invalid token"});

    next();
}

module.exports = adminMiddleware;