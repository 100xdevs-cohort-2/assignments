const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')
const jwt = require('jsonwebtoken');
require('dotenv').config({path : "config.env"});

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username : req.body.username,
        password : req.body.password
    })
    res.json({msg : "User creted Successfully"});
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logi
    const username = req.body.username;
    const password = req.body.password;
    console.log(process.env.JWT_SECRET);

    const user = await User.find({username,password});
    console.log(user);``
    if(user.length>0){
        const token = jwt.sign({username : req.body.username} , process.env.JWT_SECRET);
        res.json({token});
    }else{
        res.status(404).json({msg : "User Doesn't exists"})
    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({All_Course : courses})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.body.username;
    const courses = await Course.find({_id : courseId});
    if(courses.length == 0) return res.status(404).json({msg : "Invalid CourseID"});
    try{
        await User.updateOne({
            username
        },{
            "$push" : {
                purchasedCourse : courseId
            }
        })
        res.json({msg : "Course Purchased Successfully"})
    }catch(e){
        res.status(500).send({msg: "There is some problem in purchaing. try with valid username and valid authentication"});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.body.username;
    try{
        const user = await User.findOne({username});
        if(user.length == 0) return res.status(404).json({msg : "User Doesn't exists"});
        const coursesIds = user.purchasedCourse;
        const courses = await Course.find({_id : {"$in" : coursesIds}});
        res.json({purchasedCouses : courses});
    }catch(e){
        res.status(404).json({msg : "Invalid input"});
    }
});

module.exports = router