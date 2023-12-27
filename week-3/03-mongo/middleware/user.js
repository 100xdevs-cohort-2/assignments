const { Admin, User, Course} = require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const user = User
            .findOne({
                username : req.headers.username,
                password : req.headers.password
            });
            console.log(user);
            next();
    }
    catch(err){
        res.status(400).send(err);
    }

}

module.exports = userMiddleware;