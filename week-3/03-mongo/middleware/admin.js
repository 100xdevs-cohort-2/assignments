const { Admin } = require("../db/index")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin
    //         from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({ username: username, password: password })
        .then((user) => {
            if (user) next();
            else return res.status(404).send("User not found in db")
        })
        .catch((err) => {
            console.log(err.message)
            return res.status(500).send("Something went wrong")
        })

}

module.exports = adminMiddleware;