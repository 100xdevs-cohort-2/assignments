const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");
const router = Router();


router.post('/signup',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    }).then(() => {
        res.json({
            msg: "Admin created successfully"
        })
    }).catch((err) => {
        res.json({
            msg: " Error creating admin"
        })
    })
});


router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({
        username: username,
        password:password
    })

    if (user) {
        const signedTOken = jwt.sign({ username }, JWT_SECRET);
        res.json({
            signedTOken  
        })
    } else {
        res.json({
            msg: "Wrong username or password"   
        })
    }
});



router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink, 
        price: price
    })

    res.json({
        msg: "Course created successfully",
        courseid : newCourse._id
    })
    
}); 

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response
    })
});



module.exports = router;


