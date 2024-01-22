const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken")
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require("../config") 
const { User,Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    await User.create({
        username,
        password
    })
    //console.log("secret key: ",JWT_SECRET)
    res.json({ message: 'User created successfully' })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic

    const username = req.body.username
    const password = req.body.password
    
    console.log(username,password)
    const user = await User.find({
        username,
        password
    })
    console.log(user)
    if(!user.length){
        
        res.status(411).json({msg:"Incorrect password or username or User not present"})
    }
    else{
         const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({token:token})
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
     const courses = await Course.find();
    if(!courses){
        res.send("No courses found")
    }
    res.json({Courses: courses})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const username = req.username
    const courseId = req.params.courseId
    const userdata= await User.updateOne({
        username:username
    },
        {
            "$push": {
                purchasedCourses:courseId
            }
        
            //"$push": { 
           // purchasedCourses:[new mongoose.Types.ObjectId(courseId)]} 
    })
    res.json({
        message: "Purchase complete!"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    
    const user = await User.findOne({
        username: req.username
    })
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
   
    res.json({courses:courses})
});

module.exports = router