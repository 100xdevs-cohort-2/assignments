const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const response = await Admin.create({username, password});
    if(!response){
        res.status(500).json({message: "Unexpected error occured!"});
    }
    res.status(200).json({message: "Admin created successfully!"});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, imageLink, price} = req.body;

    const newCourse = await Course.create(title, description, imageLink, price);
    if(!newCourse){
        res.status(500).json({message: "Unexpected error occured!"});
    }
    res.status(200).json({message: "Course created successfully!", courseId: newCourse._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    if(!response){
        res.status(500).json({message: "Unexpected error occured!"});
    }
    res.status(200).json({courses: response});
});

module.exports = router;