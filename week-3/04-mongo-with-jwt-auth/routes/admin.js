const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const jwt = require('jsonwebtoken');
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

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const { username, password } = req.body;
    const userExsists = await Admin.findOne({ username });
    if (!userExsists || userExsists.password != password) {
        return res.status(401).json({ message: "wrong username/password" });
    }
    console.log(process.env.secretkey);
    const token = jwt.sign({ data: { id: userExsists._id } }, process.env.secretkey);

    return res.status(200).json({ token });

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