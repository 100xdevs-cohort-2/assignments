const { User } = require("../db/index.js")

// Implement user auth logic
// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

async function userMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password

    const response = await User.findOne({
        username: username,
        password: password
    })

    //if respoonse exist then proceed for next() else give error
    if (response) next()
    else res.status(403).json({
        msg: "User does not exist"
    })

    /*without using async and await */
    // User.findOne({
    //     username: username,
    //     password: password
    // }).then((value) => {
    //     if (value) next()

    //     else res.status(403).json({
    //         msg: "invalid user"
    //     })

    // })

}

module.exports = userMiddleware;