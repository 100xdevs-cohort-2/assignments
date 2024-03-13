const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    User.create({
        username,
        password
    }).then(function(){
        res.json({
            msg:"User created"
        })
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
        .then(function(response){
            res.json({
                courses: response
            })
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username
    User.updateOne({
        username: username
    }, {
        // purchasedCourses:{
        //     "$push": courseId
        // }
        "$push":{
            purchasedCourses: courseId
        }
    }).then(function(){
        res.json({msg:"Done course purchased"})
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router