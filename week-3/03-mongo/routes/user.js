const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User } = require('../db/index');
const { Course } = require('../db/index');

const router = Router();

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })   

});

router.get('/courses', async (req, res) => {

    const courses = await Course.find({});
    res.json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {

    const courseID = req.params.courseId;

    const username = req.headers.username;
    const password = req.headers.password;
    
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseID
        }
    });

    res.json({
        msg: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
});

module.exports = router;
