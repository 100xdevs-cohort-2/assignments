const { Admin } = require("../db/index")

async function adminMiddleware(req, res, next) {
    const username = req.body.username
    const password = req.body.password
    console.log(username, password)
    const admin = await Admin.findOne({
        username: username,
        password: password
    });

    if (admin) {
        res.json({
            msg: "Admin aleady exist with given credentials"
        });
    }
    else {
        next();
    }
}

module.exports = adminMiddleware;