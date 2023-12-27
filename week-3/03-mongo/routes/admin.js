const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    Admin.create=({
        username:req.body.username,
        password:req.body.password,
    });    
    res.json({message: 'Admin created successfully'})
});

router.post('/courses', adminMiddleware, (req, res) => {
    Course.Create=({
        courseId: Math.floor(Math.random() * 10000),
        title:req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })
    res.json({ message: 'Course created successfully', courseId: courseId})
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;