// Middleware for handling auth
const { Admin } = require("../db/index.js");

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    if(!(req.headers['username'] && req.headers['password'])) {
        return res.status(403).send('Please provide username and password');
    }
    const isAdmin =await Admin.findOne({userName: req.headers['userName'], password: req.headers['password']}).exec();
    if(!isAdmin) {
        return res.status(403).send('Invalid credentials');
    }
    next();
}

module.exports = adminMiddleware;