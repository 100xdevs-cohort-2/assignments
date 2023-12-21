import UserSchema, { Course } from '../db/index.js';
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const newUser = req.body.user;
    const newPassword = req.body.password;
    UserSchema.push({ newUser, newPassword });
    res.json({
        message: 'User created successfully',
        userId: "newUserId"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const user = req.body.username;
    const password = req.body.password;
    const allCourses = UserSchema.Course.find(Course[user]);
    res.json({
        allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.body.courseId;

    UserSchema.purchasedCourses.push(Course[courseId]);
    res.json({
        message: 'Course purchased successfully',
        courseId: "courseId"
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const user = req.body.username;
    const password = req.body.password;
    const purchasedCourses = UserSchema.purchasedCourses.find(Course[user]);
    res.json({
        purchasedCourses
    });
});

module.exports = router