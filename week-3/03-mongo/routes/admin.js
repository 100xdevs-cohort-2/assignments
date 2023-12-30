const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    try {
        const username = req.body.username;
        const password = req.body.password;
        const result = await Admin.create({username, password});
        res.status(201).json({"message": "Admin created successfully"});

    } catch(e) {
        console.log("Error: ", e);
        res.status(404).json({"message": "Please provide the username and password"});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    try {
        const courseDetails = req.body;
        const result = await Course.create(courseDetails);
        res.status(201).json({"message": "Course created successfully", "courseId": result._id})
    } catch(e) {
        console.log("Error: ", e);
        res.status(404).json({"message": "Please provide the all the course information"});
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    try {
        const result = await Course.find({});
        res.status(200).json(result);
    } catch(e) {
        console.log("Error: ", e);
        res.status(404).json({"message": "Ooops, something occurs"});
    }
});

module.exports = router;