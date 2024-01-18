const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=  require('../db/index')

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username= req.body.username;
    const password= req.body.password;

    User.create({
        username,
        password
    })
    .then((user)=>{
        res.json({
            message:"user created succesfully"
        })
    })
    .catch((err)=>{
        res.json({
            message:"user not created"
        })
    
    })

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic

    Course.find({})
    .then((response)=>{
        res.json({
            courses:response
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

    const courseid= req.params.courseId;
    const username= req.headers.username;
    
    User.findOneAndUpdate({
        username
    },{

        $push:{
            purchasedCourses: courseid
        }
    })
  
    .catch((err)=>{
        
        console.log(err);
        res.json({
            message:"course not purchased"
        })
    })
    
    .then((response)=>{
        res.json({
        message:"course purchased succesfully"
    })
})
    
   
   
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic

    User.findOne({
        username:req.headers.username
    })
   .then((user)=>{
    console.log(user.purchasedCourses);
     Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
        })
        .then((courses)=>{
            res.json({
                courses:courses
            })
     })
   })

    


});

module.exports = router