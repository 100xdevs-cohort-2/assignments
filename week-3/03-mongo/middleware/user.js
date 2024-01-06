const { User } = require('../db/index')
async function userMiddleware(req, res, next) {
    const { username, password } = req.headers;
    const reqUser = await User.findOne({ username });
    if (!reqUser || reqUser.password != password) {
        return res.status(401).json({ message: "auth failed" })
    }
    req.user = reqUser;
    next();
}

module.exports = userMiddleware;