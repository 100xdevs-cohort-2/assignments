const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index")
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    try {
        Admin.create({
            username: req.headers.username,
            password: req.headers.password
        });
        res.status(200).json({ meesage: 'Admin created successfully' });
    }
    catch (e) {
        res.status(400).send(e);
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.imageLink
        });
        res.status(200).json({
            message: 'Course created successfully',
            courseId: course
        });
    }
    catch (e) {
        res.status(400).send(e);
    }
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then(c => {
        res.json(c);
    })
});

module.exports = router;