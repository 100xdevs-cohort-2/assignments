const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username : username,
        password : password
    })
    res.json({
        msg:"User created Successfully."
    })
});

router.get('/courses', async(req, res) => {

    const response = await Course.find({});
    res.json({
        msg: response
    });
});


router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses : courseId
        }
    })
    res.json({
        msg:"Purchase successfull!"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    });
    const course = await Course.find({
        _id:{
            "$in" : user.purchasedCourses
        }
    });
    res.json({
        courses: course
    })
});

module.exports = router