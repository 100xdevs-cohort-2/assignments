const { User } = require('../db/index')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let auth_token =  req.headers.authorization;
    try {
        let user = await User.findOne({auth_token: auth_token});
        if(!user) {
            res.status(404).json({ message : "User Not Found"});
            return;
        }
        next();
    } catch(err) {
        res.status(500).json({ message : "Internal Server Error - User middleware"});
    }
}
module.exports = userMiddleware;