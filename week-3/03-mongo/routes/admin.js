const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newAdmin = new Admin({
        username : username,
        password : password
    })

    newAdmin.save().then(()=>{
        res.status(200).send('Admin created successfully')
    }).catch((err)=>{
        res.status(500).send('internal error')
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    const courseTitle = req.body.title;
    const courseDescription = req.body.description;
    const coursePrice = req.body.price;
    const courseImageLink = req.body.imageLink;

    const newCourse = new Course ({
        title : courseTitle,
        description : courseDescription,
        price : coursePrice,
        imageLink : courseImageLink

    })

    newCourse.save().then(()=>{
        res.status(200).json({
            msg: "Course created successfully",
            courseId: newCourse._id
        })
    }).catch((e)=>{
        res.status(500).send('internal error')
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({});

    res.json({
        courses: response
    })

  
});

module.exports = router;