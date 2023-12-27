function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const existingUser = jwt.verify(req.body.authorization, "secret");
        next();
    } catch (error) {
        console.error("Token verification failed: ", error.message);
    }
}

module.exports = userMiddleware;