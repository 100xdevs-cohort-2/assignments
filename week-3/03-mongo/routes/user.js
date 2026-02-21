const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password){
        return  res.status(400).send("Username or Password missing");
    }
    const newUSer=await User.create({username: username, password: password});
    res.status(201).send("User created successfully");
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find({});
    res.status(200).send(courses);
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.headers.username;
    User.updateOne({username:username},{purchasedCourses:{$push: courseId}})
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const responce=await Course.find({});
});

module.exports = router