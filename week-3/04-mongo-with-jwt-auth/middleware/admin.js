// Assuming you have an Admin model or database for admin information
const Admin = require('./models/Admin'); // Update this based on your project structure

// Middleware for handling admin authentication
async function adminMiddleware(req, res, next) {
    try {
        // Check if the necessary headers are present
        const adminId = req.headers['admin-id'];
        const adminToken = req.headers['admin-token'];

        if (!adminId || !adminToken) {
            return res.status(401).json({ error: 'Unauthorized - Admin headers missing' });
        }

        // Validate the admin from the admin database
        const admin = await Admin.findOne({ _id: adminId, token: adminToken });

        if (!admin) {
            return res.status(401).json({ error: 'Unauthorized - Invalid admin credentials' });
        }

        // Attach the admin object to the request for later use if needed
        req.admin = admin;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = adminMiddleware;
