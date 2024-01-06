const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index")
const jwt = require("jsonwebtoken");
const router = Router();
const jwtPassword = "mr_krishna"

router.post('/signup', adminMiddleware, async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password)
    await Admin.create({
        username: username,
        password: password,
    });
    res.json({
        msg: "Admin created sucessfully",
    });
});

router.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    const token = jwt.sign(
        {
            username: username,
            password: password,
        },
        jwtPassword
    );
    res.json({
        token: token,
    });
});

router.get('/courses', async (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const courses = await Course.find();
        res.json({
            msg: "All course List",
            courses: courses
        })
    } catch (err) {
        res.json({
            msg: "Athorisation err",
        });
    }
});

router.post('/course/create/', async (req, res) => {
    const token = req.headers.authorization;
    console.log(token)
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const title = req.body.title;
        const description = req.body.description
        const price = req.body.price;
        const image = req.body.image;
        const purchased = req.body.purchased;

        const newCourse = await Course.create({
            title: title,
            description: description,
            price: price,
            image: image,
            purchased: purchased
        })
        console.log(newCourse)
        res.json({
            msg: "course created successfully",
            course: newCourse
        });
    } catch (err) {
        res.json({
            msg: "Athorisation err",
        });
    }
});

module.exports = router;