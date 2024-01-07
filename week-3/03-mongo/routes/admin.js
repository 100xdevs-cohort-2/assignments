const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const { zStr, zNum, zBol } = require("../index");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = zStr.safeParse(req.body.username);
  const password = zStr.safeParse(req.body.password);

  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) return res.send(400, { message: "Admin Already Exists" });

  Admin.create({ username, password })
    .then(() => {
      res.send(201, { message: "Admin created successfully" });
    })
    .catch(() => {
      res.send(503, { message: "Something went wrong" });
    });

  /*
  const admin = new Admin({ username, password });
  try {
    admin.save();
    res.send(201, { message: "Admin created successfully" });
  } catch (e) {
    res.send(503, { message: "Something went wrong" });
  }
  */
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = zStr.safeParse(req.body.title);
  const description = zStr.safeParse(req.body.description);
  const price = zNum.safeParse(req.body.price);
  const imageLink = zStr.safeParse(req.body.imageLink);
  const createdBy = zStr.safeParse(req.headers.username);
  const published = zBol.safeParse(true);

  const courseId = await Course.create({
    title,
    description,
    price,
    imageLink,
    createdBy,
    published,
  });

  res.send(201, {
    message: "Course created successfully",
    courseId: courseId._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.send(200, { courses });
});

module.exports = router;
