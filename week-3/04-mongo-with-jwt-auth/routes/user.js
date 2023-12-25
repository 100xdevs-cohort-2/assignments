const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../../03-mongo/db");
const { decodeJwt } = require("../jwt");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    await User.create({username: req.body.username, password: req.body.password})
    res.json({ message: 'User created successfully' });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic

    let username= req.body.username;
    let password= req.body.password;
    let user = await User.findOne({username: username, password:password});
    if(!user){
        res.status(404).json({message:"Wrong credentials"});
    }
    
    let token = signJwt(username,password);
    res.json({ token: token });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    let data = await Course.find();
    res.json({courses:data});
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    let userName = decodeJwt(req.headers.Authorization);
    let user = await User.findOne({username:userName});
    user.courses.push(req.params.courseId);
    await user.save();
    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let userName = decodeJwt(req.headers.Authorization);
    let data = await User.findOne({username:userName}).populate('courses');
    res.json({purchasedCourses: data.courses});
});

module.exports = router