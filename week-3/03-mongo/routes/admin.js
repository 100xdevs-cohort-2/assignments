const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin }= require("../db")
const { Course } = require('../db')

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password; 

    const admin= new Admin({
        username: username,
        password: password
    
    })
    admin.save().then(function(value){
        if (!value) {
            return res.status(400).json({
                msg: "Admin not created"
            })
        }
        res.status(200).json({
            msg: "Admin created"
        })
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title= req.body.title;
    const description= req.body.description;
    const price= req.body.price;
    const imageLink= req.body.imageLink;
    const published= req.body.published;

    const course= new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
        published: published
    
    })
    course.save().then(function(value){
        if (!value) {
            return res.status(400).json({
                msg: "Course not created"
            })
        }
        res.status(200).json({
            msg: "Course created"
        })
    })
    

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    Course.find().then(function(value){
        if (!value) {
            return res.status(400).json({
                msg: "No courses found"
            })
        }
        res.status(200).json({
            msg: "Courses found",
            courses: value
        })
    })
});

module.exports = router;