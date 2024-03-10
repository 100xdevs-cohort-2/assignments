const { Router } = require("express");
const {Admin, User} = require('../db/index')
const jwt = require('jsonwebtoken')
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {JWT_SECRET} = require('../config')

// Admin Routes
router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    
    await Admin.create({
        username, 
        password
    })

    res.json({
        msg : "Admin Created"
    })
});

router.post('/signin', async (req, res) => {
    const { username, password} = req.body;
    
    const isValidated = await User.find({
        username : username,
        password: password
    })
    
    if(isValidated){// Implement fetching purchased courses logic
        const token =  jwt.sign({username}, JWT_SECRET);

        res.status(200).json({
            token
        })
    }
    else{
        res.status(411).json({
            msg : 'Incorrect Username and Password'
        })

    }

   
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const {title, description, price, imageLink} = req.body

    try {
        const newCourse = await Course.create( {
            title: title,
            description : description,
            price: price,
            imageLink : imageLink
        })
        console.log(newCourse)

        res.status(200).json({
            message : 'Course created successfully',
            courseId : newCourse._id
        })

    }
    catch(err){
        console.log(err)
        res.status(403).json({"message" : "Course creation failed "})
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({})

    res.json({
        courses : response
    })

    res.status(200).json({

    })
});

module.exports = router;