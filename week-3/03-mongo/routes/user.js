const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
// - POST /users/signup
//   Description: Creates a new user account.
//   Input: { username: 'user', password: 'pass' }
//   Output: { message: 'User created successfully' }
router.post('/signup', async(req, res) => {
    // Implement user signup logic

    try{
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
    });
    res.status(200).json({
        message: "User created successfully",
    });
}
catch(e)
{
    res.status(500).json({message:"user already exists"});
}



});

// GET /users/courses
//   Description: Lists all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }


router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    
    try{
        let courses = await Course.find({});
        res.status(200).json(courses);
    }
    catch(e)
    {
        res.status(500).json({message: "Something went wrong!"});
    }
    
});

// POST /users/courses/:courseId
//   Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { message: 'Course purchased successfully' }

router.post('/courses/:courseId',userMiddleware, async (req, res) => {
    // Implement course purchase logic
    // This route returns the current course purchased by the user.

  // Get the username from the headers and then update the purchased course array of that user in DB.
  const user = await User.updateOne(
    {
      username: req.headers.username,
    },
    {
      // Afterthe user purchases the course, grab the course by its ID and add it to the user's purchased courses.
      $push: {
        purchasedCourses: req.params.courseId,
      },
    }
  );
  res.status(200).json({
    message: "Course purchased successfully!",
  });
});
    


router.get("/purchasedCourses",userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
  
    // This route returns all the courses purchased by the user.
  
    // Find the user through the headers in the DB.
    const user = await User.findOne({
      username: req.headers.username,
    });
    // Find the courses by ID that are present in the user's purchased courses array.
    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });
    // Check if the user has purchased any course.
    if (!courses) {
      // If not purchased, send the error response.
      res.status(500).json({
        message: "No courses found!",
      });
    } else {
      // If purchased, send the success response.
      res.status(200).json({
        courses: courses,
      });
    }
});

module.exports = router;