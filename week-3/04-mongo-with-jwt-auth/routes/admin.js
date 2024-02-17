const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const {Admin, Course} = require("../db/index")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    let adminExists = await Admin.findOne({username: username});

    if(adminExists)
    {
        return res.status(400).json({msg: "Admin already exists"});
    }

    const newAdmin = new Admin({
        username: username,
        password: password
    })

    newAdmin.save();
    res.json({msg: 'Admin Created Successfully'});
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;

    let adminExists = await Admin.findOne({username: username});

    if(!adminExists)
    {
        return res.status(401).json({msg: "Admin doesn't exist."});
    }

    if(adminExists.password !== password)
    {
        return res.status(401).json({msg: "Invalid Credentials."});
    }


    const token = jwt.sign({username: username}, "secret");

    res.json({token: token});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const courseObj = req.body;

    // Find the course with max ID
    const lastCourse = await Course.find().sort({id: -1}).select('-__v -__id').limit(1);
    let CourseId;
    if(lastCourse)
    {
        CourseId = lastCourse[0].id;
    }
    else
    {
        CourseId = 0;
    }

    const course = new Course({
        ...courseObj,
        id: ++CourseId,
        published: true
    })

    course.save();

    res.json({message: 'Course created successfully', courseId: CourseId});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find().select('-__v -_id');
    res.json({courses: courses});
});

module.exports = router;