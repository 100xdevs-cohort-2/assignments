const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  const newUser = new User({ username, password });

  await newUser.save();

  res.status(201).json({ msg: "user created successfully" });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((courses) => {
    res.send(courses).status(201);
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const id = req.params.courseId;

  const { username, password } = req.body;

  Course.findOne({ id: id }).then(async (course) => {
    //storing the purchased course in the user database

    const updatedUser = await User.findOneAndUpdate(
      { username: username, password: password },
      {
        purchasedCourses: {
          id: id,
          title: course.title,
          description: course.description,
          price: course.price,
          image: course.image,
        },
      },
      {
        new: true,
      }
    );

    res.send(updatedUser).status(201);
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const { username, password } = req.body;
  const user = await User.findOne({ username: username, password: password });
  res.send(user.purchasedCourses);
});

module.exports = router;
