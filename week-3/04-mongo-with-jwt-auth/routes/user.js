const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwtPassword = "usersecret";

// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic

    // Once user hits this route, a new user account will be created using the username and password.
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
    });
    // Check if a user already exists with same credentials.
    if (!newUser) {
        // If exists, send the error response.
        return res.status(500).json({
            message: "User already exists!",
        });
    } else {
        // If doesen't exists, save it in the database and send the success response.
        await newUser.save();
        return res.status(200).json({
            message: "User created successfully!",
        });
    }
});

router.post("/signin", async (req, res) => {
    // Implement user signup logic

    // Once user hits this route, the user account will be verified for login.

    // Check if the user has account using the credentials.
    const userExists = await User.findOne({
        username: req.headers.username,
        password: req.headers.password,
    });
    if (!userExists) {
        // If the user doesen't has account, send the error response.
        return res.status(404).json({
            message: "User doesen't exists!",
        });
    } else {
        // If the user has account, generate a JWT for the given username and password.
        const token = jwt.sign(
            { username: req.body.username, password: req.body.password },
            jwtPassword
        );
        return res.status(200).json({
            token: token,
        });
    }
});

router.get("/courses", (req, res) => {
    // Implement listing all courses logic

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

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic

    // This route returns the current course purchased by the user.

    // Here, we don't take the username from the headers. This is because there might be a situation where the authorization token is of user1 but the username is of user2.
    // To avoid this security issue, the username is picked up from the userMiddleware itself and is stored in the req object.
    const user = await User.updateOne(
        {
            username: req.username,
        },
        {
            $push: {
                purchasedCourses: req.params.courseId,
            },
        }
    );
    return res.status(200).json({
        message: "Course purchased successfully!",
    });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    // This route returns all the courses purchased by the user.

    // Here, we don't take the username from the headers. This is because there might be a situation where the authorization token is of user1 but the username is of user2.
    // To avoid this security issue, the username is picked up from the userMiddleware itself and is stored in the req object.
    const user = await User.findOne({
        username: req.username,
    });
    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses,
        },
    });
    // Check if the user has purchased any course.
    if (!courses) {
        // If not purchased, send the error response.
        return res.status(500).json({
            message: "No courses found!",
        });
    } else {
        // If purchased, send the success response.
        return res.status(200).json({
            courses: courses,
        });
    }
});

module.exports = router;