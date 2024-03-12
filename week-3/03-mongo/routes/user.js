const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course}=require("../db/index")

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;

    await User.create({
        username,password
    })
    res.json({ message: 'User created successfully' })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const courses=Course.find();
    res.json({courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const {username}=req.headers;

    // const course=Course.findOne({_id:courseId});
    await User.updateOne({username:username},{"$push":{purchasedCourses:courseId}})

    res.json({ message: 'Course purchased successfully' })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const {username}=req.headers;

    const user = await User.find({username});

    // const courses=user.purchasedCourses;
    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({purchasedCourses:courses});
});

module.exports = router