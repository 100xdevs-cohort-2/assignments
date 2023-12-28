const { Admin } = require('../models');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(!username || !password){
        return res.status(400).json({ message: 'Missing username or password in headers' });
    }
    
    try {
        const user = await Admin.findOne({ username: username });
        if(user){
            if(user.password == password){
                next();
            } else {
                return res.status(401).json({"message": "Incorrect Password"});
            }
        } else {
            return res.status(404).json({"message": "User not found."});
        }
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching user', error: err });
    }
}

module.exports = adminMiddleware;