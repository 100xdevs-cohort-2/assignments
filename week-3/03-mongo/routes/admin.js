const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} =require("../db/index")
// const Admin =require("../db/index")
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const newAdmin= new Admin({
        username:username,
        password:password
    })
    newAdmin.save().then(result=>{
        // console.log(res);
        res.status(200).json({msg:"Admin created successfully "})
    }).catch(Error=>{res.status(404).json({msg:Error})})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const newCourse= new Course({
        id:req.body.id,
            title: req.body.title, 
        description: req.body.description,
         price: req.body.price,
          imageLink: req.body.imageLink ,
          CourseID:req.body.CourseID
    });
    newCourse.save().then(result=>{
        res.status(200).json({msg:"Saved Succesfully"})
    }).catch(err=>{console.log(err)})
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    Course
    .find()
    .then(courses => {
        res.json(courses);
    })
});

module.exports = router;