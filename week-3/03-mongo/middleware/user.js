const {User} = require('../db/index')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    try {
        const username = req.headers['username'];
        const password = req.headers['password'];

        const results = await User.findOne({username: username});

        if(results == null || results['password'] != password)
            return res.status(404).json({"message": "Either email or password is incorrect"});

        next();

    } catch(e) {
        console.log("Error: ", e);
        throw e;
    }
}

module.exports = userMiddleware;