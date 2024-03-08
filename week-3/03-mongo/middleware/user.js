const { User } = require('../db/index')
const bcrypt = require('bcrypt')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers
    const userExists = await User.findOne({ username }).exec()
    if (!userExists) return res.status(401).json({ message: "UnAuthorised: User does not exist" })

    if (!(await bcrypt.compare(password, userExists.password))) return res.status(403).json({ message: "Invalid credentials" })
    next()
}

module.exports = userMiddleware;