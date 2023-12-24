const jwt = require('jsonwebtoken')
const jwtPassword = 'secret';
const { Admin } = require('../db/index')
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        const decode = jwt.verify(token, jwtPassword)
        const { id } = decode;
        const admin = await Admin.findById(id);
        if(!admin) return res.sendStatus(401);
        return next();
    }
    catch(err){
        return res.sendStatus(401);
    }
}

module.exports = adminMiddleware;
