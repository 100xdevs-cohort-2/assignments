const { Router } = require('express');
const router = Router();

const { User, Course } = require('../db');
const userMiddleware = require('../middleware/user');
const { default: mongoose } = require('mongoose');


// user routes

router.post('/signup' , (req, res) => {
    // Implement listing all courses logic

    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })

    res.json({
        message: "User Created Successfully"
    })

});


router.get('/courses', async (req, res)=> {
    // Implement listing all courses logic
    // Implement fetching all courses logic

    const response = await Course.find({});

    res.json({
        courses: response
    })
})


router.post('courses/:courseId', userMiddleware, async (req,res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({
        message: "Purchase complete!"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req,res) =>{
    // Implement fetching purchased course logic

    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
   

});

module.exports = router