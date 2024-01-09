const { Router } = require("express");
const {User, Course} = require("../db/index");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    try{
        const {username,password} = req.headers;

        const newUser = await User.create({
            username,
            password
        })

        res.json({
            message: "User created successfully"
        })
    } catch (e) {
        res.json("Error signing up");
    }
});

router.get('/courses', async (req, res) => {
    const allCourses = await Course.find({});
    res.json(allCourses);

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const course = await Course.findOne({_id: req.params.courseId});
        const username = JSON.parse(req.headers).username;

        const updatedUser = await User.findOneAndUpdate({
            username: username
        },{
            $push: {purchasedCourses: course}
        });

        res.json({message: 'Course Purchased Succesfully'});
    } catch (e) {
        res.json("Some error occurred");
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try{
        const username = JSON.parse(req.headers).username;
        const user = await User.findOne({username});

        await user.populate('purchasedCourses');
        res.json({
            purchasedCourses: user.purchasedCourses
        })
    } catch (e) {
        res.json({
            Error: e.message
        })
    }
});

module.exports = router