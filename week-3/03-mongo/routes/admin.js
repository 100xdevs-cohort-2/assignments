const { Router } = require("express");
const router = Router();
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
// Admin Routes


router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    try {
        const exists = await Admin.findOne({username:username});
        if(exists){
            res.status(403).json({
                message:"Username already exists"
            })
            return;
        }
        const new_admin =  new Admin({
            username:username,
            password:password
        })
        await new_admin.save();
        res.status(200).json({
            message:'Admin created successfully',
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        });
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const new_course = new Course({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
    })
    await new_course.save()
    res.status(200).json(
        {
            message: 'Course created successfully', 
            courseId: new_course._id,
        }
    )
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({
            courses:courses,
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        });
    }
});

module.exports = router;