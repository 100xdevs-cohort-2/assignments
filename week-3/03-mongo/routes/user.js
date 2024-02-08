const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db/index');
// User Routes


router.post('/signup',async (req, res) => {
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try{
        const username=req.body.username;
        const password=req.body.password;
    

        const user= await User.findOne({username,password});
        console.log(user);
        if(user){
            res.status(400).json({message:"User already exist"})
            return;
        }
        
        const user1=new User({
            username,
            password,
            purchasedCourses: []
        });
    
        user1.save();
        res.status(200).json({message:"User created Successfully"
        });
    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }

});

router.get('/courses', async(req, res) => {
router.get('/courses', (req, res) => {
    // Implement listing all courses logic

    try{
        const username=req.headers.username;
        const password=req.headers.password;

        const user= await User.findOne({username,password});
        if(user){
            const courses=await Course.find();
            res.status(200).send(courses);
        }
        else{
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }

    }
    catch(err){
        res.status(500).json({message:"Internal server error"});

    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseid= req.params.courseId;
    try{
        const course= await Course.findById(courseid);
        if(course){
            const username= req.headers.username;
            const password=req.headers.password;
            const user= await User.findOne({username,password});
            user.purchasedCourses.push(course);
            user.save();            
            res.status(200).json({message:'Course purchased successfully' });
        }
        else{
            
            res.status(404).json({message:"Course did not found Invalid course Id"})
        }
    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    const password=req.headers.password;

    const user=await User.findOne({username,password});
    if(user.purchasedCourses.length){
        res.status(200).send(user.purchasedCourses);
    }
    else{
        res.status(404).json({message:"No Courses purchased"});
    }

});

module.exports = router;
module.exports = router
