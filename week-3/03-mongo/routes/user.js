const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db")
const { default: mongoose } = require("mongoose");
// const zod = reqire("zod")
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })
    .then(()=>{
        res.json({
            msg:"User created successfully"
        })
    })
    .catch((err)=>{
        msg: "Some error occured during creating the user"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    // const username = req.headers.username;
    // const password = req.headers.password;

    Course.find({})               // you can't comment in postman body ,you'll get error
    .then((response)=>{
        res.json({ courses: response });
    })
    .catch((error)=>{
        res.json({msg:"some error occured"});
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    
    await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses: courseId              // if you want update data in the array inside the mongodb , you need to use $push
        }
    })

    res.json({
        message : "Purchage Complete !"
    })
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

});

module.exports = router