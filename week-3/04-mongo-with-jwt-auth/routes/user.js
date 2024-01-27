const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt= require("jsonwebtoken");
const jwtPassword="1234";
const {User,Course} = require("../db/index");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    try{
        const newUser= new User({username,password});
        newUser.save();
        res.status(200).json({message:"User created Successfully"});

    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
    

});

router.post('/signin', async(req, res) => {
router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    try{
        const user=await User.findOne({username,password});
        if(user){
            const token=jwt.sign({username},jwtPassword);
            res.status(200).json({token});
            return;
        }   
        else{
            res.status(403).json({message:"Invalid username and password"});
        }

    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
});

router.get('/courses',async (req, res) => {
router.get('/courses', (req, res) => {
    // Implement listing all courses logic

    try{

        const auth=req.headers.authorization;
        const parts=auth.split(' ');
        const token=parts[1];

        const decoded=jwt.verify(token,jwtPassword);
        if(decoded){
            const courses=await Course.find();
            res.status(200).json(courses);

        }
        else{
            res.status(403).json({message:"Invalid token"});
        }

    }
    catch(err){
        res.status(500).json({message:"Internal server error"});

    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseid= req.params.courseId;
    try{
        const course= await Course.findById(courseid);
        if(course){
            const username= req.username;
            
            const user= await User.findOne({username});
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

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.username;


    const user=await User.findOne({username});
    if(user.purchasedCourses.length){
        res.status(200).send(user.purchasedCourses);
    }
    else{
        res.status(404).json({message:"No Courses purchased"});
    }
});

module.exports = router;
module.exports = router
