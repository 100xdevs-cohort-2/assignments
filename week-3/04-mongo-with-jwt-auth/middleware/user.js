const db = require("../db/index");
const userModel = db.User;
const bcrypt = require("bcrypt");
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected.
    try{
        const username = req.headers.username;
        const password = req.headers.password;
        const user = await userModel.findOne({username});

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (isPasswordCorrect){
            console.log("User verifed.");
            next();
        }
    }
    catch(err){
        res.status(500).json({error: err});
    }

}

module.exports = userMiddleware;