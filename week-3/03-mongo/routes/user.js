const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const userExsists = await User.findOne({ username });
    if (userExsists) {
        return res.status(409).json({ message: "username already used" });
    }
    await User.create({ username, password });
    return res.status(200).json({ message: "User Created Sucessfully" });
});

router.get('/courses', async (req, res) => {
    const courses = await Course.find({});
    return res.status(200).json({ courses })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { courseId } = req.params;
    await User.findOneAndUpdate({ username: req.user.username }, { $push: { purchasedCourses: courseId } });
    return res.status(200).json({ message: "Course Purchased Sucessfully" });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const user = User.findOneAndUpdate({ username: req.user.username }).populate('purchasedCourses')
    const purchasedCourses = user.purchasedCourses;
    return res.status(200).json({ purchasedCourses });

});

module.exports = router