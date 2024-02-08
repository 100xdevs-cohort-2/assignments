const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt= require('jsonwebtoken');
const jwtPassword="1234";
const {Admin,Course}= require("../db/index");


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    try{
        const username=req.body.username;
        const password=req.body.password;
    
        const admin1=new Admin({username,password});
        admin1.save();
        res.status(200).json({message:"Admin succesfully created"});
    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
    

});

router.post('/signin',async (req, res) => {
router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    try{
        const user=await Admin.findOne({username,password});
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

router.post('/courses', adminMiddleware, async (req, res) => {
router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    
    const username=req.username;
    const course=req.body;
    try{
        const course1=new Course(course);

        course1.save();
        const admin=await Admin.findOne({username});

        admin.Courses_avl.push(course1);
        admin.save();
        res.status(200).json({message:"Course created successfully",courseId: course1._id});
    
    }
    catch(err){
        res.status(500).json({message:"Internal server error"});
    }
    

});

router.get('/courses', adminMiddleware, async (req, res) => {
router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    try{
        const courses=await Course.find();
        if(courses){
            res.status(200).send(courses);
        }
        else{
            res.status(404).json({message:"No courses available"});
        }
    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
    }


});

module.exports = router;