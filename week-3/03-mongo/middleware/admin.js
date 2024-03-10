const { Admin } = require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const user = req.headers.username
    const pass = req.headers.password
    try {
        const findUser = await Admin.findOne({username: user, password: pass })
        if (findUser) {
            next()
        } else {
            res.send("Unauthorized")
        }
    }
    catch (error) {
        res.status(401).json({ error: "Internal Server Error " })
    }

}

module.exports = adminMiddleware;