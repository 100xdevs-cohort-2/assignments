const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const JWT_SECRET = '123445666';


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
        message: " User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username: username,
        password: password
    })

    if(user){
        const token = jwt.sign({username},JWT_SECRET);
        res.json({
            token: token
        })

    }else {
        res.status(411).json({
            message: " incorrect User  id pass"
        })
    }
});

router.get('/courses', userMiddleware , async (req, res) => {
    // Implement listing all courses logic\

    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId= req.params.courseId;
    console.log(courseId);
    const username=req.username;
    console.log(username);
    await User.updateOne({
        username:username
    },
        {
            "$push":{
                purchasedCourses:courseId
            }
        })

    res.json({
        message: "purchased Sucessfully!!"
    });

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user= await User.findOne({
        username: req.username
    })

    console.log(user);

    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
});

module.exports = router