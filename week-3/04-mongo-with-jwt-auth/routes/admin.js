const { Router } = require("express");
const jwt = require("jsonwebtoken");
const {Admin, Course} = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwtSecret = "12345";

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    try {
        const {username, password} = req.body;
        const newAdmin = await Admin.create({username, password});
        res.json({message: 'Admin created succesfully'});
    } catch (error) {
        res.json({'error': error.message});
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try{
        const {username,password} = req.body;
        const user = await Admin.findOne({username,password});

        const Token = jwt.sign({
            username: username,
            password: password
        }, jwtSecret);

        res.json({
            token: Token
        })
    } catch (e) {
        res.json("Error in credentials");
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const course = await Course.create({title, description, price, imageLink});
    res.json( { message: 'Course created successfully', courseId: course.id });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

module.exports = router;