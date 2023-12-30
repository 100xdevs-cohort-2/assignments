const {Admin} = require('../db/index')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    try {
        const username = req.headers['username'];
        const password = req.headers['password'];
        
        const results = await Admin.findOne({username: username});

        if(results == null || results['password'] != password)
            return res.status(404).json({"message": "Either email or password is incorrect"});

        next();

    } catch(e) {
        console.log("Error: ", e);
        throw e;
    }


}

module.exports = adminMiddleware;