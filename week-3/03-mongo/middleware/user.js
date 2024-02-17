const {User} = require('../db/index')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    let genUser = await User.findOne({username: username}).select('username password');
    if(genUser === undefined || genUser.password !== password)
    {
        return res.status(401).json({msg: "Please enter the correct credentials."});
    }

    next();
}

module.exports = userMiddleware;