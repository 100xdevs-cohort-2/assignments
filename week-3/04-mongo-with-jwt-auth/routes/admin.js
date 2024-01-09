const express = require('express');
const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, User, Course } = require('../db');
const { JWT_SECRET } = require('../config');
const router = express.Router();
const jwt = require('jsonwebtoken');


// Admin Routes

router.post('/signup', async (req, res)=>{
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin Created Successfully'
    })
});


router.post('/signin', async (req, res) =>{
    // Implement admin signin logic


    // Clearly here is one more usage of JWT it saves one database call
    // because if we hadn't use JWT then the username and password send by admin 
    // would be crosschecked with the database's entry.


    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET);

        res.json({
            token
        })
    }else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});


router.post('/courses', adminMiddleware , async (req, res) =>{
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // better to use zod here

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price

    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});



router.get('/courses', adminMiddleware, async (req,res) => {
    const response = await Course.find({});

    res.json({
        courses: response

    })
});

module.exports = router;
