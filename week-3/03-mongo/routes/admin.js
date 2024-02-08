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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    Course.create({
        title,
        description,
        imageLink,
        price
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;