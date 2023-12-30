const { verify } = require('../utils/jwt');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    let authHeader = req.headers.authorization;
    if (authHeader) {
        authHeader = authHeader.split(" ");
        if (authHeader[0] === 'Bearer') {
            const payload = verify(authHeader[1]);
            if (payload === null)
                return res.status(403).json({ msg: "Invalid token" });
            req.username = payload.username;
            next();
        }
    }
    else
        res.sendStatus(403);
}

module.exports = adminMiddleware;