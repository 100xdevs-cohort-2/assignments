const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin,Course }  = require("../db")

router.use(Router.json());
const jwt = require("jsonwebtoken");

const jwtPassword = "givemeahayiaahhaann123@@";



// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const user_name = req.body.username;
    const pass_word = req.body.password;

    const response = await Admin.create({
        username:user_name,
        password:pass_word
    })

    res.status(200).json({msg:"Admin created successfully"});

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({username:username,password:password},jwtPassword);

    res.status(200).json({token:token});

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const response = await Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })

    res.status(200).json({message: 'Course created successfully', courseId: response._id });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});

    res.status(200).json({courses:response});
});

module.exports = router;