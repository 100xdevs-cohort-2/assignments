const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
  const { username, password } = req.body
  const newUser = new User({ username, password });
  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'User created successfully' });
    })
});

router.get('/courses', (req, res) => {
  Course.find()
    .then((data) => {
      res.status(200).json(data);
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
  const courseId = req.params.courseId
  const username = req.headers['username']

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router