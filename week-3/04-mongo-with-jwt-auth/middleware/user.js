const jwt = require("jsonwebtoken");
require('dotenv').config();
const jwtPassword = process.env.jwtPassword;

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    try{
        const payload = jwt.verify(token, jwtPassword);
        req.user = payload;
        next();
    } catch(err) {
        res.status(401).json({message: "Ivalid token"});
    }
}

module.exports = userMiddleware;