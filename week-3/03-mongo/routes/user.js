const { Router } = require("express");
const router = Router();
const {mongoose}=require("mongoose")
const userMiddleware = require("../middleware/user");
const {User,Course}= require("../db")

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;
    
    const existingUser= await User.findOne({username:username})
    if(existingUser){
        return res.status(400).json({message:"Username already Exists"})
    }

    await User.create({
        username:username,
        password:password
    })
    req.json({
        message:"User created Successfully"
    })

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({});

    res.json({
        course:response
    })

});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.headers.username;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({
        message:"Purchased complete !"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.find({
        username:req.headers.username        
    });

    console.log(uesr.purchasedCourses);
    const courses= await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });

    res.json({
        courses:courses
    })

});


module.exports = router