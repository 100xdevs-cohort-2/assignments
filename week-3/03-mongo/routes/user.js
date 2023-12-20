const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course, Purchased} =require("../db/index")
// User Routes
router.post('/signup', (req, res) => {
    const username=req.body.username;
    const password= req.body.password;
    const newUser= new User(
        {username:username,
        password:password
        }
    );

    newUser.save().then(result=>{res.status(200).json({msg:"user saved"})}).catch(err=>{res.status(400).json({msg:err})})
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(result=>{
        res.status(200).json({
            result
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseid=req.params.courseId;
    Course.find({CourseID:courseid}).then(result=>{
        const newcourse =new Purchased({
            title: result[0].title,
            description: result[0].description,
            price: result[0].price,
            imageLink:result[0].imageLink,
            CourseID:courseid
        })
        // console.log(result[0].title)
        newcourse.save().then(result=>{res.status(200).json({msg:"course purchased"})})
    
    })
    .catch(error =>{
        res.status(400).send("course not found")
    })
    
   
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    Purchased.find().then(result => {
        res.status(200).json({MyCourses:result})
    }).catch(error =>{
        res.status(200).json({error:error})
    })
});

module.exports =router;
