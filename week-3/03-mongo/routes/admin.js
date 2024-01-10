const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const collectionsOb=require("../db/index"); 
const Admin = collectionsOb.Admin; 
const Course = collectionsOb.Course; 
const bodyParser = require("body-parser"); 

router.use(bodyParser.json()); 

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username =req.body.username; 
    const password =req.body.password; 
     if(await Admin.findOne({username}))
     return res.status(403).send("Admin already exists");
    // console.log(username,password); 
     const admin = new Admin({username,password}); 
     admin.save(); 
     return res.status(200).send("Admin created"); 
    

});


router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic

    const title = req.body.title; 
    const description = req.body.description; 
    const price = req.body.price; 
    const imageLink = req.body.imageLink; 
    const course = new Course({title,description,price,imageLink}); 
    course.save(); 
    res.status(200).json({
        message : "Course created",
        courseId : course._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    res.status(200).json({courses : await Course.find()}); 
});
module.exports = router;
