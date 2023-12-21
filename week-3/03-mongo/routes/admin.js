import AdminSchema, { Course } from '../db/index.js';
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    //create new admin

    const newAdminName = req.body.adminName;
    const newAdminPassword = req.body.adminPassword;
    const newAdminCourses = req.body.adminCourses;
    AdminSchema.push({ newAdminName, newAdminPassword, newAdminCourses });
    res.json({
        message: 'Admin created successfully',
        adminId: "newAdminId"
    })   
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    //create new course
    const adminUserName = req.headers['username'];
    const adminPassword = req.headers['password'];
    if (adminMiddleware(adminUserName, adminPassword)) {
        
        const newCourseTitle = req.body.courseTitle;
        const newCourseDescription = req.body.courseDescription;
        const newCoursePrice = req.body.price; 
        Course.push({ newCourseTitle, newCourseDescription, newCoursePrice });
        
        res.json({
            message: 'Course created successfully',
            courseId: "newCourseId"   
        })
    } else {
        res.status(401).send('Unauthorized admin');
    }

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const adminUserName = req.headers['username'];
    const adminPassword = req.headers['password'];
    if (adminMiddleware(adminUserName, adminPassword)) {
        const allCourses = AdminSchema.Course.find(Course[adminUserName]);
        res.send(allCourses);
    } else {
        res.status(401).send('Unauthorized admin');
    }
});

module.exports = router;