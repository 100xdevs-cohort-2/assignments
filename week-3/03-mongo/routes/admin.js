const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {User, Admin, Course} = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;

    const admin = await Admin.findOne({username, password});
    if (admin) {
        return res.status(400).json({
            msg: "Admin already exists!"
        })
    }

    await Admin.create({
        username: username,
        password: password
    })
    return res.status(201).json({
        msg: "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;

    const course = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })

    return res.status(201).json({
        msg: "Course created successfully",
        courseId: course._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})

    return res.status(200).json({
        courses: response
    })
});

module.exports = router;