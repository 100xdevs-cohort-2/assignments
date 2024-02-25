const { Router } = require("express");
const {Admin, User, Course} = require("../db")
const adminMiddleware = require("../middleware/admin");

const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async(req, res) => {
    
    // Implement admin signup logic
          //get the username
          const username= req.body.username;
          const password= req.body.password;
          
      
          //Check if user with this username already exists
          await Admin.create({
              username: username,
              password: password 
          })
         
              res.json({
                  message:" Admin created successfully"
              })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;
 
          const user = await Admin.findOne({
            username,
            password
          })

          if(user){
              const jwtToken= jwt.sign({
                  username
                },JWT_SECRET);
                
                res.json({
                    jwtToken
                });
            } else{
                res.status(411).json({
                   messasge:" Incorrect emai and padddef"
                })
            }
});

router.post('/courses',adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    const newCourse =   await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);
    res.json({
        msg:"'Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;