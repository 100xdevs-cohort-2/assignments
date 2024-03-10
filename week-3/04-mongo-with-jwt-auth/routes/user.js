const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

const router = Router();

router.post('/users/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        await User.create({ username, password });
        res.json({
            message: 'User created successfully'
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/users/courses', userMiddleware, async (req, res) => {
    try {
        const allCourses = await Course.find();
        res.json({ courses: allCourses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const username = req.username;
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('purchasedCourses');
        res.json({ purchasedCourses: user.purchasedCourses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
