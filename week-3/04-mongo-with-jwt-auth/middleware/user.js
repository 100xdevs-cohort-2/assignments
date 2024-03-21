const jwtData = require("../webToken");
const {User} = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if(token) {
        token = token.replace(/^Bearer\s+/, "");

        try {
            jwtData.jwt.verify(token, jwtData.jwtSecret);
        } catch (err) {
            res.status(500).json({
                message: "Galat token ya nahi chalta!"
            })

            return;
        }

        const decodedData = jwtData.jwt.decode(token);
        const username = decodedData.username || "";
        res.locals.username = username;
        const userExists = await User.findOne({
            username: username
        }).exec()


        if(!userExists) {
            res.status(404).json({
                message:"Ye kiska token le aaye app? Apna lao bhai!"
            })
            return;
        }
    } else {
        res.status(404).json({
            message: "Token k bina me mere baap ki bhi nahi sunta!"
        })
        return;
    }

    next();
}

module.exports = userMiddleware;