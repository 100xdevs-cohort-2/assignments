const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const router = Router();

let id = 0;

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const adminDetail = new Admin({
        username: username,
        password: password
    })
    adminDetail.save().then(res.json({message: 'Admin created successfully'}));
});

router.post('/courses', adminMiddleware, (req, res) => {

    id++;

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const courseDetail = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    courseDetail.save().then(res.json
        ({message: 'Course created successfully', 
        courseId: id}));
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await User.find({});
    res.json({courses: allCourses});

});

module.exports = router;