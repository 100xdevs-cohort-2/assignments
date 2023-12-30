const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User } = require('../db/index');
const { Course } = require('../db/index');

const router = Router();

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })   

});

router.get('/courses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const courses = await Course.find({});
    res.json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    
});

module.exports = router;
