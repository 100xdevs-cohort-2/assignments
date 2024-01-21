const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db/index");


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    await Admin.create(
        {
            username: req.body.username,
            password: req.body.password,
        }
    );
    res.json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let data = await Course.create(
        {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.imageLink,
        }
    );
    res.json({ message: 'Course created successfully', courseId: data._id });

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    let data = await Course.find();
    res.json({courses:data})
});

module.exports = router;