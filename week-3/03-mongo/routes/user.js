const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    let userExists = await User.findOne({username: username});

    if(userExists)
    {
        return res.status(400).json({msg: "User already exists"});
    }

    const newUser = new User({
        username: username,
        password: password,
        purchasedCourses: []
    })

    newUser.save();
    res.json({msg: 'User Created Successfully'});
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find().select('-__v -_id');
    return res.json({courses: courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    let user = await User.findOne({username: username}).select("username purchasedCourses");

    user.purchasedCourses.push(courseId);

    user.save();

    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    let user = await User.findOne({username: username}).select("username purchasedCourses");

    let courses = await Course.find({id : {$in: user.purchasedCourses}}).select('-__v -_id');

    res.json({purchasedCourses: courses});

});

module.exports = router