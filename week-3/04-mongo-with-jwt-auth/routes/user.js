const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db/index.js");


const { userSchema, loginSchema, courseSchema, JwtSecret, Jwt } = require("../utils/utils");

// User Routes
router.post('/signup',async (req, res) => {

    // Implement user signup logic

    const validate = userSchema.safeParse(req.body);
    if(!validate.success) {
        console.log(validate.error);
        const errorMessage = validate.error.errors.map((err) => err.path[0] + " input is invalid: " + err.message );
        return res
            .status(500)
            .send({
                message: "Validation error",
                cause: errorMessage
            });
    }
    try {
        const user = await User.findOne({ username: req.body.username }).exec();
        if(user) {
            return res
                .status(500)
                .send({ message: "User already exists with this email" });
        }
        const newUser = await User.create(req.body);
        res.status(201).json({
            message: "User created successfully",
            userId: newUser._id,
        });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Internal Server Error", error: error.message });
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const validate = loginSchema.safeParse(req.body);
    if(!validate.success) {
        console.log(validate.error);
        const errorMessage = validate.error.errors.map((err) => err.path[0] + " input is invalid: " + err.message );
        return res
            .status(500)
            .send({
                message:"validation error", 
                cause: errorMessage
            });
    }
    const isUser = await User.findOne({ username: req.body.username }).exec();
    if(!isUser || isUser.password !== req.body.password) {
        return res
            .status(500)
            .send({ message: "User does not exist with these credentials" });
    }
    try {
        const token = Jwt.sign({ username: req.body.username, password: req.body.password }, JwtSecret);
        res.status(200).json({ token: token });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Internal Server Error", error: error.message });
    }
});

router.get('/courses',userMiddleware, async(req, res) => {
    // Implement listing all courses logic

    try {
        const courses = await Course.find().exec();
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Internal Server Error", error: error.message });
    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = Jwt.decode(req.headers['authorization'].split(' ')[1]).username;

    try {
        const course = await Course.findById(courseId).exec();
        if(!course) {
            return res
                .status(500)
                .send({ message: "Course does not exist" });
        };
        
        const user = await User.findOne({ username: username }).exec();

        if(!user) {
            return res
                .status(500)
                .send({ message: "User does not exist" });
        }
        
        if(user.purchasedCourses.includes(courseId)) {
            return res
                .status(500)
                .send({ message: "You have already purchased this course" });
        }

        user.purchasedCourses.push(courseId);

        user.save();

        res.status(200).json({message: "Course purchased successfully", coures: user.purchasedCourses});
        
    }catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Internal Server Error", error: error.message });
    }



});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username = Jwt.decode(req.headers['authorization'].split(' ')[1]).username;
    const userCourseObj = {};
    try {
        const user = await User.findOne({ username: username }).exec();
        if(!user) {
            return res
                .status(500)
                .send({ message: "User does not exist" });
        }
        let purchasedCourses = user.purchasedCourses;

        for (let i = 0; i < purchasedCourses.length; i++) {
            const course = await Course.findOne({"_id":purchasedCourses[i], published: true}).exec();
            if(course) {
                userCourseObj[i] = course;
            }
            
        }


        res.status(200).json(userCourseObj);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "Internal Server Error", error: error.message });
    }

});



module.exports = router