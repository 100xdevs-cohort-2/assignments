const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const db = require('../db/index')
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    const existingUser = await db.User.findOne({ username: username })
    if (existingUser) {
        return res.json({
            "Message": "User already exists , just sign in"
        })
    }
    const user = new db.User({
        username: username,
        password: password
    })
    user.save()
    res.json({ message: 'User created successfully' })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const response = await db.Course.find({})
    res.json({ courses: response })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    console.log("hii")
    const username = req.headers.username;
    const courseId = req.params.courseId;
    await db.User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await db.User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await db.Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router