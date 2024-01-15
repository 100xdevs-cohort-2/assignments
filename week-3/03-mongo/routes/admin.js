const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index');
const e = require("express");

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const isexist = await Admin.findOne({
        username
    })
    if (isexist) {
        res.status(403).json({
            msg: "Username already exists"
        })
    }
    else {
        Admin.create({
            username: username,
            password: password
        })
        res.status(200).json({
            message: 'Admin created successfully'
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imagelink = req.body.imagelink
    const cid = await Course.create({
        title,
        description,
        price,
        imagelink
    })
    res.status(200).json({
        message: 'Course created successfully',
        courseId: cid._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allcourse = await Course.find({})
    res.status(200).json({
        Courses: allcourse
    })
});

module.exports = router;