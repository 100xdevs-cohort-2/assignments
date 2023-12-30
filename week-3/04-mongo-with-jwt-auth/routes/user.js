const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index');
const mongoose = require('mongoose')
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const ObjectId = mongoose.Types.ObjectId;

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    try {
        const username = req.body.username;
        const password = req.body.password;
        const result = await User.create({username, password});
        res.status(201).json({"message": "User created successfully"});
    } catch(e) {
        console.log("Error: ", e);
        res.status(404).json({"message": "Please provide the username and password"});
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    try{
        const { username, password } = req.body;
        const result = await User.findOne({username});
        
        if(result == null || result.password != password)
            return res.status(404).json({"message": "Either password or username is incorrect"});

        const token = jwt.sign({username}, SECRET_KEY);
        res.status(200).json({"token": token});

    } catch(e) {
        console.log("Error: ", e);
        res.status(400).json({"message": "Either username or password is incorrect"});
    }
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    try {
        const result = await Course.find({});
        res.status(200).json(result);
    } catch(e) {
        console.log("Error: ", e);
        res.status(404).json({"message": "Ooops, something occurs"});
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    try {
        const courseId = new ObjectId(req.params.courseId);
        const username = jwt.decode(req.headers['authorization'].split(' ')[1], SECRET_KEY).username;
        console.log(username);
        const course = await Course.findOne({_id: courseId});
        if(course == null)
            return res.status(404).json({"message": "Course with given id not found"});
        
        const updatedDetails = await User.findOneAndUpdate(
            {username: username},
            {$push: {courses: course}}, 
            {new: true}      // to return the updated user data
        );
        res.status(201).json({'message': 'Course purchased successfully'});
    } catch(e) {
        console.log("Error: ", e);
        res.status(404).json({"message": "Something bad happened"});
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    try {
        const username = jwt.decode(req.headers['authorization'].split(' ')[1], SECRET_KEY).username;
        const userDetails = await User.findOne({username});
        res.status(200).json({"purchasedCourses": userDetails.courses});
    } catch(e) {
        console.log("Error: ", e);
        res.status(400).json("Oops, something went wrong");
    }
});

module.exports = router