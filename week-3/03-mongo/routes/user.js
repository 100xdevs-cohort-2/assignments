const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save();
    res.status(201).json({message: 'user created successfully'})
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
        .then(function (courses) {
            res.json({courses: courses})
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    Course.find({courseId: req.params.courseId})
        .then(function (newCourse) {
            console.log("course => " + JSON.stringify(newCourse[0]))
            User.findOneAndUpdate({username: req.headers.username}, {$push : {purchasedCourses: newCourse[0]}}, {new:true})
            .then(function (updatedDocument){
                console.log("course purchased")
                res.sendStatus(200)
            })
            .catch()
        })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    User.findOne({username: req.headers.username})
        .then(function (user){
            console.log("user " + user + ", type=" + typeof(user))
            res.json({purchasedCourses: user["purchasedCourses"]})
        })
});

module.exports = router
