const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    const user = new User({
        username : username,
        password : password,
    });
    user.save();
    res.json({
        "msg" : "User Created Successfully",
    });
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password
    });
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            mesaage : "Incorrect Email and password"
        })
    }
})

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const responce = await Course({});
    res.json({
        courses : responce,
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    console.log(username);

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse: courseId
        }
    })
    res.json({
        message : "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.username
    });

    console.log(user.purchasedCourse);
    const courses = await Course.find({
        _id : {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses : courses,
    })
});

module.exports = router