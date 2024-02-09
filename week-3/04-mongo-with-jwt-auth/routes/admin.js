const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../../03-mongo/db");
const router = Router();
const jwt = require('jsonwebtoken');
const { User, Course } = require("../solution/db");
const JWT_SECRET = require('../index');
// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const result = await Admin.findOne({
        username,
        password
    });

    if (result) {
        res.json({
            msg: 'Admin already exists'
        });
    }
    else{
        await Admin.create({
            username,
            password
        });

        res.json({
            msg: "Admin created successfully"
        });
    }

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    });

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and password"
        })
    }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const titleSchema = Zod.string();
    const descriptionSchema = Zod.string();
    const imageLinkSchema = Zod.string();
    const priceSchema = Zod.number();

    if (titleSchema.safeParse(req.body.title).success && descriptionSchema.safeParse(req.body.description).success && imageLinkSchema.safeParse(req.body.imageLink).success && priceSchema.safeParse(req.body.price).success ) {
        
        res.status(411).json({
            msg: "invalid input"
        });
        return;
    }

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        msg: "Course created successfully",
        courseId : newCourse._id
    });

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});

module.exports = router;