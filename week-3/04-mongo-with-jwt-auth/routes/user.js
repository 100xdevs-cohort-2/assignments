const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken")
const { User, Course } = require('../db/index')
const jwtPassword = "devaccesskey"

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;

    let newUser = User({
        username : username,
        password : password,
        purchasedCourses : []
    })

    try {
        let savedEntry = await newUser.save();
        res.json({ message: 'User created successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    let auth_token = "Bearer " + jwt.sign({username : username, password : password}, jwtPassword);

    try {
        let user = await User.findOne({username : username, password : password});
        if(!user) {
            res.status(404).json({message : "User is not signed up!"})
            return ;
        }
        user.auth_token = auth_token;
        const savedEntry = await user.save();
        res.json({token : auth_token});
    }
    catch (err) {
        res.status(500).json({message : "Internal Server Error"})
    }

});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    try {
        let entries = await Course.find({});
        res.json({courses : entries});
    } catch(err) {
        res.status(500).json({ message : "Internal Server Error"});
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let courseId = parseInt(req.params.courseId);
    let auth_token = req.headers.authorization;
    try {
        let user = await User.findOne({auth_token : auth_token});
        console.log(user);
        if(!user) {
            res.status(404).json({ message : "User Not Found"});
            return;
        }

        let course = await Course.findOne({id : courseId});
        if(!course) {
            res.status(404).json({ message : "Course Not Found"});
            return;
        }

        user.purchasedCourses.push(course);
        try {
            await user.save();
            res.json({ message: 'Course purchased successfully' });
        } catch (err) {
            res.status(500).json({ message : "Unable to write to DB", error : err});
        }
    } catch(err) {
        res.status(500).json({ message : "Internal Server Error", error : err});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let auth_token = req.headers.authorization;
    try {
        let user = await User.findOne({auth_token : auth_token});
        if(!user) {
            res.status(404).json({ message : "User Not Found"});
            return;
        }
        res.json({ purchasedCourses : user.purchasedCourses});
    } catch(err) {
        res.status(500).json({ message : "Internal Server Error"});
    }
});

module.exports = router