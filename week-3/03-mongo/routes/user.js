const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index")


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try {
        User.create({
            username: req.headers.username,
            password: req.headers.password
        });
        res.status(200).json({ message: 'User created successfully' })
    }
    catch (e) {
        res.status(400).send(e);
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(c => { res.json(c) });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const courseId = req.params.courseId
        const { username } = req.headers
        const courseExists = await Course.findOne({ _id: courseId }).exec()
        if (!courseExists) return res.status(404).json({ message: "course does not exists" })
        const purchasedCourse = await User.findOneAndUpdate(
            { username },
            { $push: { courses: courseExists._id } },
            { new: true, upsert: true }
        )
        res.status(200).json({
            message: 'Course purchased successfully',
            courseId: courseExists._id
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        let user = await User.findOne({ username: req.headers.username });
        await user.populate("courses");
        res.status(200).json({ courses: user.courses });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router