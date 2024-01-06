const { Router } = require("express");
const router = Router();
const {User,Course} = require("../db/index");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {username,password} = req.body;
    const user = await User.create({
        username,password
    })
    return res.status(200).send(`${user.username} has been registered`);
});


router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    return res.status(200).json({
        Courses:courses,
    })
});


router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    })

    return res.status(200).send("Purchased Successfully")
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.username
    })
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    return res.status(200).json({
        Courses:courses,
    })
});

module.exports = router