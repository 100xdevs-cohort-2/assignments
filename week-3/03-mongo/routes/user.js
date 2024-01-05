const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ msg: "Bad request" });
        }
        const user = await User.findOne({ username: username, password: password });
        if (user) {
            res.status(401).json({ msg: "User already exists" });
        } else {
            const newUser = await User.create({ username: username, password: password });
            res.status(200).json({ msg: "User created", username: newUser.username });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find({});
        res.status(200).json({ courses });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {

        const courses = await Course.findOne({ id: req.params.courseId });
        if (!courses) {
            res.status(404).json({ msg: "Course not found" });
        }
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const courses = await Course.find({ purchased: true });
        res.status(200).json({ courses });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

module.exports = router