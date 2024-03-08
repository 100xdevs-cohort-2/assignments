const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course} = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username : username,
        password : password
    });
    res.json({
        "msg" : "Admin Created Successfully",
    })
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await Admin.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(411).json({
            message : "Incorrect Email and Password"
        })
    }
})

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const course = await Course.create({
        title,
        description,
        price,
        imageLink,
    })
    res.json({
        "msg" : "Course Created Successfully",
        CourseId : course._id,
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const responce = await Course.find({});
    res.json({
        courses : responce
    })
});

module.exports = router;