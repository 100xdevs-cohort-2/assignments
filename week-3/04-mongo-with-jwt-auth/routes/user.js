const { Router } = require("express");
const router = Router();
const {User, Course} = require('../db/index')
const jwt = require('jsonwebtoken')
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require('../config')


// User Routes
router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    
    await Admin.create({
        username, 
        password
    })

    res.json({
        msg : "Admin Created"
    })
});

router.post('/signin', async (req, res) => {
    const { username, password} = req.body;
    
    const isValidated = await User.find({
        username : username,
        password: password
    })
    
    if(isValidated){
        const token =  jwt.sign({username}, JWT_SECRET);

        res.status(200).json({
            token
        })
    }
    else{
        res.status(411).json({
            msg : 'Incorrect Username and Password'
        })

    }
});

router.get('/courses', async(req, res) => {
    const allCourses = await Course.find({})
    res.json({
        courses : allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
   const username = req.username;
   await User.updateOne({
    username:username
   },{
    "$push" :{
        purchasedCourses : courseId
    }
   })

   res.json({
    message : "Purchase complete!"
   })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username : req.headers.username
    })
    const courses = await Course.find({_id : {
        "$in" : user.purchasedCourses
    }})
    
    res.status(200).json({
        courses : courses
    })
});

module.exports = router