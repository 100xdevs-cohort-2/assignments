const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')
const bcrypt = require('bcrypt')

// User Routes
router.post('/signup', async (req, res) => {
  const { username, password } = req.body
  const existingUser = await User.findOne({ username }).exec()
  console.log(existingUser)
  if (existingUser) return res.status(409).json({ message: 'User already exist' })
  try {
    const hashedPwd = await bcrypt.hash(password, 10)
    const userCreated = await User.create({
      username,
      password: hashedPwd
    })

    console.log(userCreated)
    res.status(200).json({ message: 'User created successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find()
    res.status(200).json({ courses: courses })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  try {
    const courseId = req.params.courseId
    const { username } = req.headers
    const courseExists = await Course.findOne({ _id: courseId }).exec()
    if (!courseExists) return res.status(404).json({ message: "course does not exists" })
    const purchasedCourse = await User.findOneAndUpdate(
      { username },
      { $push: { purchasedCourses: courseExists._id } },
      { new: true, upsert: true }
    )
    res.status(200).json({
      message: 'Course purchased successfully',
      courseId: courseExists._id
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  const user = await User.findOne({ username: req.headers.username }).exec()
  const coursesPurchasedByUser = await Promise.all(
    user.purchasedCourses.map(async (courseId) => {
      const course = await Course.findOne({ _id: courseId }).exec();
      return course;
    })
  );
  res.status(200).json({ coursesPurchasedByUser })
});

module.exports = router