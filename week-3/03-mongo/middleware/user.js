const { User } = require("../db");

async function userMiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;

    try {
        const user = await User.findOne({
            username: username,
            password: password
        });

        if (user) {
            next();
        } else {
            res.status(404).json({
                message: "User does not  exist"
            });
        }
    }catch{
        res.status(500).json({
            message: "An err occurred while authenticating User."
        })
    }
}

module.exports = userMiddleware;