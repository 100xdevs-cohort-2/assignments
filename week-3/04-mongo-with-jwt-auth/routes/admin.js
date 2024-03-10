const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
  const username = req.body.username
  const password = req.body.password

  await Admin.create({
    username,
    password
  })

  res.json({
    message: 'Admin Created Successfully'
  })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
  const username = req.body.username
  const password = req.body.password

  const user = await User.findOne({
    username,
    password
  })
  
  if (user) {
    const token = jwt.sign({
      username
    }, JWT_SECRET)

    res.json({
      token
    })
  } else {
    res.status(411).json({
      message: "Incorrect email"
    })
  }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
  const title = req.body.title
  const description = req.body.description
  const imageLink = req.body.imageLink
  const price = req.body.price

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price
  })

  res.json({
    message: "Course created Successfully",
    courseID: newCourse._id
  })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
