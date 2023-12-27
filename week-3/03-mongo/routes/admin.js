const { Router } = require("express");
const {Admin, User, Course} = require("../db/index")
const adminMiddleware = require("../middleware/admin");
const router = Router();


router.post('/signup', (req, res) => {
    const newAdmin= new Admin({
        username:req.body.username,
        password:req.body.password
    })
    newAdmin.save()
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.error(error);
    });
    res.json({message: 'Admin created successfully'});
});


router.post('/courses', adminMiddleware, (req, res) => {
    Course.findOne({ title: req.body.title })
      .then(async(course) => {
        if (course) {
          return res.json({ message: "Course already added" });
        }
        let courseId = await Course.countDocuments()
        
        const newCourse = new Course({
          id: ++courseId,
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          imageLink: req.body.imageLink,
          published: true,
        });
  
        newCourse.save()
          .then((result) => {
            console.log(result);
            res.json({
              message: 'Course created successfully',
              courseId: courseId,
            });
          });
      });
  });
  
  
router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({})
    .then(results=>{
        res.json({courses: results});
    })
    .catch(error=>{
        res.status(500).json({error: 'Internal Server Error' });
    })
});

module.exports = router;