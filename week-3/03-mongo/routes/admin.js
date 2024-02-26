const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const curUserName=req.body.username;
    const curPassword=req.body.password;
    Admin.create({
        username: curUserName,
        password: curPassword
    }).then(()=>{
        res.json({
            msg:"Admin account created succesfully"
        })
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const curTitle=req.body.title;
    const curDescription=req.body.description;
    const curPrice=req.body.price;
    const curPicture=req.body.image_link;
    const obj=await Course.create({
        title: curTitle,
        description: curDescription,
        price: curPrice,
        image_link: curPicture
    });
    res.json({
        message: 'Course created successfully', courseId: obj._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const obj=await Course.find({
    })
    const updatedCourses = obj.map(course => {
        return {
            _id: course._id,
            title: course.title,
            description: course.description,
            price: course.price,
            image_link: course.image_link,
            published: true
        };
    });
    res.json({

        courses: updatedCourses,
    })
});

module.exports = router;