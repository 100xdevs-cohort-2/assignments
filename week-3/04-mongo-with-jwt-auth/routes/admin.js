const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async(req, res) => {
     // Implement admin signup logic
     const username = req.body.username;
     const password = req.body.password;
 
     await Admin.create({
         username: username,
         password: password
     })
     res.json({
         message:'Admin created successfully'
     })
});

router.post('/signin', async(req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.findOne({
        username: username,
        password: password
    })

    if (!user){
        res.status(411).json({
            msg: "Incorrect email and pwd"
        })
    } else {
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({token});
    }    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg: "Course created successfully" , courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

module.exports = router;