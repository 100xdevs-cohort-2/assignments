const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const zod = require("zod");
const bodyparser = require("body-parser");
const express = require("express");
const { User, Course } = require("../db");

router.use(express.json());
router.use(bodyparser.json());

const usernameSchema = zod.string();
const passwordSchema = zod.string();

const courseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number().int(),
  imageLink: zod.string(),
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const isValidUsername = usernameSchema.safeParse(username);
  const isValidPassword = passwordSchema.safeParse(password);
  const existingUser = await User.findOne({
    username: username,
  });
  console.log(existingUser);
  if (existingUser) {
    return res.status(400).send("User already exists");
  }
  if (isValidPassword && isValidUsername && !existingUser) {
    const user = new User({
      username: username,
      password: password,
    });
    user.save();
    res.status(200).send({ message: "User created successfully" });
  } else {
    res.status(422).send({ message: "Unprocessable entity" });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({}).lean();
  console.log(courses);
  res.status(200).json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    const password = req.headers.password;

    const isExistingUser = await User.findOne({
      username: username,
      password: password,
    }).exec();
    console.log(isExistingUser);
    const isExistingCourse = await Course.findOne({ _id: courseId }).exec();

    if (!isExistingCourse) {
      return res.status(404).send({ message: "Course Not Found" });
    }

    // Check if the course is already in the purchasedCourses array
    // const courseAlreadyPurchased =
    //   isExistingUser?.purchasedCourses?.some((course) =>
    //     course._id.equals(isExistingCourse._id)
    //   ) || null;

    // if (courseAlreadyPurchased) {
    //   return res.status(400).send({ message: "Course already purchased" });
    // }
    await User.updateOne(
      { username: username },
      { $push: { purchasedCourses: courseId } },
      { new: true }
    );
    return res.status(200).send({ message: "Course purchased successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  try {
    const userDetails = await User.findOne({ username: req.headers.username });
    console.log(userDetails);
    if (userDetails) {
      let purchasedCoursesDetails = { purchasedCourses: [] };

      await Promise.all(
        userDetails.purchasedCourses.map(async (courseId) => {
          const courseDetails = await Course.findOne({ _id: courseId });
          purchasedCoursesDetails.purchasedCourses.push(courseDetails);
        })
      );
      return res.status(200).send(purchasedCoursesDetails);
    } else {
      return res.status(404).send({ message: "User Not Found" });
    }
  } catch {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
