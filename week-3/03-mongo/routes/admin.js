const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username,
        password
    })



    res.json({ message: 'Admin created successfully' })
});

router.post('/courses',  adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    const title = req.body.title
    const description = req.body.description
    const imgLink = req.body.imgLink
    const price = req.body.price

    const newCourse = await Course.create({
        title,
        description,
        imgLink,
        price

    })

    res.json({ 
        message: 'Course created successfully', courseId: newCourse._id}
    )
    //do zod vaildation for the inputs
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    if(!courses){
        res.send("No courses found")
    }
    res.json({Courses: courses})



});

module.exports = router;

