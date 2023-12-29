const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index.js');

// Admin Routes
router.post('/signup', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.password
    });

    res.json({
        msg: "Admin created Successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {

    // Course.create({
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price,
    //     imageLink: req.body.imageLink,
    // })
    // res.json({ message: 'Course created successfully'});

    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink,
        });
        res.json({ message: 'Course created successfully', courseId: course._id });
    } catch (err) {
        res.status(500).json({message: 'Error creating course', error: err})
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    courses = await Course.find({});
    res.send(courses);
});

module.exports = router;