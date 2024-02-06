const {Router} = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require('../db/index');
const {createCourse} = require("../types");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const existingAdmin = await Admin.find({username: username})
    if (existingAdmin.length != 0) {
        res.status(404).json({message: 'Admin already exists'})
        return
    }
    await Admin.create({
        username,
        password
    });
    res.status(201).json({message: 'Admin created successfully'});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;

    const parsedPayload = createCourse.safeParse(req.body)
    if (!parsedPayload.success) {
        return res.status(403).json({
            message: 'All fields are required'})
    }
    const course = await Course.create({
        title,
        description,
        price,
        imageLink
    }
    );
    res.status(201).json({message: 'Course created successfully', courseId: course._id})
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.status(200).json({courses})
});

module.exports = router;