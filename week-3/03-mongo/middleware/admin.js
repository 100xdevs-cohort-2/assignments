import { Admin } from "../db";
async function adminMiddleware(req, res, next) {
    try {
        const { username, password } = req.headers;

        if (!username || !password) {
            return res.status(401).json({ error: "header not found" });
        }

        const admin = await Admin.findOne(username, password);

        if (!admin) {
            return res.status(403).json({ error: "admin not found" });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = adminMiddleware;