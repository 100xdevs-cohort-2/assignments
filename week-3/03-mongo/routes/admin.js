const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(()=>{
            res.json({msg: "Admin Created successfully"});
    })
    .catch((err)=>{
        res.send(err);
    })

    // await Admin.create({
    //     username: username,
    //     password: password
    // })

    // res.json({
    //     message: 'Admin created successfully'
    // })
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
       // here we can apply zod for input 
       validation
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({msg: 'Course created successfully',courseId: newCourse._id})
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then((response)=>{
        res.json({courses:response});
    })
    .catch((err)=>{
        msg:"Cannot retrive the courses at the moment"
    })
});

module.exports = router;