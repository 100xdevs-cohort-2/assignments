import { User } from "../db";
async function userMiddleware(req, res, next) {
    try {
        const {username, password} = req.headers;

        if(!username || !password) {
            return res.status(401).json({error: "header not found"});
        }

        const user = await User.findOne(username, password);

        if(!user) {
            return res.status(403).json({error: "user not found"});
        }

        next();
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
}

module.exports = userMiddleware;