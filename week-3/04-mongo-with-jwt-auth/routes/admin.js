const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin}=require("../db");
const {Course}=require("../db");  
const router = Router();
const jwt = require("jsonwebtoken"); 
const {jwtPassWord}=require("../config"); 
const zod = require("zod"); 
const passwordSchema = zod.string().min(6); 
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username; 
    const password = req.body.password; 
    const success = passwordSchema.safeParse(password).success; 
    if(!success)
    return res.status(403).json({msg : 
    "Password should be at least of 6 characters"}); 
    if(await Admin.findOne({username}))
    {
        return res.status(403).json({msg : "Username already exists"}); 
    }

    const admin = new Admin({username, password}); 
    admin.save(); 
    res.status(200).json({msg : "Admin created successfully"}); 
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username; 
    const password = req.body.password; 
    if(await Admin.findOne({username,password}))
    {
    const token = jwt.sign({username},jwtPassWord);
    res.status(200).json({token});  
    }
    res.status(404).json({msg : "Incorrect username or password"}); 
});

router.post('/courses', adminMiddleware,async(req, res) => {
    // Implement course creation logic
    const title = req.body.title; 
    const description = req.body.description; 
    const price = req.body.price; 
    const imageLink = req.body.imageLink;
    
    const newCourse = await Course.create({title,
        description,
        price,
        imageLink}); 
    
    res.status(200).json({msg : "Course created successfully",
     courseId : newCourse._id}); 
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    res.status(200).json({courses : await Course.find({})}); 
});

module.exports = router;


