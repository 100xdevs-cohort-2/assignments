const {User, Admin} = require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username

    const ifexist = User.findOne({username: username})

    if(ifexist !== null){
        next()
    }
    else{
        res.status(404).send("The User doesn't sign up yet")
    }
}

module.exports = userMiddleware;