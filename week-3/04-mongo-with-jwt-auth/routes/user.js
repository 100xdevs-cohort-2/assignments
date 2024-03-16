const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
       await User.create({
        username,
        password
    })
    res.status(200).json({
        msg:"user created successfully"
    })
}
catch(e){
    res.status(500).json({
        msg:"something up with the server"
    })

}

    
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const isUserPresent =  await User.findOne({
        username,
        password
    })

    if(isUserPresent){
       const token =  jwt.sign({
            username
        },JWT_SECRET);

        res.json({
            token

        })
        

    }else{
        res.status(403).json({
            msg:'inavlid credentials'
        })
    }


   
});

router.get('/courses', async(req, res) => {
   const courses = await Course.find({});

   res.json({
    courses
   })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    

  await  User.updateOne({
        username
    },{
        $push:{
            purchasedCourses: courseId
        }})

    res.json({
        msg: "Course purchased successfully"
    })
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {

    const user = await User.findOne({
        username:req.username
    })
   

  const allCourses =  await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses:allCourses
    })
});

module.exports = router