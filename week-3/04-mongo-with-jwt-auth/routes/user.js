const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db/index');
const UserSecret = "User";
const jwt = require('jsonwebtoken');
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try{
        const ExistingUser = await User.exists({username:req.headers.username});
    
        if(ExistingUser){
            res.send({msg:"Failed to create Admin, Username Already Exists!"});
        }
        else{
            const user = await User.create({
                username: req.headers.username,
                password: req.headers.password,
                purchasedCourses: []
            });
            
            res.send({id:user._id,msg:"user Succesfully created!"});
        }
    }catch(err){
        res.status(500).json({err});
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try{
        const {username,password} = req.headers;
        const user = await User.findOne({username,password});
        
        if(user){
            const token = await jwt.sign({id:user._id,"username":username},UserSecret);
            res.json({
                "token": token,
                "message": "Signed in Successfully!!"
            });
        }else{
            res.json({message:"Wrong Credentials!"});
        }
    }catch(err){
        res.status(500).json({err});
    }
});

router.get('/courses',userMiddleware, async(req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find({published:true});
        res.status(200).json(courses);
    }catch(err){
        res.status(500).json({err});
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const user = await User.findOne({_id:req.user.id});
        
        const courseId = req.params.courseId;
        
        const course = await Course.findOne({_id:courseId});
        
        if(course && course.published){
            user.purchasedCourses.push(course._id);
            user.save();
            res.json({ message: 'Course purchased successfully' })
        }else{
            res.json({ message: 'Course not Published yet!' })
        }
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        
        const user = await User.findOne({ _id:req.user.id }).populate('purchasedCourses')
        const purchasedCourses = user.purchasedCourses;
        
        res.json({"Purchased Courses":purchasedCourses});
    }catch(err){
        res.status(500).json({err});
    }
});

module.exports = router;