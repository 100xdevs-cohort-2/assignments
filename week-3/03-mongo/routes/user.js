const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const db = require("../db/index");
const router = Router();
const userModel = db.User;
const courseModel = db.Course;

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    /*
    POST /users/signup Description: Creates a new user account. Input: { username: 'user', password: 'pass' } Output: { message: 'User created successfully' }
    */
    try{
        const user = new userModel({
            username:  req.body.username,
            password: req.body.password
        });
        user.save();
        res.status(200).json({ message: 'User created successfully' });
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await courseModel.find({});
        console.log("Retrived courses..!");
        res.status(200).json({courses});
       }
       catch(err){
        res.status(500).json({error: err});
       }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        console.log("Inside course purchase route.");
        const courseId = req.params.courseId;
        const username = req.headers.username;
        await userModel.findOneAndUpdate({username: username}, { $push: { "purchasedCourseId": courseId }});
        res.status(200).json({ message: 'User purchased the course successfully. CourseId: '+courseId });
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    console.log("Inside purchased courses route.");
    const user = await userModel.findOne({ 
        username: req.headers.username 
    });
    console.log(user.purchasedCourseId);
    let courses = user.purchasedCourseId;
    let purchasedCourses = [];
    for (courseId of courses){
        if(courseId != ""){
            const purchasedCourseInfo = await courseModel.findOne({_id: courseId});
            purchasedCourses.push(purchasedCourseInfo);
        }
    }
    res.status(200).json({purchasedCourses: purchasedCourses});
});

module.exports = router