const {Router} = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    await User.create({
        username,
        password
    });
    res.status(201).json({message: 'User created successfully'});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const user = await User.findOne({
        username,
        password
    });
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.status(200).json({token: token});
    }
    else {
        res.status(404).json({message: 'Check you login credentials'});
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.status(200).json({courses: courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    const user = await User.updateOne({
        username
    },
        {
            "$push": {
                purchasedCourses: courseId
            }
        });
    res.status(201).json({message: 'Course purchased successfully'});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({
        username
    });
    const purchasedCourses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.status(200).json({purchasedCourses: purchasedCourses});
});

module.exports = router;