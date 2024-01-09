// Middleware for handling auth
const { Admin } = require('../db/index')
async function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;
    const reqUser = await Admin.findOne({ username });
    if (!reqUser || reqUser.password != password) {
        return res.status(401).json({ message: "auth failed" })
    }
    req.user = reqUser;
    next();

}

module.exports = adminMiddleware;