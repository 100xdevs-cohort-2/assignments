const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const db = require("../db/index")

const { User, Course } = db;

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save()
        .then((user) => { res.status(200).json({ message: 'User created successfully' }) })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Something went wrong in User creation" })
        })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find()
        .then((courses) => {
            res.status(200).json({ courses: courses })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "Something hrouterened in returning courses" })
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const userId = req.userId;
    User.findById(userId)
        .then((user) => {
            user.purchasedCourses.push(req.params.courseId);
            return user.save();
        })
        .then(() => res.status(200).json({ message: 'Course purchased successfully' }))
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Something hrouterened while purchasing the course" });
        });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    const userId = req.userId;
    User.findById(userId)
        .populate('purchasedCourses')
        .then((user) => {
            res.status(200).json({ purchasedCourses: user.purchasedCourses })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Something hrouterened while querying purchased courses" });
        });
});
module.exports = router;
