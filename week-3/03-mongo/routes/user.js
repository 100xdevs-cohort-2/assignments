const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Course,User}=require('../db/index')

// User Routes
router.post('/signup', async (req, res) => {
    try{
        const {username,password}=req.body;
        const user=new User({username,password,purchasedCourses:[]});
        await user.save();
        res.status(200).json({ message: 'User created successfully' })
    }
    catch(e){
        res.status(400).json({message:e.message});
    }
    
});

router.get('/courses',userMiddleware, async(req, res) => {
    try{
        const courses=await Course.find({});
        return res.status(200).json({courses});
    }
    catch(e){
        res.status(400).json({message:e.message});
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    try{
        const username=req.headers.username;
        const password=req.headers.password;
        const id=req.params.courseId
        const user=await User.findOne({username,password});
        const alreadypurchased=user.purchasedCourses.reduce((prev,curId)=>prev||curId==id,false)
        if(alreadypurchased) throw new Error("already purchased course");
        const course=await Course.findOne({_id:id});
        user.purchasedCourses.push(course._id);

        await user.save();
        return res.status(200).json({ message: 'Course purchased successfully' });
    }
    catch(e){
        console.log(e);
        res.status(400).json({message:e.message});
    }
   
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try{
        const username=req.headers.username;
        const password=req.headers.password;
        const user=await User.findOne({username,password});
        const courses=[];
        for(let id of user.purchasedCourses){
            const course=await Course.findOne({_id:id});
            courses.push(course);
        }
        res.status(200).json({purchasedCourses:courses})
    }
    catch(e){

    }
    
});

module.exports=router;