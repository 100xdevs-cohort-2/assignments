const { Router, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const {Admin, Course} = require("../db");

// Admin Routes
router.post('/signup' , async (req, res) => {
    // Implement admin signup logic
    
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, "  ", password)
    await Admin.create({
        username: username,
        password: password
    })

    res.json({message:"Admin created successfully"});
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let imageLink = req.body.imageLink;

    let newCourse = Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        message:"Course created successfully.",
        courseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    let response = await Course.find({});
    res.json({
        courses: response
    });
});

module.exports = router;