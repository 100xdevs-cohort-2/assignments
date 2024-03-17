const {Admin} = require("../db/index")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {a
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const {username, password} = JSON.parse(req.headers);
    const admin = await Admin.findOne({username, password});
    if(!admin) {
        res.json({msg: "username or password is not correct"});
        return;
    }

    next();
}

module.exports = adminMiddleware;