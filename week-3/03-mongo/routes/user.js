const {Router} = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    await User.create({
        username,
        password
    });
    res.status(201).json({message: 'User created successfully'});
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({courses: courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    const username = req.headers.username;
    try {
        await User.updateOne({
            username: username
        },
            {
                "$push": {
                    purchasedCourses: id
                }
            });
    }
    catch (e) {
        console.log(e);
    }
    res.status(201).json({message: 'Course purchased successfully'});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.status(200).json({courses: courses})
});

module.exports = router;