const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { decodeJwt, signJwt } = require("../jwt");
const { User, Course } = require("../db");
const performChecks = require("../middleware/validator");

// User Routes


    router.post('/signup', async(req, res) => {
    // Implement admin signup logic

    let username= req.body.username;
    let password= req.body.password;

    await User.create(
        {
            username: username,
            password: password,
        }
    );
    res.json({ message: 'User created successfully' });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    console.log("user/signin");

    let username= req.body.username;
    let password= req.body.password;

    let user = await User.findOne({username: username, password:password});

    if(!user){
        res.status(404).json({message:"Wrong credentials"});
        return;
    }
    
    let token = signJwt(username,password);
    res.json({ token: token });
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic

    
    console.log("user/courses - view all courses");

    let data = await Course.find();
    // try {
    //     var data = await Course.find(); 
    // } catch (err) {
    //     console.log(err);
    //     res.json(err);
    // }
    res.json({courses:data});
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic

    console.log("user/courses/:courseId - purchase a course");

    let userName = decodeJwt(req.headers.authorization);
    let user = await User.findOne({username:userName});
    user.courses.push(req.params.courseId);
    await user.save();
    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic

    console.log("user/courses - view all purchased courses");

    let userName = await decodeJwt(req.headers.authorization);

    try {
        var data = await User.findOne({username:userName}).populate('courses'); 
    } catch (err) {
        console.log(err);
        res.json(err);
    }
    // let data = await User.findOne({username:userName}).populate('courses');
    res.json({purchasedCourses: data.courses});
});

module.exports = router;