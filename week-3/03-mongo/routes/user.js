// import external modules
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const {Course} = require("../db"); 
const bodyParser=require("body-parser");

//import internal modules
router.use(bodyParser.json()); 

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username; 
    const password = req.body.password; 
    if(await User.findOne({username}))
    return res.status(403).send("User already exists"); 

    const user = new User({username,password}); 
    user.save(); 
    return res.status(200).json({msg : "User created successfully"});
});

router.get('/courses', userMiddleware,async(req, res) => {
    
    res.status(200).json({courses : await Course.find()}); 
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

const username = req.headers.username; 
const password = req.headers.password; 

const courseId = req.params.courseId; // Stores the userId given in params

try
{
const courseToBeBought = await Course.findById(courseId); 
const buyer =await User.findOne({username,password}); 

    if(buyer.purchasedCourse.some((item)=>(item._id.toString()===courseId)))
    return res.status(403).json({msg : "Course already bought"});
    buyer.purchasedCourse.push(courseToBeBought); 
    buyer.save(); 
    return res.send("Course purchased successfully"); 
}
catch(err)
{
    res.status(404).json({msg : "Course not found"}); 
}

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username; 
    const user = await User.findOne({username}); 
    if(!user.purchasedCourse.length)
    return res.status(200).json({msg : "No course purchased"}); 
    return res.status(200).json({purchasedCourses : user.purchasedCourse}); 
});

module.exports = router