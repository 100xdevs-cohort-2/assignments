// Updated to handle JWT authentication
const jwt = require('jsonwebtoken');
const { Admin } = require('../db/index');

async function adminMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Extract token from headers

        if (!token) {
            return res.status(401).json({ error: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) {
            return res.status(401).json({ error: 'Unauthorized admin' });
        }

        req.admin = admin;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = adminMiddleware;
