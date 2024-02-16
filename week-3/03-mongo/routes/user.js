const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    let userFound = await User.find({
        username: username
    })

    if (userFound.length>0) {
        res.status(403).json({
            message: 'user already exists'
        })
    } else {
        User.create({
            username,
            password,
            purchasedCourses: []
        }).then(function (){
            res.status(200).json({
                message: "user created successfully"
            })
        })
    }
    // testing
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})

    res.status(200).json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router