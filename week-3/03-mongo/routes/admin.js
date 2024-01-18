const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course}= require('../db/index')

// Admin Routes
router.post('/signup',  async (req, res) => {
    // Implement admin signup logic

    const username= req.body.username;
    const password= req.body.password;
    

    await Admin.create({
        username,
        password
    })

    res.json({
        message:'Admin created succesfully'
    })


});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic

   const title= req.body.title;
   const description= req.body.description;
   const price= req.body.price;
   const image= req.body.image;

    Course.create({
       title,
       description,
       price,
       image
    })
    .then((course)=>{
        res.json({
            message:"course created succesfully",
            courseId: course._id
        })
    })
    .catch ((err)=>{
        res.json({
            message:"course not created"
        })
    })



});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then((courses)=>{
        res.json({
            courses:courses
        })
    })
});

module.exports = router;