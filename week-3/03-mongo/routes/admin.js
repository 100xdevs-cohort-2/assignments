const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} =require('../db/index')
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    try {
        const { username, password } = req.body;
        const newAdmin = new Admin({ username, password });
        await newAdmin.save();
        res.status(200).json({ message: 'Admin created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    try {
        const { title, description, price, imageLink } = req.body;
        const newCourse = new Course({ title, description, price, imageLink });
        await newCourse.save();
        res.status(200).json({ message: 'Course saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;