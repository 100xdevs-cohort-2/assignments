const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const { Admin, Course } = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{
        const { username, password } = req.headers;
        const admin = new Admin({ username, password })
        const exist = await Admin.findOne({username, password})
        if(exist){
            return res.sendStatus(404);
        }
        await admin.save();
        res.json({
            message: "Admin created successfully"
        })
    }
    catch{
        res.sendStatus(404);
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try{
        const course = new Course( req.body )
        await course.save();
        res.json({ message: 'Course created successfully', courseId: course._id })
    }
    catch(err){
        res.sendStatus(404);
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find({});
        res.json({ courses });
    }
    catch(err){
        res.sendStatus(404);
    }
});

module.exports = router;
