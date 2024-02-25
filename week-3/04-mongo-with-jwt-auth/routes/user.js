const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {User, Course} = require("../db");

const jwt= require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
     const password = req.body.password;
 
    const resp= await User.create({
         username,
         password
     })
        if(resp){

            res.json({
                message:"User created successfully"
            })
        }else{
            res.json({
                message:"User not created"
            })
        }
 
 });
 
 router.get('/courses',async (req, res) => {
     // Implement listing all courses logic
 const response  = await Course.find({});
     res.json({
         courses: response
     })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
     //user details
     const username= req.body.username;
    const password= req.body.password;
 
          const resp = await User.findOne({
            username,
            password
          })

          if(resp){
              const jwtToken= jwt.sign({
                  username
                },JWT_SECRET);
                
                res.json({
                    jwtToken
                });
            } else{
                res.status(411).json({
                   messasge:" Incorrect emai or password"
                })
            } 
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
        const allcourses = await Course.find({})
        res.json({
            Courses: allcourses
        })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username: username 
    }, {
        "$push":{
            purchasedCourses: courseId
        }
    })
    res.json({
        message:" purchase complete "
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    });

    res.json({
        Course: courses
    })
});

module.exports = router