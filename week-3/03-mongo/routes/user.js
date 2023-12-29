const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {User,Course} = require("../db");

// User Routes
router.post('/signup',  async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    const userExist = await User.findOne({
        username: username
    })

    if(!userExist){
        const response = await User.create({
            username: username,
            password: password
        });
        res.status(200).json({ msg: "User created successfully" });
    }
    res.status(200).json({msg:"User already exists"});

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.send(response);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const course_id = req.params.courseId;
    const user_name = req.headers.username;

    const response = await User.updateOne({
        username:user_name
    },{
        "$push":{
            purchased_courses:course_id
        }
    })


});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user_name = req.headers.username;

    const userDetails = await User.findOne({username:user_name});

    const courseDetails = await Course.find({
        _id:{
            "$in":userDetails.purchased_courses
        }
    })

    res.status(200).json({
        courses : courseDetails
    })
});

module.exports = router