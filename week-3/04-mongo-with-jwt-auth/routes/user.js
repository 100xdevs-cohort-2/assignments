const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken"); 
const {jwtPassWord} = require("../config"); 
const zod = require("zod"); 
const {Course} = require("../db"); 
const passSchema = zod.string().min(6); 
const {User} = require("../db"); 
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
     const username = req.body.username; 
     const password = req.body.password; 
        const success = passSchema.safeParse(password).success;
        if(!success)
        return res.status(403).json({msg : 
        "Password must be at least 6 characters long"}); 
        if(await User.findOne({username}))
        return res.status(403).json({msg : 
        "User already exists"});  
        const userDoc = await User.create({username,password});
        return res.status(200).json({msg : "User created"});
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;  
    const password = req.body.password;  
    const usernameSchema= zod.string().min(2); 
    const passwordSchema= zod.string().min(6); 
    
    const userSuccess = usernameSchema.safeParse(username).success;
    const passwordSuccess = passwordSchema.safeParse(password).success; 

    if(!userSuccess || !passwordSuccess)
    {
        return res.status(403).json({msg : "Invalid input"}); 
    }
    if(!await User.findOne({username,password}))
    {
        return res.status(403).json({msg : " User does not exist "}); 
    }
    const token = jwt.sign({username},jwtPassWord); 
    
    return res.status(200).json({token}); 
    
});

router.get('/courses', userMiddleware,async(req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find(); 
    return res.status(200).json({courses : allCourses});  

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    try 
    {
        const courseToBePurchased = await Course.findById(courseId); 
        const token = req.headers.authorization; 
        const username = jwt.decode(token).username; 
        const user =await User.findOne({username}); 
        if(user.purchasedCourses.some((item)=>(item._id.toString()===courseId)))
        {
            return res.status(403).json({msg : " Course already purchased "}); 
        }
        user.purchasedCourses.push(courseToBePurchased); 
        user.save(); 
        return res.status(200).json({msg : "Course purchased"}); 
    }
    catch(err)
    {
        return res.status(404).json({msg : "Course does not exist"}); 
    }

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic

    const token = req.headers.authorization; 
    const username = jwt.decode(token).username; 
    const user =await User.findOne({username}); 
    if(!user.purchasedCourses.length)
    {
        return res.status(403).json({msg : "No course purchased"});

    }
    const purchasedCourses = user.purchasedCourses; 
    return res.status(200).json({purchasedCourses}); 
});

module.exports = router