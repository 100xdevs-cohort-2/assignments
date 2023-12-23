const { Router } = require("express");
const jwt = require('jsonwebtoken');
const {Admin, User, Course} = require("../db/index")
const router = Router();
const userMiddleware = require("../middleware/user");

const jwtPassword = 'secret';


router.post('/signup', async(req, res) => {
    User.findOne({
        username:req.body.username,
        password:req.body.password
    })
    .then(async (user)=>{
        if(user){
            return res.json({message: "User already exists" })
        }
        const newUser= new User({
            username:req.body.username,
            password:req.body.password
        });
        await newUser.save();
        res.json({ message: 'User created successfully' });
    })
    
});

router.post('/signin', (req, res) => {
    const token=jwt.sign({
        username: req.body.username
    },jwtPassword);
    res.json({token: token});
});

router.get('/courses', userMiddleware, (req, res) => {
    Course.find({})
    .then(results=>{
        res.json({courses: results});
    })
    .catch(error=>{
        res.status(500).json({error: 'Internal Server Error' });
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const course = await Course.findOne({
        id: req.params.courseId
    });
    User.findOneAndUpdate(
        { username: req.headers['username'], password:  req.headers['password'] },
        { $push: { courses: course } },
        { new: true } // Return the modified document
      )
    .then(updatedUser => {
        if (updatedUser) {
            res.json({ message: 'Course added successfully' });
        } 
        else {
            res.status(404).json({ error: 'User not found' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user= await User.findOne({
        username: req.headers['username'],
        password: req.headers['password']
    });
    res.json({purchasedCourses: user.courses});
});

module.exports = router;