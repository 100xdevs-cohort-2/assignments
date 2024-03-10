const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const resp = await Admin.create({
        username,
        password
})
    if(resp){
        res.json({
            message :"Admin created Successful"
        })
    }
    else{
        res.json({
            message:"Admin not created"
        })
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const user = Admin.findOne({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            message:"Invalid user"
        })
    }
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price= req.body.price;
    Course.create({
        title,
        description,
        imageLink,
        price
    })
    .then((newcourse)=>{
        res.json({
            message:"Course created successfully ",courseId:newcourse._id
        })
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allcourses = await Course.find({})
    res.json({
        courses:allcourses
    })
});

module.exports = router;