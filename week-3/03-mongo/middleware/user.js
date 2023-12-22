const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
    const admin = await User.findOne({ username: req.headers.username });
    if (admin.username == req.headers.username && admin.password == req.headers.password)
        next();
    else
        res.sendStatus(401);
}

module.exports = userMiddleware;