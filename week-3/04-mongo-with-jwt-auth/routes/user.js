const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const password = req.body.password;
    const username = req.body.username;
    await User.create({
        username: username,
        password: password
    })
    res.json({
        message:'User created successfully'
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    })

    if (!user){
        res.status(411).json({
            msg: "Incorrect email and pwd"
        })
    } else {
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({token});
    }  
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    await User.updateOne({
        username: username
    }, {
        "$push" :{
            purchasedCourses: courseId
        }
        })
    res.json({
        msg: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router