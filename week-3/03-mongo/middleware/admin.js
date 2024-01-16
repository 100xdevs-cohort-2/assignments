const { Admin } = require("../db");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret_key = 'secr3t';

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const {username, password} = req.headers;

        if(!username || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the details carefully'
            })
        }


        const user = await Admin.findOne({username});

        if(!user){
            return res.status(404).json({
                success : 'false',
                msg : 'Admin Authentication failed'
            });
        }

        const match = bcrypt.compare(password, user.password);

        if(match){
            const token = jwt.sign({username}, secret_key, {expiresIn: '12h'});
            res.status(200).json({
                token : token
            })

            next();
        } else {
            return req.status(200).json("Password Didn't Match");
        }
    }
    catch(err){
        return res.status(404).json('Error in authentication');
    }
}

module.exports = adminMiddleware;