const { Admin } = require('../db/index');

async function adminMiddleware(req, res, next) {
    try {
        const adminUserName = req.headers['username'];
        const adminPassword = req.headers['password'];

        const admin = await Admin.findOne({ adminName: adminUserName, adminPassword });

        if (!admin) {
            return res.status(401).send('Unauthorized admin');
        }

        // You can also attach the admin object to the request for further use if needed
        req.admin = admin;

        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = adminMiddleware;
