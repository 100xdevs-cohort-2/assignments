const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt=require('jsonwebtoken');
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    await Admin.create({
        username,
        password
    })
    res.json({msg : "Admin Created Successfully"});

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const legitUser=await Admin.findOne({
        username,
        password
    })
    if(legitUser)
    {
        const jwtToken=jwt.sign({username},JWT_SECRET);
        res.json({jwtToken});
    }
    else{
        res.json({msg : "User not found"});
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    const newCourse=await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});

module.exports = router;