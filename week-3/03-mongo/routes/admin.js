const { Admin, Course } = require('../db')
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        username: username,
        password: password
    })
    .then(function(){
        res.json({
            msg: "Admin created Successfully"
        })
    })
    .catch(function(){
        res.json({
            msg:"Something is not right"
        })
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink

    const newCourse = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    
    res.json({
        msg: "Course created successfully",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
        .then(function(response){
            res.json({
                courses: response
            })
        })
});

module.exports = router;