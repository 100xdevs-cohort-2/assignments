const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const ausername = req.body.username;
    const apassword = req.body.password;

    await Admin.create({
        username: ausername,
        password: apassword
    })
    
    res.json({message: "admin created sucessfully!!"});

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description=req.body.description;
    const price= req.body.price;
    const imageLink=req.body.imageLink;

    const newcourse=await Course.create({
        title:title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    res.json({
        message :"course created sucessfully!!!!",
        courseID: newcourse._id
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response= await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;