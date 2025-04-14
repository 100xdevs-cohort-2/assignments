const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

// const admin = require('../db/index').Admin;
const { Admin, User, Course } = require('../db/index');

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    await Admin.create({
        username,
        password
    });

    res.json({
        msg : "Admin created successfully"
    });


});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username,
        password
    });

    console.log(admin);
    if(admin){
        const token = jwt.sign({username}, JWT_SECRET);
        
        res.json({
            token  
        })
    }
    else{
        res.status(403).json({
            msg : "Incorrect email or password"
        })
    }



});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const course = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        msg : "Course created successfully",
        courseId : course._id
    })
    
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const course = await Course.find({});

    res.json({
        course
    })
});

module.exports = router;

