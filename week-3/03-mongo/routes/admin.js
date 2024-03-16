const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(function(){
        res.json({
            message: "Admin created successfully"
        })
    })
    .catch(function(){
        res.json({
            message: "Admin not created "
        })
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price= req.body.price;
    const newCourse = await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    res.json({
        message: "Course Created Successfully",courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
        .then(function(response){
            res.json({
                courses:response
            })
        })
});

module.exports = router;