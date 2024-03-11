const {Router} = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password with bcrypt

        // Create admin with hashed password
        await Admin.create({
            username: req.body.username,
            password: hashedPassword // Save hashed password to the database
        });

        res.json({
            message: "Admin account created successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        // Find the user by username
        const user = await Admin.findOne({username: req.body.username});

        // If the user is not found
        if (!user) {
            return res.status(401).json({message: "Invalid username"});
        }
        // Compare the password provided by the user with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        // If the password is invalid
        console.log(isPasswordValid,JWT_SECRET);
        if (!isPasswordValid) {
            return res.status(401).json({message: "Invalid  password"});
        }

        // If both username and password are valid, you can generate a JWT token here and send it back to the client
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET)
        res.json({Your_token: token});
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({error: "Internal server error"});
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;