const { User } = require("../db/index")
async function userMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    })
    if (user) {
        res.json({
            msg: "user alredy exist",
        });
    }
    else {
        next();
    }
}
module.exports = userMiddleware;