const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    await User.create({username: req.body.username, password: req.body.password})
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
    let user = await User.findOne({username:userName,password:password}).exec();

    user.courses.push(req.params.courseId);
    await user.save();
    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    
    let userName = req.headers.username;
    let password = req.headers.password;
    let data = await User.findOne({username:userName, password: password}).populate('courses');
    res.json({purchasedCourses: data.courses});
});

module.exports = router