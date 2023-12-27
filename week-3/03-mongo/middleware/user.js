const {User} = require('../db/index');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const uname = req.headers.username;
    const passwd = req.headers.password;
    const user = await User.findOne({username:uname});

    if(user.password === passwd){
        req.User = user;
        next();
    }else{
        res.send({msg:"Username or Password are Wrong!!"});
    }
}

module.exports = userMiddleware;