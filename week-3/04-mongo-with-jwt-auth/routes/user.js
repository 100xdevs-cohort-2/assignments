const { Router } = require("express");
const { sign } = require("../utils/jwt");
const { User, Course } = require("../db/index");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(() => {
        res.json({ message: "User created successfully" })
    });
});

router.post('/signin', (req, res) => {
    if (User.findOne({ username: req.headers.username, password: req.headers.password }))
        res.json({ token: sign({ username: req.headers.username })});
    res.sendStatus(401);
});

router.get('/courses', async (req, res) => {
    console.log("here!!!");
    res.json({ courses: await Course.find({}) });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const result = await User.updateOne({ username: req.username }, { $push: { purchases: await Course.findById(req.params.courseId) } });
    // console.log(req.username);
    if (result.modifiedCount != 0)
        return res.json({ message: "Course purchased successfully" });
    res.sendStatus(500);
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    res.json({ purchasedCourses: await User.findOne({ username: req.username }) });
});

module.exports = router