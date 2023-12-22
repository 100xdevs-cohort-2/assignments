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

router.post('/users/courses/:courseId', userMiddleware, async (req, res) => {
    const { courseId } = req.params;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        const user = await User.findById(req.user._id); // Assuming you have stored the user ID in req.user after authentication
        user.purchasedCourses.push(course);
        await user.save();

        res.json({
            message: 'Course purchased successfully',
            courseId: course._id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/users/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('purchasedCourses');
        res.json({ purchasedCourses: user.purchasedCourses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
