const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");
const {User, Course} = require("../db")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username :  req.body.username,
        password : req.body.password
        })    
        res.json({
            message: 'User created successfully'
        })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const list = await Course.find()
    return res.status(200).json(list)
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    console.log("me")
    const id =  req.params.courseId
    try{
        const course =  await Course.findById(id);
        if(course){
            const user = req.headers['username']
            const foundUser = await User.findOne({ username: user });
            foundUser.purchasedCourse.push(course)
            await foundUser.save()
         res.status(200).json({message:'Course purchased successfully '})
     }else {
        res.status(401).json({message: 'course not found '})
     }
    }catch(err){
        res.status(500).json({err : 'internal error'})
    }
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
     try{
        const user = req.headers["username"];

        const foundUser = await User.findOne({username: user});

        if(foundUser && foundUser.purchasedCourse){
            res.status(200).json(foundUser.purchasedCourse)
        }else{
            res.status(200).json({ message: "No courses found"})
        }
     }catch(err){
        res.status(500).json({error : "internal server error"})
     }



});

module.exports = router