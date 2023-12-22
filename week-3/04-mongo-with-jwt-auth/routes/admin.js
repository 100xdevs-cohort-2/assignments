const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const jwt = require('jsonwebtoken');
const authenticateToken=  require( '../middleware/authenticateToken');
const router = Router();



router.post('/admin/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ adminName: username });

        if (!admin || admin.adminPassword !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/admin/signup', authenticateToken,async (req, res) => {
    const { adminName, adminPassword } = req.body;

    try {

        const existingAdmin = await Admin.findOne({ adminName });
        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin name already exists' });
        }

        await Admin.create({ adminName, adminPassword });
        res.json({
            message: 'Admin created successfully'
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/admin/courses', adminMiddleware,authenticateToken, async (req, res) => {
    const { courseTitle, courseDescription, price, imageLink } = req.body;
    const adminId = req.admin._id; 

    try {
        const newCourse = await Course.create({
            courseTitle,
            courseDescription,
            price,
            imageLink,
            published: true,
            admin: adminId 
        });

        // Push the new course to the admin's list of courses
        await Admin.findByIdAndUpdate(adminId, { $push: { adminCourses: newCourse._id } });

        res.json({
            message: 'Course created successfully',
            courseId: newCourse._id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get('/admin/courses', adminMiddleware,authenticateToken, async (req, res) => {
    const adminId = req.admin._id; 

    try {
        const adminCourses = await Course.find({ admin: adminId });
        res.json({ adminCourses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;


