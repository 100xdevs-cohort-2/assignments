const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../../03-mongo/db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    const resp = await User.create({
        username,
        password
    })
    if(resp){
        res.json({
            message:"User created Successful"
        })
    }
    else{
        message:"User Not Created "        
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const resp = await User.findOne({
        username,
        password
    })
    if(resp){
        const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            Token: token
        })
    }
    else{
        res.json({
            message:"Invalid input "
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allcourses = await Course.find({})
    res.json({
        Courses:allcourses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    try {
        await User.updateOne({
            username
        },{
           "$push":{
            purchasedCourses:courseId
           }
        })
        res.json({
            message : "Purchases Successful"
        })
    } catch (error) {
        res.json({
            message:error
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.username
    })
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        Courses:courses   
    })
});

module.exports = router