const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username ,password} = req.body;
    
    const newUser = new User({
        username : username,
        password : password
    });

    res.status(200).json(newUser);


});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
    let courses = Course.findAll();
    res.status(200).json(courses);
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
