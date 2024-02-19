const { Router, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db");
const jwt = require("jsonwebtoken")
let JWT_SECRET = "ravinder"

// Admin Routes
router.post('/signup' , async (req, res) => {
    // Implement admin signup logic
    
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, "  ", password)
    await Admin.create({
        username: username,
        password: password
    })

    res.json({message:"Admin created successfully"});
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let username = req.headers.username;
    let password = req.headers.password;
    
    let user = await Admin.find({username, password});
    if(user){
        let token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        });
    }
    else{
        res.json({
            message:"Incorrect email and pass"
        })
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let imageLink = req.body.imageLink;

    let newCourse = Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        message:"Course created successfully.",
        courseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    let response = await Course.find({});
    res.json({
        courses: response
    });
});

module.exports = router;