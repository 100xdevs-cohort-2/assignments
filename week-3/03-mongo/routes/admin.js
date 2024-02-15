const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course }=require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    console.log(req.body)
    // Implement admin signup logic
    const { username, password } = req.body;
try{
    const signUp=await Admin.create({
    username:username,    //identifies the parameters from db
    password:password
    })
    
    if(signUp){
        res.json({
            msg:"user created successfully"
        })
        console.log(res)
    }
    else{
        res.status(403).json({
            msg:"user not exist"
        })
    }
}
catch(err){
    console.log(err)
}
});

router.post('/courses',  adminMiddleware, async (req, res) => {
    // Implement course creation logic
    //declare first 
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
   const  imageLink=req.body.imageLink

   const adminCourse=await Course.create({
title:title,
description:description,
price:price,
imageLink:imageLink
   })
   res.json({
    msg:"course created successfully",
    courseId:adminCourse._id
   })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;