// Middleware for handling auth
const { Admin, User, Course } = require("../db/index")


function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    Admin.exists({
        username: req.headers.username,
        password: req.headers.password
    })
        .then((exists) => {
            if (exists) {
                console.log('Admin exists.');
                next();
            } else {
                console.log('Admin does not exist.');
                res.status(400).send('Admin doesnt exists!');
            }
        })
        .catch((err) => {
            console.error('Error checking Admin existence:', err);
            res.status(400).send('username or password is incorrect');
        });

}

module.exports = adminMiddleware;