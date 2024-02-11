const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    await Admin.create({
        username: username,
        password: password
    });
    res.json({
        message: "Admin is created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { tittle, description, image, price } = req.body;

    await Course.create({
        title  : tittle,
        description: description,
        imageLink: image,
        price: price
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});

    res.send({
        courses: courses
    })
});

module.exports = router;