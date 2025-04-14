const { Router } = require("express");
const zod = require("zod");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const username = req.headers["username"];
    const password = req.headers["password"];
    const userSchema = zod.object({
      username: zod.string(),
      password: zod.string(),
    });
    const user = {
      username,
      password,
    };
    if (!userSchema.safeParse(user).success) {
      res.status(400).json({ error: userSchema.safeParse(user).error });
      return;
    }
    await User.init();
    await User.create(user);
    res.status(201).json({ message: "Succesfully created a user" });
  } catch (err) {
    let error_message = "Oops! Something went wrong";
    if (err.code === 11000) {
      error_message = "Username already exists";
    }
    console.error(err);
    res.status(500).json(error_message);
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching courses" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers["username"];
  try {
    // const course = await Course.find({ _id: courseId });
    // if (!course) {
    //   res
    //     .status(404)
    //     .json({ message: `Course with id ${courseId} is not found` });
    //   return;
    // }
    await User.updateOne(
      { username: username },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
    res.status(201).json("Successfully purchased");
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
//   const 
});

module.exports = router;
