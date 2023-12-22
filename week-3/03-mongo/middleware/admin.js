// Middleware for handling auth
const { Admin } = require('../db/index');

async function adminMiddleware(req, res, next) {
    const admin = await Admin.findOne({ username: req.headers.username });
    if (admin.username == req.headers.username && admin.password == req.headers.password)
        next();
    else
        res.sendStatus(401);
}

module.exports = adminMiddleware;