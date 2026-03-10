const {Router} = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db/index");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const z = require("zod");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const {username, password} = req.body;
  const admin = await Admin.findOne({
    username,
    password,
  });
  if (admin) {
    return res.status(400).json({
      msg: "Admin already exists",
    });
  }
  await Admin.create({
    username,
    password,
  });
  return res.json({
    msg: "Admin created successfully!",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const {username, password} = req.body;
  const admin = await Admin.find({
    username,
    password,
  });
  if (!admin) {
    return res.status(404).json({
      msg: "User doesn't exist",
    });
  }
  const token = jwt.sign(
    {
      username,
    },
    JWT_SECRET
  );
  return res.json(token);
});

// zod
const validateSchema = z.object({
  title: z.string(),
  description: z.string().max(50),
  price: z.number().min(99).max(99999),
  imageLink: z.string(),
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const {title, description, price, imageLink} = req.body;

  // Input validation using zod
  const inputValidate = validateSchema.safeParse({
    title,
    description,
    price,
    imageLink,
  });
  if (!inputValidate.success) {
    return res.json({
        msg: "Error with your inputs!"
    })
  }

  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  return res.json({
    msg: "Course created successfully",
    courseId: newCourse._id
  })
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
//   const {username, password} = req.headers;
    const allCourses = await Course.find({})
    return res.json(allCourses)
});

module.exports = router;
