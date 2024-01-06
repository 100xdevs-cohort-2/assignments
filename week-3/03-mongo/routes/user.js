const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
        try{
        const { username, password } = req.headers;
        const user = new User({ username, password })
        const exist = await User.findOne({username, password})
        if(exist){
            return res.sendStatus(404);
        }
        await user.save();
        res.json({
            message: "User created successfully"
        })
    }
    catch{
        res.sendStatus(404);
    }

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find({});
        res.json({ courses });
    }
    catch(err){
        res.sendStatus(404);
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const { courseId } = req.params;
        const course = await Course.findOne({ _id : courseId });
        const user = await User.findOne({ username : req.headers.username })
        user.purchasedCourses.push(course);
        await user.save();
        res.json({
            message: "Course purchased successfully"
        })
    }
    catch(err) {
        res.sendStatus(404);
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const username = req.headers.username;
        const user = await User.findOne({ username }).populate('purchasedCourses')
        const purchasedCourses = user.purchasedCourses;
        res.json({
            purchasedCourses
        })
    }
    catch(err) {
        res.sendStatus(404);
    }
});

module.exports = router;
