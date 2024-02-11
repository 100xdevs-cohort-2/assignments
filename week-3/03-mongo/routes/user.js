const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        const { username, password } = req.body;
        await User.create({
            username,
            password
        })
        res.json({
            message: 'User created successfully'
        })
    } catch (e) {
        res.status(404).json({
            sucess: false,
            message: "User already registered"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.status(200).json({
        courses: response
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { courseId } = req.params;
    const { username } = req.headers;
    const user = await User.updateOne({
        username: username
    }, {
        "$push" : {
            purchasedCourseId: courseId,
        }
    });
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware,async(req, res) => {
    // Implement fetching purchased courses logic
    const { username } = req.headers;
    const user = await User.findOne({
        username : username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
});

module.exports = router