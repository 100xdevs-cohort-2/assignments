// Middleware for handling auth

//** import admin db model */
const { Admin } = require("../db/index.js")

// Implement admin auth logic
// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
async function adminMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password

    const response = await Admin.findOne({
        username: username,
        password: password
    })

    //if respoonse exist then proceed for next() else give error
    if (response) next()
    else res.status(403).json({
        msg: "Admin does not exist"
    })
}

module.exports = adminMiddleware;