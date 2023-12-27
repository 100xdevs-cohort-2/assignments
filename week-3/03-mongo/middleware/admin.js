// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const existingAdmin = await Admin.findOne({ username: username, password: password });
    if (existingAdmin) {
        next();
    } else {
        res.status(404).json({
            message: "There is no Admin with the username and password"
        })
    }

}

module.exports = adminMiddleware;