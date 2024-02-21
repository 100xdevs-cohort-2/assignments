const {JWT_SECRET} = require("../config");
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if(decodedValue.username){
        req.username = decodedValue.username;
        // this is actually done to get the username from the jwt itself
        // and this is passed on further , i.e, next middleware

        req.randomData = 'asnsnadklajsd';
        next()
    } else {
        res.status(403).json({
            msg: " YOU are not authenticated "
        })
    }
}

module.exports = userMiddleware;