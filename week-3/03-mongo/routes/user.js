const { Router } = require("express");
const {User, Course} = require('../db/index')
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    const {username, password} = req.headers

    const userCreation = await User.create({
        username:username,
        password:password
    })

    res.status(200).json({
        message : 'User created Successfully'
    })


});

router.get('/courses', async (req, res) => {
    const {username, password} = req.headers
    const allCourses = await Course.find({})
    res.json({
        courses : allCourses
    })


});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
   const courseId = req.params.courseId;
   const username = req.headers.username;
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