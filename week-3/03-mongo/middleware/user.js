const { User } = require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({ username: username, password: password })
        .then((user) => {
            if (user) {
                req.userId = user._id;
                next();
            }
            else return res.status(404).send("User not found in db")
        })
        .catch((err) => {
            console.log(err.message)
            return res.status(500).send("Something went wrong")
        })
}

module.exports = userMiddleware;