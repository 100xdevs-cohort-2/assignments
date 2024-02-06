const {Router} = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, User, Course} = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");
const {courseSchema} = require("../types");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    await Admin.create({
        username,
        password
    });
    res.status(201).json({message: 'Admin created successfully'});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const user = await User.find({
        username,
        password
    });
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({token: token});
    }
    else {
        res.status(411).json({message: 'Login Credentials are incorrect'});
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const parsedPayload = courseSchema.safeParse(req.body);
    if (!parsedPayload.success) {
        res.status(404).json({message: 'All fields are required'});
    }
    const course = await Course.create({
        title,
        description,
        price,
        imageLink
    });
    res.status(201).json({message: 'Course created successfully', courseId: course._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.status(200).json({courses: courses})
});

module.exports = router;