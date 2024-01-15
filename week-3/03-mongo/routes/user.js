const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    const isexist = await User.findOne({
        username,
    })

    if (isexist) {
        res.status(403).json({
            message: 'Username already exists'
        })
    }
    else {
        User.create({
            username,
            password
        })
        res.status(200).json({
            message: 'User created successfully'
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allcourse = await Course.find({})
    res.status(200).json({
        courses: allcourse
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const cid=req.params.courseId
    const username=req.headers.username
    // const value=await Course.findOne({
    //     _id:cid
    // })
    // if(value){


        await User.updateOne({
            username:username
        },{
            "$push":{
                purchasedcourses:cid
            }
        })
        res.status(200).json({
            message: 'Course purchased successfully'
        })


    // }
    // else{
    //     res.status(200).json({
    //         message: 'No courses available with the ID provided'
    //     })
    // }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // // Implement fetching purchased courses logic
    const username=req.headers.username
    const purchased=await User.findOne({
        username:username
    })

    const courses=await Course.find({
            _id:{
                "$in":purchased.purchasedcourses
                }
            }
    )
    
    res.status(200).json({
        courses:courses
    })

});

module.exports = router