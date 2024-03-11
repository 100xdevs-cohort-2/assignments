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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.body.username;

    await User.updateOne({
        username
    }, {
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.status(200).json({
        message: "Purchase successfull!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const userData = await User.findOne({
        username
    })

    const purchases = await Course.find({
        _id:{
            "$in": userData.purchasedCourses
        }
    })

    res.status(200).json({
        purchasedCourses: purchases
    })

});

module.exports = router