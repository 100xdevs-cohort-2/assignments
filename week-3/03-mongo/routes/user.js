const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    await User.create({username: req.body.username, password: req.body.password, courses: []})
    res.json({ message: 'User created successfully' });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    let data = await Course.find();
    res.json({courses:data});
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    let userName = req.headers.username;
    let password = req.headers.password;
    let user = User.find({username:userName,password:password});
    user.courses.push(req.params.courseId);
    await user.save();
    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let userName = req.headers.username;
    let password = req.headers.password;
    let data = await User.find({username: userName, password:password});
    res.json({purchasedCourses: data});
});

module.exports = router