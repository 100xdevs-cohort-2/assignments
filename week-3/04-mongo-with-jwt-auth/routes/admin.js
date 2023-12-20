const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const db = require("../db/index")
const router = Router();

const { Admin, Course } = db;
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({ username: username, password: password })
        .then((user) => {
            if (user) {
                const token = jwt.sign({ username: username }, "password");
                res.status(200).json({ token: token })
            }
            else return res.status(404).send("User not found in db")
        })
        .catch((err) => {
            console.log(err.message)
            return res.status(500).send("Something went wrong")
        })

});

router.post("/signin", (req, res) => {
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
    })
    const token = jwt.sign({ username: req.body.username }, "password");
    admin.save()
        .then((user) => { res.status(200).json({ token: token }) })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Something went wrong in Admin creation" })
        })
})

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