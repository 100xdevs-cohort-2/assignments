const { Admin, User, Course } = require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    User.exists({
        username: req.headers.username,
        password: req.headers.password
    })
        .then((exists) => {
            if (exists) {
                console.log('User exists.');
                next();
            } else {
                console.log('User does not exist.');
                res.status(400).send('User doesnt exists!');
            }
        })
        .catch((err) => {
            console.error('Error checking User existence:', err);
            res.status(400).send('username or password is incorrect');
        });
}

module.exports = userMiddleware;