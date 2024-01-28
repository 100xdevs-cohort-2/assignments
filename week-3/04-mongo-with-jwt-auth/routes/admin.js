const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");

const {signJwt } = require("../jwt");
const { Admin, Course } = require("../db");
const performChecks = require("../middleware/validator");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    console.log("admin/signup");

    let username= req.body.username;
    let password= req.body.password;

    await Admin.create(
        {
            username: username,
            password: password,
        }
    );

    res.json({ message: 'Admin created successfully' });

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    console.log("admin/signin");

    let username= req.body.username;
    let password= req.body.password;

    let user = await Admin.findOne({username: username, password:password});

    if(!user){
        res.status(404).json({message:"Wrong credentials"});
        return;
    }
    let token = signJwt(username, password);
    res.json({ token: token });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    console.log("admin/courses - create course");

    let data = await Course.create(
        {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.imageLink,
        }
    );

    res.json({ message: 'Course created successfully', courseId: data._id });

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    console.log("admin/courses - view all courses");

    let data = await Course.find();
    res.json({courses:data})
});

module.exports = router;