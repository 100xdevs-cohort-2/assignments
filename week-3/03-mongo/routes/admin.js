const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");

const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const userExsists = await Admin.findOne({ username });
    if (userExsists) {
        return res.status(409).json({ message: "username already used" });
    }
    await Admin.create({ username, password });
    return res.status(200).json({ message: "Admin Created Sucessfully" });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const newCourse = await Course.create({
        ...req.body, author: req.user.username
    })
    return res.status(200).json({ message: 'Course created successfully', courseId: newCourse._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({});
    return res.status(200).json({ courses })
});

module.exports = router;