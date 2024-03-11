const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.find({
        username: username
    }).then(function(response){
        if(response.length > 0){
            res.status(403).json({
                message: "user already exists.",
            })
        }
        else{
            Admin.create({
                username: username,
                password: password
            }).then(function(){
                res.status(200).json({
                    message: "Admin created successfully!"
                })
            })
        }
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    

    res.json({
        message: "Course created successfully!",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.status(200).json({
        courses: response
    });
});

module.exports = router;