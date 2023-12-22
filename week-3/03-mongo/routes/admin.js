const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");

const router = Router();

router.post('/admin/signup', async (req, res) => {
    const { adminName, adminPassword } = req.body;

    try {
        await Admin.create({ adminName, adminPassword });
        res.json({
            message: 'Admin created successfully'
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/admin/courses', adminMiddleware, async (req, res) => {
    const { courseTitle, courseDescription, price, imageLink } = req.body;

    try {
        const newCourse = await Course.create({
            courseTitle,
            courseDescription,
            price,
            imageLink,
            published: true,
        });
        res.json({
            message: 'Course created successfully',
            courseId: newCourse._id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/admin/courses', adminMiddleware, async (req, res) => {
    try {
        const allCourses = await Course.find();
        res.json({ courses: allCourses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
