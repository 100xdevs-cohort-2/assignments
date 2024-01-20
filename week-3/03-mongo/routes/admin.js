const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db/index");
const {Course} = require("../db/index");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })

    res.json({
        message: 'Admin created successfully' 
    })


});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    //zod

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', 
        courseId: newCourse._id
    })

    

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    const courses = await Course.find();
    res.json({
        courses
    })
});

module.exports = router;