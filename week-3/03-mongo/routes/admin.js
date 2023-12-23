const { Router } = require("express");
const {Admin, Course} = require("../db/index")
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{
        const {username, password} = req.headers;

        await Admin.create({
            username,
            password
        })
        res.json({
            message: "Admin created successfully"
        })
    } catch (e) {
        res.json({
            message: e.message
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try{
        const {title, description, price, img} = req.body;

        const newCourse = await Course.create({
            title,
            description,
            price,
            img
        })

        res.json({
            message: "Course created successfully",
            courseId: newCourse._id
        })
    } catch (e) {
        res.json({
            message: "Some error occurred in creating course"
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try{
        const allCourses = await Course.find({});
        res.json(allCourses);
    } catch (e) {
        res.json({
            message: "Some error occurred in fetching courses"
        })
    }
});

module.exports = router;