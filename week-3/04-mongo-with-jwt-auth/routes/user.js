const { Router } = require("express");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username: username,
        password: password
    })
    res.json({
        message: "User created succesfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    });
    if (user) {
        const token = jwt.sign({username: username}, JWT_SECRET);
        res.json({
            token: token
        })
    }
    else {
        res.json({
            message: "User does not exists"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({
       courses: courses 
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    await User.updateOne({
        username: jwt.verify(req.headers.Authorization.split(" ")[1], JWT_SECRET).username
    }, {
        "$push": {
            purchasedCourse: courseId
        }
    })
    res.json({
        message: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.Authorization.split(" ")[1];
    const username = jwt.verify(token, JWT_SECRET).username;
    const coursesIds = await User.findOne({username: username}).purchasedCourse;
    const courses = await Course.find({
        _id : {
            "$in": coursesIds
        }
    })
    res.json({
        purchasedCourses: courses
    })
});

module.exports = router