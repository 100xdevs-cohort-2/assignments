const { User } = require('../db/index')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;
    try{
        const foundUser = await User.findOne({
            username,
            password
        })
        if(foundUser) next();
        else{
            return res.status(404).json({
                msg : "User doesn't exists"
            })
        }
    }
    catch(e){
        console.log("error in admin middleware")
    }
}
module.exports = userMiddleware;