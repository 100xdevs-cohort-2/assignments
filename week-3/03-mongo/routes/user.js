const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    //user details 
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })

    res.json({
        message:"User created successfully"
    })

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
const response  = await Course.find({});
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
        username: username 
    }, {
        purchasedCourses:{
            "$push": courseId
        }
    });

    res.json({
        message:" purchase complete "
    })

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router