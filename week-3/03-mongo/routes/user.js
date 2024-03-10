const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username : username,
        password : password
    });

    res.status(200).json({
        msg: " User created successfully"
    })

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.findOne({});

    res.json({
        courses : response
    });
});

router.post('/courses/:courseId',  userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const username = req.params.username;
    const courseId = req.headers.courseId;

    await User.updateOne({
        username : username,
    }, {
        "$push" : {
            purchasedCourses : courseId
        }
    });

    res.status(200).json({
        msg: "course purchase successful"
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    });

    console.log(user.purchasedCourses);

    const courses = await Course.find({
     _id:{
       "$in":user.purchasedCourses 
     }   

    });


    res.status(200).json({
        purchasedCourses : courses
    })
});

module.exports = router