// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const adminUserName = req.headers['username'];
    const adminPassword = req.headers['password'];

    if (adminUserName === 'admin' && adminPassword === 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized admin');
    }
}

module.exports = adminMiddleware;