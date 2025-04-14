const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const JWT_SECRET = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    });

    res.json({
        msg : "User created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password
    })

    if(user){
        
        const token = jwt.sign({
            username
        }, JWT_SECRET);
    
        res.json({
            token : token
        })
    }
    else{
        res.status(403).json({
            msg : "Invalid email or password"
        })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const course = await Course.find({});
    res.json({
        courses : course
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username
    },{
        "$push" : {
            purchaseId : courseId
        }
    });

    res.json({
        msg : "Purchase successful"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({
        username
    })
    // console.log(user)

    const course = await Course.find({
        _id : {
            "$in" : user.purchaseId
        }
    });

    res.json({
        courses : course
    });
});

module.exports = router