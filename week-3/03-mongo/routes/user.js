const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User} = require("../db");
const {Course} = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const curUser=req.body.username;
    const curPassword=req.body.password;
    User.create({
        username:curUser,
        password: curPassword
    }).then(()=>{
        res.json({
            message: "New user created successfully"
        })
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const curCourse=req.params.courseId;
    await User.updateOne({
        username: req.headers.username
    }, {
        "$push": {
            purchasedCourses: curCourse
        }
    })
    res.json({
        message : "purchased course successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const obj=await User.findOne({
        username:req.headers.username
    })
    console.log(obj.purchasedCourses[0])
    const courses = await Course.find({
        _id: {
            "$in": obj.purchasedCourses
        }
    });
    res.json({
        purchasedCourses: courses
    })
});

module.exports = router