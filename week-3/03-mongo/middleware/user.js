function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userUserName = req.headers['username'];
    const userPassword = req.headers['password'];

    if (userUserName === 'user' && userPassword === 'user') {
        next();
    } else {
        res.status(401).send('Unauthorized user');
    }

}

module.exports = userMiddleware;