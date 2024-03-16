const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = new User({
        username:username,
        password:password
    })

    user.save();
    res.json({
        msg:"User created successfully"
    })
});


router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allcourses = await Course.find({});
    res.json({
        allcourses
    })
    
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
        { username: username},
        { $push: { purchasedCourses: courseId } }
        );

        res.json({
            msg:"Successfully purchased the course"
        })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({username:req.headers.username});
    console.log(user)

     const usercources = await Course.find({_id:{$in:user.purchasedCourses}});
    res.send({
        usercources
    })
});

module.exports = router