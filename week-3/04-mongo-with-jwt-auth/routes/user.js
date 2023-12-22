const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {validAuthStructure,getHashedPassword,getToken}=require('../utils/auth')
const {Course,User}=require('../db/index');
const { json } = require("body-parser");

router.post('/signup',async (req, res) => {
    try{
        const {username,password}=req.body;
        if(!validAuthStructure(username,password)) throw new Error("invalid username or password structure");

        const hashedPassword=getHashedPassword(password,"USER");
        const admin=new User({username,hashedPassword,coursesPurchased:[]});
        await admin.save();

        return res.status(200).json({ message: 'USer created successfully' });
    }
    catch(e){
        return res.status(400).json({message:e.message});
    }
    
});


router.post('/signin', (req, res) => {
    try{
        const {username,password}=req.body;
        if(!validAuthStructure(username,password)) throw new Error("invalid username or password structure");
        const hashedPassword=getHashedPassword(password);

        const user=User.findOne({username,hashedPassword});
        if(!user)throw new Error("invalid username or password structure");

        const token=getToken(username,"USER");
        res.status(200).json({token})
    }
    catch(e){
        return res.status(400).json({message:e.message});
    }
});

router.get('/courses',userMiddleware,async (req, res) => {
    try{
        const courses=await Course.find({});
        if(!courses) courses=[];
        res.status(200).json({courses})
    }
    catch(e){
        res.status(400).json({message:e.message});
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try{
        const id=req.params.courseId;

        const course=await Course.findOne({"_id":id});
        if(!course) throw new Error("Course not found");

        const username=req.headers.username;
        const user=await User.findOne({username});

        user.coursesPurchased.push(course._id);
        await User.updateOne({"_id":user._id},user);

        res.status(200).json({ message: 'Course purchased successfully' })

    }catch(e){
        res.status(400).json({message:e.message});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try{
        const username=req.headers.username;
        const user=await User.findOne({username});

        const purchasedCoursesPromises=user.coursesPurchased.map(async (id)=>{
           const course=await Course.findOne({"_id":id});
           return course;
        })
        const purchasedCourses=await Promise.all(purchasedCoursesPromises);
        res.status(200).json(purchasedCourses);
        
    }catch(e){
        res.status(400).json({message:e.message});
    }
});

module.exports = router