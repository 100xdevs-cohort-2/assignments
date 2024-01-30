const jwt = require('jsonwebtoken');
const User = require('../models/user');
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'secret');
    const username = decoded.username;

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (!user) {
            res.status(400).send("User not found");
        } else {
            next();
        }
    });
}

module.exports = userMiddleware;