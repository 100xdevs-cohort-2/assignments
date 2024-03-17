const { Router } = require("express");
const {User, Course} = require("..db/index");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    try{
        const {username,password} = req.body;
        await User.create({username,password});
        res.json("User created successfully");
    } catch (e) {
        res.json("Error occurred in signing up");
    }
});

router.post('/signin', async (req, res) => {
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username,password});

        const Token = jwt.sign({
            username : username,
            password : password
        })
        res.json({
            token : Token
        })
    } catch (e) {
        res.json("Error in credentials");
    }
});

router.get('/courses', async (req, res) => {
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const course = await Course.findOne({_id: req.params.courseId});
        const updatedUser = await User.findOneAndUpdate({
            username: req.user
        },{
            $push : {purchasedCourses: course}
        })
        res.json("Course purchased successfully");
    } catch (e) {
        res.json("Error in purchasing course");
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const username = await User.findOne({username: req.user});
        const purchasedCourses = await User.populate('purchasedCourses');
        res.json({
            purchasedCourses : purchasedCourses
        })

    } catch (e) {
        res.json("Error fetching purchased courses");
    }
});

module.exports = router