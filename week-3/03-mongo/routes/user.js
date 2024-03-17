const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const response = await User.create({username, password});
    if(!response){
        res.status(500).json({message: "Unexpected error occured!"});
    }
    res.status(200).json({message: "User created successfully!"});
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    if(!response){
        res.status(500).json({message: "Unexpected error occured!"});
    }
    res.status(200).json({courses: response});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const response = await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    if(!response){
        res.status(500).json({message: "Unexpected error occured!"});
    }
    res.status(200).json({message: "Purchase complete!"});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    const user = await User.findOne({username});
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    
    res.json({courses});
});

module.exports = router