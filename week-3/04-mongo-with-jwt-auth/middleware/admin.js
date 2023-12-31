// Middleware for handling auth

const {User, Admin, Course} = require('../db/index')
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const user = await User.findOne({username: req.body.username})

    if(user){
        next()
    }
    else{
        res.status(404).send("You've to signup")
    }
}

module.exports = adminMiddleware;