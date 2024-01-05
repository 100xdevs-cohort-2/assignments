const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config")

// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({message: 'User created successfully'})
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username,
        password
    })
    if(user){
        const token = jwt.sign({username},JWT_SECRET);
        res.json({token})
    }
    else{
        res.json({msg: "Incorrect email or password"})
    }
});

router.get('/courses', async(req, res) => {
    const response = await Course.find({})
    res.json({Courses: response})
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;
    // console.log(username);
    await User.updateOne({
        username
    }, {
        "$push": {purchasedCourses: courseId}
        })
    res.json({message: "Purchase complete!"})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const username = req.username;
    const user = await User.findOne({
        username
    });
    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses 
        }
    })
    res.json({courses: course})
});

module.exports = router