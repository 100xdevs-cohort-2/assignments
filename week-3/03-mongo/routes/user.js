const { Router } = require("express");
const mongoose = require("mongoose")
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index.js');


// User Routes
router.post('/signup', (req, res) => {
    const admin = new User({
        username: req.body.username,
        password: req.body.password
    })
    admin.save()

    res.json({
        msg: "User created Successfully"
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    courses = await Course.find({});
    res.send(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if(course){
        const user = await User.findOne({username: req.headers.username})
        console.log(user.username);
        user.purchasedCourses.push(course._id);
        await user.save();
        res.json({message: "Course purchased successfully."})
    } else{
        res.json({message: "Course not Found."})
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({username: req.headers.username}).populate('purchasedCourses');
    res.json(user.purchasedCourses);
});

module.exports = router