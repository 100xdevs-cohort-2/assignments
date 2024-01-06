// Middleware for handling auth
const jwt = require('jsonwebtoken');
const { Admin } = require('../db');
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { Authorization } = req.headers;
    const token = Authorization.split(' ')[1];
    try {
        const verify = jwt.verify(token, process.env.secretkey);
        const { id } = verify.data;
        const reqAdmin = await Admin.findById(id);
        if (!reqAdmin) throw "error";
        req.user = reqAdmin;
        next();
    } catch (error) {
        return res.status(401).json({ message: "auth failed" });
    }


}

module.exports = adminMiddleware;