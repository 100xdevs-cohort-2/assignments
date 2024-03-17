const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin }=require("../db")
const { Course }=require("../db")
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
   const username=req.body.username;
   const password=req.body.password;
   await Admin.create({
    username:username,
    password:password
   })
   res.json({
    message:"User created Successfully"
   }) 

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    const newCourse= await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg:"Course created Succesfully",couseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
     const response=await Course.find({});
     res.json({
        couses:response
     })
     

});

module.exports = router;