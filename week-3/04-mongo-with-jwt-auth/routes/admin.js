const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const jwtPassword = "adminsecret";

// Admin Routes
router.post("/signup", async (req, res) => {
    // Implement admin signup logic

    // Once admin hits this route, a new admin account will be created using the username and password.
    const newAdmin = await Admin.create({
        username: req.body.username,
        password: req.body.password,
    });
    // Check if an admin already exists with same credentials.
    if (!newAdmin) {
        // If exists, send the error response.
        return res.status(500).json({
            message: "Error signing up Admin!",
        });
    } else {
        // If doesen't exists, save it in the database and send the success response.
        await newAdmin.save();
        return res.status(200).json({
            message: "Admin created successfully!",
        });
    }
});

router.post("/signin", async (req, res) => {
    // Implement admin signup logic

    // Once admin hits this route, the admin account will be verified for login.

    // Check if the admin has account using the credentials.
    const adminExists = await Admin.findOne({
        username: req.headers.username,
        password: req.headers.password,
    });
    if (!adminExists) {
        // If the admin doesen't has account, send the error response.
        return res.status(404).json({
            message: "Admin doesen't exists!",
        });
    } else {
        // If the admin has account, generate a JWT for the given username and password.
        const token = jwt.sign(
            { username: req.body.username, password: req.body.password },
            jwtPassword
        );
        return res.status(200).json({
            token: token,
        });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic

    // Once admin hits this route, he can create new courses by providing title, description, price and an image.
    const course = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    });
    // If there's any issue while creating the course, send the error response.
    if (!course) {
        return res.status(500).json({
            message: "Error creating course!",
        });
    } else {
        // If the course creation is successful, send the success response.
        return res.status(200).json({
            message: "Course created Successfully!",
            courseId: course._id,
        });
    }
});

router.get("/courses", adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    // This route returns all the courses available.

    // Use the .find() method to search the courses. This method returns a promise.
    // If the courses are found, the promise will resolve and return the courses as response.
    Course.find({})
        .then((courses) => {
            return res.status(200).json(courses);
        })
        .catch((error) => {
            // If the courses are not found, send the error response.
            return res.status(500).json({
                message: "Something went wrong!",
                error,
            });
        });
});

module.exports = router;
