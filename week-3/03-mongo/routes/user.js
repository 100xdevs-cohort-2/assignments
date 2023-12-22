const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course
        .find()
        .then(courses => {
            res.json({ courses })
        })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const getUser = await User.findOne(req.user).populate('purchasedCourses');
    res.status(200).json({purchasedCourses:getUser.purchasedCourses})
});

module.exports = router