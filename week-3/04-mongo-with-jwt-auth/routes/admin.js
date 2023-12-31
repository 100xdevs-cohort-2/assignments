const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course, User} = require("../db");
const uuid = require("uuid");
const jwtObject = require("../webToken");

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({username: username}).exec()
    if(user) {
        res.status(409).send("Admin user already exists!");
        return;
    }

    const newAdmin = new Admin({
        username,
        password
    })
    try {
      newAdmin.save();
    } catch(err) {
        res.status(500).send("Unable to create an admin user!");
        return;
    }
    res.status(200).send("Admin created successfully");    
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const adminExists  = await Admin.findOne({
        username: username
    }).exec();

    if(adminExists && adminExists.password == password) {
        const user = adminExists.username;
        try {
          const token = await jwtObject.jwt.sign({
              username: user
          },jwtObject.jwtSecret);

          res.status(200).json({
            token: token
          });
          return;
        } catch (err) {
            res.status(500).send("Something went wrong while creating token!");
            return;
        }
    } else {
        res.status(404).send("Access denied!")
    }

    res.status(200).send("You need to signup first!");
});

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imgLink = req.body.imageLink;
    const courseId = uuid.v4();

    const course = new Course({
        courseId: courseId,
        title: title,
        price: price,
        imageLink: imgLink,
        description: description,
        published: true
    })

    try {
        course.save();
    } catch (err) {
        res.status(500).send("Unable to create course!");
    }

    res.status(200).json({
        message: "Course created successfully",
        courseId: courseId
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.status(200).json({
        courses: courses
    })
});

module.exports = router;