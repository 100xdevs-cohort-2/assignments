const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index");
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config"); // Adjust the import here

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    });

    res.json({
        msg: "Admin created successfully"
    });
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   

    const user = await Admin.findOne({
        username: username,
        password:password
    });
   

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        });
    } else {
        res.status(411).json({
            msg: "Incorrect email and password"
        });
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    const courseTitle = req.body.title;
    const courseDescription = req.body.description;
    const coursePrice = req.body.price;
    const courseImageLink = req.body.imageLink;

    const newCourse = new Course ({
        title : courseTitle,
        description : courseDescription,
        price : coursePrice,
        imageLink : courseImageLink

    })

    newCourse.save().then(()=>{
        res.status(200).json({
            msg: "Course created successfully",
            courseId: newCourse._id
        })
    }).catch((e)=>{
        res.status(500).send('internal error')
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
   const responce = await Course.find({})

   res.json({
    responce
   })
});

module.exports = router;
