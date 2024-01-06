const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// User Routes
<<<<<<< HEAD
router.post('/signup', async (req, res) => {
=======
router.post('/signup', (req, res) => {
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
    // Implement user signup logic
    await User.create({username: req.body.username, password: req.body.password})
    res.json({ message: 'User created successfully' });
});

<<<<<<< HEAD
router.get('/courses', async (req, res) => {
=======
router.get('/courses', (req, res) => {
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
    // Implement listing all courses logic
    let data = await Course.find();
    res.json({courses:data});
});

<<<<<<< HEAD
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
=======
router.post('/courses/:courseId', userMiddleware, (req, res) => {
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
    // Implement course purchase logic
    let userName = req.headers.username;
    let password = req.headers.password;
    let user = await User.findOne({username:userName,password:password}).exec();

    user.courses.push(req.params.courseId);
    await user.save();
    res.json({ message: 'Course purchased successfully' });
});

<<<<<<< HEAD
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
=======
router.get('/purchasedCourses', userMiddleware, (req, res) => {
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
    // Implement fetching purchased courses logic
    
    let userName = req.headers.username;
    let password = req.headers.password;
    let data = await User.findOne({username:userName, password: password}).populate('courses');
    res.json({purchasedCourses: data.courses});
});

module.exports = router