const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username =  req.body.username;
    const password =  req.body.password;

    await Admin.create({
        username : username,
        password : password
    })

    res.json({
        message : "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title : title,
        description : description,
        price : price,
        imageLink : imageLink
    })

    res.json({
        message : "Course created successfully !!",
        ID : newCourse._id
    })
});

// Using Promise Structure 
/* router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then(function(response){
        res.json({
            courses : response
        })
    })
}); */


// Using Async Await Structure 
router.get('/courses', adminMiddleware , async (req, res) => {
    const getCourses = await Course.find({})

    res.json({
        courses : getCourses
    })
})

module.exports = router;