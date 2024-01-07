const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    try {
        const verify = jwt.verify(token, process.env.secretkey);
        const { id } = verify.data;
        const reqUser = await User.findById(id);
        if (!reqUser) throw "error";
        req.user = reqUser;
        next();
    } catch (error) {
        return res.status(401).json({ message: "auth failed" });
    }
}

module.exports = userMiddleware;