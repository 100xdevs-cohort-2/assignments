const { Router } = require("express");
const { User, Course } = require('../db/index');
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(() => {
        res.json({ message: 'User created successfully' });
    });
});

router.get('/courses', async (req, res) => {
    res.json(await Course.find({}));
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const user = await User.updateOne({ username: req.headers.username }, { $push: { courses: req.params.courseId } })
    if (user.nModified !== 0)
        res.json({ message: "Course purchased successfully!" });
    res.sendStatus(404);
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({ username: req.headers.username });
    res.json(user.purchases);
});

module.exports = router;