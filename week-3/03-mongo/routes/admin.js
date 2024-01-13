const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

//import Admin table from db
const { Admin, Course } = require("../db/index.js")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password,
    })
        .then((createdUser) => {
            console.log(createdUser)
            res.json({
                message: 'Admin created successfully'
            })
        })
        .catch((error) => {
            res.status(410).json({
                message: 'error in admin creation'
            })
        })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    //we can use "zod" to do i/p validation
    const newCourse = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    console.log(newCourse)
    if (newCourse) {
        res.json({
            message: 'course created successfully',
            courseId: newCourse._id
        })
    }
    else {
        res.status(410).json({
            message: 'error in course creation'
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourse = await Course.find({})
    if (allCourse) {
        res.json({
            courses: allCourse
        })
    }
    else {
        res.status(410).json({
            msg: "error while fetching courses"
        })
    }

});

module.exports = router;