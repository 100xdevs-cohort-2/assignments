const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db/index");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })

    res.json({
        msg : "User created Successfully"
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        Courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    // const password = req.header.password;

    await User.updateOne({
        username : username
    },{
        "$push":{
            purchasedCourses : courseId
        }
    });
    res.json({
        msg : "Course purchased Successfully"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    const user = await User.findOne({
        username
    });

    const course = await Course.find({
        _id :{
            "$in" : user.purchasedCourses
        }
    })

    res.json({
        courses : course
    })
});

module.exports = router