const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User } = require("../db/index");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        const { email, password } = req.body;
        const user = await User.create({
            email: email,
            password: password,
        });
        return res.json({
            message: 'User created successfully',
        })
    } catch (error) {
        res.json({
            message: 'Error creating user'
        });
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const user = await User.findOne({
        username: username,
        password: password
    })
    if (!user) {
        return res.redirect('/signup');
    }
    const JWT_SECRET = "Rohan"
    const token = jwt.sign({ username }, JWT_SECRET);
    return res.json({
        token: token
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router