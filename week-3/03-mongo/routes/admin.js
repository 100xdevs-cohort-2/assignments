const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const { Admin } = require("../db");
const { User } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    try{
    await Admin.create({
        username: req.body.username,
        password: req.body.password,
    })

    res.status(200).json({message: 'Admin created successfully'});
}
catch(e)
{
    res.status(500).json({message:"Error signing up admin"});
}

});
//   // Implement admin signup logic
//   const username = req.body.username;
//   const password = req.body.password;

//   // check if a user with this username already exists
//   await Admin.create({
//       username: username,
//       password: password
//   })

//   res.json({
//       message: 'Admin created successfully'
//   })
  
// });

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    try{
    const newCourse = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    });


    res.status(200),json({message:"Course created successfully" ,
    courseId: newCourse._id   });
}
catch(e)
{
    res.status(500).json({message:"Error creating course!"});
}

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    try{
    const allCourses = await Course.find({})
    res.status(200).json(courses);

    }
    catch(e)
    {
        // If the courses are not found, send the error response.
      res.status(500).json({ message: "Something went wrong!", error });
    }
    
});

module.exports = router;