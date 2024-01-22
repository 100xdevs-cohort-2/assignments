const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../db")
const router = Router();
const {Course} = require("../db")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username ;
    const password = req.headers.password ;
    await Admin.create({
        username , 
        password
    })
    res.json({
        msg : "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title ;
    const description = req.body.description ;
    const price = req.body.price ;
    const imageLink = req.body.imageLink ;
    const newCourse = await Course.create({
        title,
        description,
        price ,
        imageLink
    })
    res.json({
        msg : "Course created succesfully" ,
        courseId : newCourse._id
    })
    //zod - for input validation     
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   const response = await Course.find({});
   res.json({
    courses : response
   })
});

module.exports = router;