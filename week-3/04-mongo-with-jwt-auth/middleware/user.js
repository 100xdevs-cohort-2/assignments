const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    let authorizationHeader = req.headers['authorization'];

    if(authorizationHeader == null || !authorizationHeader.startsWith('Bearer '))
        return res.status(400).json({"message": "Auth token is missing"});

    const token = authorizationHeader.split(' ')[1];

    if(!jwt.verify(token, SECRET_KEY))
        return res.status(400).json({"message": "Invalid token"});

    next();

}

module.exports = userMiddleware;