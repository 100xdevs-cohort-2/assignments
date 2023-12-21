const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course}=require('../db/index')
const router = Router();

// Admin Routes

router.post('/signup', async (req, res) => {
    try{
        const username=req.body.username;
        const password=req.body.password;
        if(!username || !password) throw new Error("no username or password sent in body")
        const admin=new Admin({username,password});
        await admin.save();
        res.status(200).json({ message: 'Admin created successfully' });
    }
    catch (e) {
        res.status(400).json({message:e.message});
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    try{
        const courseContent=req.body;
        if(!courseContent) throw new Error("no course data sent in body");
        const course=new Course(courseContent);
        const savedCourse= await course.save();

        res.status(200).json({id:savedCourse._id,message:'Course created successfully'});
    }
    catch(e){
        res.status(400).json({message:e.message});
    }
    

});

router.get('/courses', adminMiddleware, async (req, res) => {
    try{
        let courses=await Course.find({});
        res.status(200).json(courses);

    }
    catch(e){
        res.status(400).json({message:e.message});
    }
});

module.exports = router;