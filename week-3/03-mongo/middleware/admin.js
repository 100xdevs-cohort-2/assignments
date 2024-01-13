const { Admin } = require("../db");


// Middleware for handling auth
async function adminMiddleware(req, res, next) {

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const { username, password } = req.headers;
        if (!username || !password) {
            return res.status(401).json({ msg: "Not authorized" });
        }

        const admin = await Admin.findOne({ username: username, password: password });

        if (!admin) {
            return res.status(401).json({ msg: "Not authorized" });
        } else {
            next();
        }

    } catch (error) {
        return res.status(500).json({ msg: "Internal Server error" });
    }
}

module.exports = adminMiddleware;