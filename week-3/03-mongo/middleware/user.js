const { Admin, User, Course } = require("../db/index");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({ username: username, password: password }, (err, admin) => {
        if (err) {
            console.log(err);
        } else if (admin) {
            next();
        } else {
            res.status(401).send("Unauthorized");
        }
    });

}

module.exports = userMiddleware;