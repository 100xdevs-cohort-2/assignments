const { User } = require('../db/index');

async function userMiddleware(req, res, next) {
    try {
        const userUserName = req.headers['username'];
        const userPassword = req.headers['password'];

        const user = await User.findOne({ username: userUserName, password: userPassword });

        if (!user) {
            return res.status(401).send('Unauthorized user');
        }

        // Attach the user object to the request for further use if needed
        req.user = user;

        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = userMiddleware;
