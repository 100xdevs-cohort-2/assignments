const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const { username, password } = req.body;

    const existUser = await User.findOne({ username: username })
    if (existUser) {
        return res.json({
            message: "User Already Exists with this username"
        })
    }

    const response = await User.create({
        username: username, password: password
    })

    return res.status(200).json({ message: 'User created successfully' })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({})

    return res.status(200).json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const { username } = req.headers

    const course = await Course.findById({ _id: courseId })
    const user = await User.findOne({ username })

    await User.updateOne({ username }, {
        $push: { enrolledCourses: courseId }
    })

    await Course.updateOne({ _id: courseId }, {
        $push: {
            enrolledUsers: user._id
        }
    })

    return res.json({ message: 'Course purchased successfully' })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const {username} = req.headers

    let user = await User.findOne({username}).populate('enrolledCourses')
    return res.json({
        purchasedCourses : user.enrolledCourses
    })
});

module.exports = router