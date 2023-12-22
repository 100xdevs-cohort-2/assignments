const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../db");


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
    const username = req.headers.username;
    const password = req.headers.password;
    try {
        const course_details = await Course.findById(courseId)
        await User.updateOne({username,password},{$push:{purchasedCourses:course_details}});
        res.status(200).json({
            message:"Course purchased successfully"
        })
    } catch (error) {
        console.log(error);
        return;
    }
    
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;
    try {
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
