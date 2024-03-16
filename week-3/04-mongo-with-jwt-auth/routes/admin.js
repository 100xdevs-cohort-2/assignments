const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../solution/db");
const router = Router();
const jwt = require("jsonwebtoken");
const jwt_secret = "adminmiddleware";


// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    //when admin hits this route, a new admin account will be created using the username and password.
    const username = req.body.username;
    const password = req.body.password;

    const newAdmin = await Admin.create({
        username,
        password
    })
    //check if admin is already exist with same credentials
    if (!newAdmin) {
        return res.status(500).json({
            msg: "Error signing up Admin!",
        })
    } else {
        //if it does not exists, Save it in the database and send the succes message reponse.
        res.status(200).json({
            msg: "Admin created Successfully!",
        })
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    //Once the Admin hits the route, The admin account will be verified for login.
    //check if the Admin has account or not with the credentials
    const adminExists = await Admin.findOne({
        username: req.headers.username,
        password: req.headers.passwords,
    });
    if (!adminExists) {
        //if the admin doesnot have the account, throw an error.
        return res.status(500).json({
            msg: "Admin doesnot Exists!",
        });
    } else {
        //if the admin has the account,generate a Jwt for the given username and password.
        const token = jwt.sign({username,password},jwt_secret);
        return res.status(200).json({
            token: token,
        })
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic

    //Once admin hits this route, he can create new course by providing the title,description,price,imagelink
    const course = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imagelink: req.body.imagelink,
    })
    // res.json({
    //     message: "Course created Succesfully!", courseId: course._id,
    // })

    // if there is any error occur in creating the course
    if (!course) {
        return res.status(400).json({
            msg: "Course creation Unsuccesfull!"
        })
    } else {
        return res.status(200).json({
            msg: "Course Created Succesfully!",
            courseId: course._id
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({})
    res.status(200).json({
        allCourses: allCourses,
    })
});

module.exports = router;