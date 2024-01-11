const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require('../db/index')
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;
    const newUser = await Admin.create({
        username,
        password,
    })
    return res.status(200).json({
        msg:`${newUser.username} registered Successfully`
    })

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink} = req.body;
    const newCourse = await Course.create({
        title,description,price,imageLink
    })
    return res.status(200).send(`${newCourse._id} is created`)
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({})
    return res.status(200).json({
        Courses: courses,
    })
});

module.exports = router;