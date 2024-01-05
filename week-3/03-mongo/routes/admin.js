const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    try {
        const { username, password } = req.body;
        if (!username) {
            return res.status(400).json({ msg: "Bad request" });
        }
        const admin = Admin.findOne({ username: username });
        if (admin) {
            return res.status(400).json({ msg: "Admin already exists" });
        }
        if (!admin) {
            Admin.create({ username: username, password: password });
        }
        res.status(200).json({ msg: "Admin created" });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const { title, description, image, price } = req.body;
        if (!title || !description || !image || !price) {
            return res.status(400).json({ msg: "Bad request" });
        }
        const newCourse = await Course.create({ title: title, description: description, image: image, price: price });
        res.status(200).json({ msg: "Course created", title: newCourse.title });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find({});
        res.status(200).json({ courses });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
});

module.exports = router;