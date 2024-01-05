const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course, Purchase} = require("../db/index")
const jwt = require('jsonwebtoken');
require('dotenv').config()
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({message: 'User created successfully'});
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const checkUsername = await User.findOne({ username: username });
    const checkPassword = await User.findOne({password: password});

    if(checkUsername !== null && checkPassword !== null){
        var token = jwt.sign({ username: username }, process.env.jwtPassword);
        res.json(token);
    } else {
    res.json({message: "Username or password not valid"});
    }
});

router.get('/courses', userMiddleware, async(req, res) => {
    // Implement listing all courses logic
    let allCourses = await Course.find({});
    res.json({courses: allCourses});
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    let courseId = req.params.courseId;
    try{
        const check = await Course.findById(courseId);
            if(check !== null){
                await Purchase.create({
                    id: courseId
                })
                res.json({message: 'Course Purchase successfully'});
            } else {
                res.json("Course not available");
            }
        // Implement course purchase logic
    } catch(e) {
        res.json({
            message: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer"
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try{
        let allCourses = await Purchase.find({});
    res.json({purchasedCourses: allCourses})
    } catch(e){
        res.json(e);
    }
});

module.exports = router