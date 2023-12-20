const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const db = require("../db/index")
const router = Router();

const { Admin, Course } = db;
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
    })
    admin.save()
        .then((user) => { res.status(200).json({ message: 'Admin created successfully' }) })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Something went wrong in Admin creation" })
        })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const course = new Course({ ...req.body })
    course.save()
        .then((course) => {
            res.status(200).json({ message: 'Course created successfully', courseId: course._id })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "Something hrouterened in course creation by admin" })
        })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find()
        .then((courses) => {
            res.status(200).json({ courses: courses })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ message: "Something hrouterened in returning courses" })
        })
});

module.exports = router;