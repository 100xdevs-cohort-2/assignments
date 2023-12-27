const {User} = require("../db/index")

async function userMiddleware(req, res, next) {
    const results= await User.find({
        username: req.headers['username'],
        password: req.headers['password']
    })
    if(!results.length){
        res.status(403).send("Incorrect credentials");
    }
    next();
}

module.exports = userMiddleware;