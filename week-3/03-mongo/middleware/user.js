const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const { username, password } = req.headers;
        if (!username || !password) {
            return res.status(401).json({ msg: "Not authorized" });
        }
        const user = await User.findOne({ username: username, password: password });
        if (!user) {
            return res.status(401).json({ msg: "Not authorized" });
        } else {
            next();
        }

    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }


}

module.exports = userMiddleware;