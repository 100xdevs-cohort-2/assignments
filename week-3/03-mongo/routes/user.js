const { User, Course } = require("../db");
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username : username,
        password : password
    })
    
    if (user){
        res.status(404).json({msg: "Admin already exists!!!"});
    }

    const value = await User.create({username, password});

    res.status(200).json({
        msg : "User created successfully!!!"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const response = Course.find({});

    res.json({
        course : response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
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

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router