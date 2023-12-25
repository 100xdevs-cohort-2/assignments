const { Admin } = require("../db/index")
const bcrypt = require('bcrypt')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers
    const adminExists = await Admin.findOne({ username }).exec()
    if (!adminExists) return res.status(401).json({ message: "UnAuthorised: Admin does not exist" })

    if (!(await bcrypt.compare(password, adminExists.password))) return res.status(403).json({ message: "Invalid credentials" })
    next()
}

module.exports = adminMiddleware;