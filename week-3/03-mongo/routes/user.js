const { Router } = require("express");
const { Course } = require("../db");
const { User } = require("../db");

const router = Router();


// User Routes
router.post('/signup', async (req, res) => {
    const user = req.headers.username
    const pass = req.headers.password
    const data = await User.find({})
    for(let element of data){
        if(element.username == user){
            return res.status(200).json({message:"User name already exists"})
        }
    };
    const obj = new User({username : user , password : pass})
    await obj.save()
    res.status(200).json({message:"User created successfully"})
});

router.get('/courses', async (req, res) => {
    const data = await Course.find({})
    //console.log(data)
    if(data){
        return res.status(200).json(data)
    }
    res.status(200).json({message : "No courses available"})
});

router.post('/courses/:courseId', async (req, res) => {
    const courseid = req.params.courseId
    const user = req.headers.username
    const data = await Course.findOne({id:courseid})
    // console.log(data)
    if(data == null){
       return res.status(404).send("Resource not found")
    }
    await User.updateOne({username:user},{$push:{courses:courseid}})
    res.status(200).json({message:"Course purchased successfully"})
});

router.get('/purchasedCourses', async (req, res) => {
    const user = req.headers.username
    const pass = req.headers.password
    const data = await User.findOne({username : user , password : pass})
    const courses = data.courses
    const result = await Course.find({id : {$in : courses}})
    res.status(200).json(result)
});

module.exports = router