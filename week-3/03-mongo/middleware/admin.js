<<<<<<< HEAD
const { Admin } = require('../db/index');

async function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        try {
            // Check if the provided username and password match a record in the database
            const user = await Admin.findOne({ username, password });

            if (user) {
                // If authentication succeeds, proceed to the next middleware or route handler
                req.user=user;
                next();
            } else {
                // If authentication fails, send a 401 Unauthorized response
                res.status(401).json({ error: 'Unauthorized' });
            }
        } catch (error) {
            // Handle database query error
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // If username or password is missing, send a 400 Bad Request response
        res.status(400).json({ error: 'Bad Request' });
    }
}

module.exports = adminMiddleware;
=======
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
>>>>>>> origin/master
