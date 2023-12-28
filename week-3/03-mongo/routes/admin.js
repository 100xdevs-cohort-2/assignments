const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
    })
    admin.save();
    res.status(201).json({message: 'Admin created successfully'})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const courseId = Date.now().toString();
    const course = new Course({ 
        courseId: courseId,
        title: req.body.title, 
        description: req.body.description, 
        price: req.body.price, 
        imageLink: req.body.imageLink 
    })
    course.save();
    res.status(201).json({message: 'Course created successfully', courseId: courseId})
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
        .then(function (courses) {
            res.json({courses: courses});
        })
});

module.exports = router;