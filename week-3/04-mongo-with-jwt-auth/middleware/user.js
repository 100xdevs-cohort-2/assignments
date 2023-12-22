// Updated to handle JWT authentication
const { User } = require('../db/index');
const jwt = require('jsonwebtoken');

async function userMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Extract token from headers

        if (!token) {
            return res.status(401).json({ error: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized user' });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = userMiddleware;
