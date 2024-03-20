
// User Routes
const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.get('/courses', async (req, res) => {
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;

    // Fetch the user from the database
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    // Add the course to the user's purchased courses
    user.purchasedCourses.push(courseId);
    await user.save();

    res.json({
        message: `Course ${courseId} purchased by ${username}`
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.username;

    // Fetch the user from the database
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    // Fetch the courses purchased by the user
    const purchasedCourses = await Course.find({
        _id: { $in: user.purchasedCourses }
    });

    res.json({
        message: `List of courses purchased by ${username}`,
        courses: purchasedCourses
    });
});


module.exports = router