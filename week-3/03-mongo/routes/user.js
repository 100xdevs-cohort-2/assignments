const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User} = require("../db")
const {Course} = require("../db")
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username ;
    const password  = req.headers.password ;
    await User.create({
        username , 
        password, 
    });
    res.json({
        msg : "user created successfully"
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses : response
    });
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId ;
    const username = req.headers.username ;
    await User.updateOne({
        username : username 
    },{
       "$push" : {
        purchasedCourses : courseId
       } 
    })
    res.json({
        message : "purchase complete !"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic    
    const user = await User.findOne({
        username :  req.headers.username
    });
    let purchased_courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    });  
    res.json({
       courses : purchased_courses
    })
});

module.exports = router