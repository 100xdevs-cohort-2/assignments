const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course}=require('../db/index')
const {validAuthStructure,getHashedPassword,getToken} = require('../utils/auth')
const {validCourseStructure}=require('../utils/course')
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    try{
        const {username,password}=req.body;
        if(!validAuthStructure(username,password)) throw new Error("invalid username or password structure");

        const hashedPassword=getHashedPassword(password);
        const admin=new Admin({username,hashedPassword});
        await admin.save();

        return res.status(200).json({ message: 'Admin created successfully' });
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

        const admin=Admin.findOne({username,hashedPassword});
        if(!admin)throw new Error("invalid username or password structure");

        const token=getToken(username,"ADMIN");
        res.status(200).json({token})
    }
    catch(e){
        return res.status(400).json({message:e.message});
    }
});

router.post('/course', adminMiddleware, async (req, res) => {
    try{
        const data=req.body;
        data.published=true;
        data.price=parseInt(data.price)
        if(!validCourseStructure(data)) throw new Error("invalid course structure")
        const course=new Course(data);
        const savedCourse=await course.save();
        if(!savedCourse) throw new Error('cannot save course to db')
        res.status(200).json({ message: 'Course created successfully',id:savedCourse._id})
    }catch(e){
        res.status(400).json({message:e.message});
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try{
        const courses=await Course.find({});
        if(!courses) courses=[];
        res.status(200).json({courses})
    }
    catch(e){
        res.status(400).json({message:e.message});
    }
});

module.exports = router;