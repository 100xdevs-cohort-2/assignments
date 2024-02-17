const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {User, Course} = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        message:"User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let response = await Course.find({});
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let username = req.headers.username;
    let courseId = req.params.courseId;
    await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({message:"Course purchased."});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let username = req.headers.username;

    let user = await User.findOne({
        username:username
    })
    
    let courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({courses});
});

module.exports = router