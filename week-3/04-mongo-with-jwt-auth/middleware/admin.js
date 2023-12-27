// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const existingAdmin = jwt.verify(req.body.authorization, "secret");
        next();
    } catch (error) {
        console.error("Token verification failed: ", error.message);
    }

}

module.exports = adminMiddleware;