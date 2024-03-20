const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;

    try {
        const admin = await Admin.findOne({
            username: username,
            password: password
        });

        if (admin) {
            next();
        } else {
            res.status(403).json({
                message: "Admin doesn't exist"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while trying to authenticate the admin",
            error: error.message
        });
    }
}

module.exports = adminMiddleware;
