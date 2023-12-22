const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index.js");

const { z } = require("zod");
const adminSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
  email: z.string().email(),
  name: z.string(),
});

const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  imageLink: z.string(),
  published: z.boolean(),
});

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const validate = adminSchema.safeParse(req.body);

  if (!validate.success) {
    console.log(validate.error);
    return res
      .status(500)
      .send("please provide all required fields with correct data type");
  }
  try {
    const newAdmin = await Admin.create(req.body);
    res.status(201).json({
      message: "Admin created successfully",
      adminId: newAdmin._id,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }

  //
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const courseElemValidate = courseSchema.safeParse(req.body);
  if (!courseElemValidate.success) {
    console.log(courseElemValidate.error);
    const errorMessage = courseElemValidate.error.errors.map((err) => err.path[0] + " input is invalid: " + err.message, );
    return res
      .status(500)
      .send({message:"please provide all required fields with correct data type", error: errorMessage});
  }

  try {
    const isCourseExist = await Course.findOne({ title: req.body.title }).exec();
    if (isCourseExist) {
      return res
        .status(500)
        .send({ message: "Course already exists with this title" });
    }
    const newCourse = await Course.create(req.body);
    res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {

    const courseList = await Course.find();
    if(!courseList) {
        res.status(404).send({message: "No courses found"});
    }
    res.status(200).send({message: "Courses fetched successfully", courses: courseList});

  // Implement fetching all courses logic
});

module.exports = router;
