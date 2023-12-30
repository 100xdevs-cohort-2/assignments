const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db/index');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    
    try {
        const { username, password } = req.body;
        const result = await Admin.create({username, password});
        res.status(201).json({"message": "Admin created successfully"});
    } catch(e) {
        console.log("Error: ", e);
        res.status(400).json({"message": "Something bad happens"});
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic

    try{
        const { username, password } = req.body;

        const result = await Admin.findOne({username});
        
        if(result == null || result.password != password)
            return res.status(404).json({"message": "Either password or username is incorrect"});

        const token = jwt.sign({username}, SECRET_KEY);
        res.status(200).json({"token": token});

    } catch(e) {
        console.log("Error: ", e);
        res.status(400).json({"message": "Either username or password is incorrect"});
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