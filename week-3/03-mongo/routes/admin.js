const { Router, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    const existAdmin = await Admin.findOne({ username: username })
    if (existAdmin) {
        return res.json({
            message: "Admin Already Exists with this username"
        })
    }

    const response = await Admin.create({
        username: username, password: password
    })

    return res.status(200).json({ message: 'Admin created successfully' })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;

    // save the id of course in Admin's
    const username = req.headers.username
    const admin = await Admin.findOne({ username })

    const course = await Course.create({ title, description, price, imageLink, published: true, author: admin._id })

    await Admin.updateOne({ username }, {
        $push: { courses: course._id }
    })


    return res.json({ message: 'Course created successfully', courseId: course._id })
});



router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const allCourses = await Course.find({})

    return res.status(200).json({
        courses: allCourses
    })
});

module.exports = router;