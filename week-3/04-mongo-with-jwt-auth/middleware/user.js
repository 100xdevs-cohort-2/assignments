const jwt = require('jsonwebtoken')
const jwtPassword = 'secret';
const { User } = require('../db/index')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        const decode = jwt.verify(token, jwtPassword)
        const { id } = decode;
        const user = await User.findById(id);
        if(!user) return res.sendStatus(401);
        return next();
    }
    catch(err){
        return res.sendStatus(401);
    }

}

module.exports = userMiddleware;
