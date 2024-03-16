const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })
    
    res.json({message: "User created sucessfully!!"});

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const response= await Course.find({});

    res.json({
        courses: response
    })

    
});

router.post('/courses/:courseId',  userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId= req.params.courseId;
    const username=req.headers.username;
    console.log(courseId);
    await User.updateOne({
        username:username
    },
        {
            "$push":{
                purchasedCourse:courseId
            }
        })

    res.json({
        message: "purchased Sucessfully!!"
    });

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user= await User.findOne({
        username: req.headers.username
    })

    console.log(user);

    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourse
        }
    });
    res.json({
        courses: courses
    })
});

module.exports = router