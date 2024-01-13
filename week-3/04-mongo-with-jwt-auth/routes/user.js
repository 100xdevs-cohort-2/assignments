const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../envData");

//** import table of Admin and Course from DB */
const { User, Course } = require("../db/index.js")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const newUser = await User.create({
        username: username,
        password: password
    })

    if (newUser) {
        console.log(newUser)
        res.json({
            message: 'User created successfully'
        })
    }
    else {
        res.status(410).json({
            msg: "error in user creation"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    //auth check
    const user = await User.find({
        username: username,
        password: password
    })

    if (user) {
        const token = jwt.sign({ username: username }, JWT_SECRET_KEY)
        res.json({
            token: token
        })
    }
    else {
        res.status(410).json({
            msg: "user signin failed"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allcourse = await Course.find()
    if (allcourse) {
        console.log(allcourse)
        res.json({
            courses: allcourse
        })
    }
    else {
        res.status(410).json({
            msg: "error occured while getting course list for user"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId

    //get username from req.username which is appended by user middleware into req object
    const username = req.username
    // console.log(username)

    const updatedUser = await User.updateOne(
        { username: username },
        { "$push": { purchasedCourses: courseId } }
    )

    if (updatedUser) {
        console.log(updatedUser)
        res.json({
            message: 'Course purchased successfully'
        })
    }
    else {
        res.status(410).json({
            message: 'error occured while course purchasing '
        })
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username

    const user = await User.findOne({
        username: username
    })

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })

});

module.exports = router