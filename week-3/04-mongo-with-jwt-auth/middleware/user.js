const { User } = require('../db/index')
const jwt = require('jsonwebtoken')

async function userMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"]
    if (!(authHeader.startsWith("Bearer"))) return res.status(401).json({ message: "UNAUTHORISED: Invalid Token" })
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedToken) => {
        if (err) return res.status(403).json({ message: "Forbidden: Access not allowed" })
        const userExists = await User.findOne({ username: decodedToken.username }).exec()
        if (!userExists) return res.status(403).json({ message: "Forbidden: Access not allowed" })
        req.user = decodedToken.username
        next()
    })
}

module.exports = userMiddleware;