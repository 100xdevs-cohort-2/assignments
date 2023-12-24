const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index")
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

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router