const user = require('../db/index')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers['username']
    const existingUser = user.User.findOne({ username: username })
    if (!existingUser) {
        return res.status(404).send("No Entry")
    }
    next()
}

module.exports = userMiddleware;