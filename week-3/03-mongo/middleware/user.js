const {User} =require('../db');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const user_name =  req.headers.username;
    const pass_word = req.headers.password;

    const response = await User.findOne({
        username:user_name,
        password:pass_word
    })

    if(response){
        next();
    }

    res.status(403).json({msg:"Invalid user creds"});



}

module.exports = userMiddleware;