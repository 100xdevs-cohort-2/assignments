const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const db = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const existingAdmin = await db.Admin.findOne({ username: username })
    if (existingAdmin) {
        return res.status(400).send("Admin already exists")
    }
    const admin = new db.Admin({
        username: username,
        password: password
    })
    admin.save()
    res.json({
        "Msg": "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink
    const course = new db.Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    course.save()
    res.json({ message: 'Course created successfully', courseId: course._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await db.Course.find({})
    res.json({ courses: response })
});

module.exports = router;