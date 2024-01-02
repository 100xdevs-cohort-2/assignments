const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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

router.get('/courses', async(req, res) => {
    const response = await Course.find({})
    res.json({Courses: response})
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username
    }, {
        "$push": {purchasedCourses: courseId}
        })
    res.json({message: "Purchase complete!"})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });
    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses 
        }
    })
    res.json({courses: course})
});

module.exports = router