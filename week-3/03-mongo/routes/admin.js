const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db')

router.use(Router.json())

const zod = require("zod");

const user_schema = zod.string();
const pass_sceham = zod.string();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const userExist = await Admin.findOne({
        username: username
    })

    if(!userExist){
        const response = await Admin.create({
            username: username,
            password: password
        });
        res.status(200).json({ msg: "Admin created successfully" });
    }
    res.status(200).json({msg:"Admin already exists"});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const course_title = req.body.title;
    const course_description = req.body.description;
    const course_price = req.body.price;
    const course_imageLink = req.body.imageLink;

    const response = await Course.create({
        title: course_title,
        description: course_description,
        price: course_price,
        imageLink: course_imageLink
    })

    res.status(200).json({
        msg: "Course created successfully",
        courseId: response._id
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});

    res.status(200).json(response);

});

module.exports = router;