const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
require('dotenv').config({path : 'config.env'});

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    });

    res.json({
        message: 'Admin created successfully'
    })
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(process.env.JWT_SECRET);
    
    const user = await Admin.find({
        username,
        password
    })
    console.log(user)
    if(user.length>0){
        const token = jwt.sign({username : username} , process.env.JWT_SECRET);
        res.json({token : token});
    }
    else{
        res.status(404).json({msg : "Incorrect email or password"});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
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
    });
    res.json({
        msg : "Course Created Successfully" , course_id : newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const course = await Course.find();
    res.json(course);
});

module.exports = router;