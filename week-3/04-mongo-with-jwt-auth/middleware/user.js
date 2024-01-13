const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../envData.js")
// console.log(JWT_SECRET_KEY)

// Implement user auth logic
// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwtToken = words[1]

    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET_KEY)
        // console.log(decodedValue, decodedValue.username)
        if (decodedValue.username) {
            //append username in request as because we will not pass them separately in headers
            //**we will append username in request */
            //**passing data to the next middleware
            req.username = decodedValue.username
            // console.log(req.username)
            next()
        }
        else res.status(410).json({
            msg: "user authentication failed"
        })
    } catch (error) {
        res.status(410).json({
            msg: "user authentication error"
        })
    }
}

module.exports = userMiddleware;