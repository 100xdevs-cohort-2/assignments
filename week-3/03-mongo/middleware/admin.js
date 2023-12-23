const {Admin} = require("../db/index")

async function adminMiddleware(req, res, next) {
    const results= await Admin.find({
        username: req.headers['username'],
        password: req.headers['password']
    })
    if(!results.length){
        res.status(403).send("Incorrect credentials");
    }
    next();
}

module.exports = adminMiddleware;