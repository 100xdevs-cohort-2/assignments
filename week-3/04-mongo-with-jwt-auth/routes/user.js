const { Router } = require("express");
const router = Router();
const dotenv = require('dotenv').config()
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    try {
        const exists = await User.findOne({username:username});
        if(exists){
            res.status(404).json({
                message:"Username already exists"
            })
            return;
        }
        const new_user =  new User({
            username:username,
            password:password
        })
        await new_user.save();
        res.status(200).json({
            message:'User created successfully',
        })
    } catch (error) {
        res.status(403).json({
            message:"Internal server error!"
        })
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    try {
        const exists = await User.findOne({username,password});
        if(exists){
            const token = jwt.sign({username},process.env.JWTPASSWORD)
            res.status(200).json({
                token
            })
        }else {
            res.status(403).json({
                message:"Invalid username or password!"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        });
    }
});


router.get('/courses',userMiddleware,async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({
            courses:courses,
        })
    } catch (error) {
        console.log(error);
        return;
    }
});

router.post('/courses/', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.query.courseId;
    try {
        const decoded = jwt.verify(req.headers.authorization,process.env.JWTPASSWORD)
        const username = decoded.username
        const user_details = await User.findOne({username})
        const password = user_details.password
        const course_details = await Course.findById(courseId)
        await User.updateOne({username,password},{$push:{purchasedCourses:course_details}});
        res.status(200).json({
            message:"Course purchased successfully"
        })
    } catch (error) {
        res.status(500).json({
            message:"Some internal error while purchasing"
        })
    }
    
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const decoded = jwt.verify(req.headers.authorization,process.env.JWTPASSWORD)
        const username = decoded.username
        const user_details = await User.findOne({username})
        const password = user_details.password
        const user = await User.findOne({username,password})
        res.status(200).json({
            purchasedCourses:user.purchasedCourses
        })
    } catch (error) {
        console.log(error);
        return;
    }
    

});

module.exports = router;