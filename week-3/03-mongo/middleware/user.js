const { User }  = require('../db/index.js');
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    if(!(req.headers['username'] && req.headers['password'])) {
        return res.status(403).send('Please provide username and password');
    }
    const isUser = User.findOne({userName: req.headers['userName'], password: req.headers['password']}).exec();
    if(!isUser) {
        return res.status(403).send('Invalid credentials');
    }
    next();
}

module.exports = userMiddleware;