const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const Admin = require("../db");
const Course = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //checking if the admin is already present in db or not
    const check_Admin = await Admin.findOne({username,password})

    //checking if the admin already exists in the Database
    if (!check_Admin) {
        res.status(403).json({
            message: "Admin already Exist!"
        });
    } else {
        //Creating new admin instance
        const new_admin =  new Admin({
            username,
            password
        })

        //Save the new admin to the Database
        await new_admin.save();

        res.status(200).json({
            message: "Admin created Succesfully."
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic

    //When admin hits this route, he can create new courses by providing title, description,price and imagelink
    try {
        const new_course = await Course.create({
        title: req.body.title,
        description: req.boby.decription,
        price: req.boby.price,
        image: req.body.image
    })

    res.status(200).json({
        message: "Course Created Succesfully!",
    })
    } catch(error) {
        //if an  error occurs while creating course, send the error reponse
        res.status(404).json({
            message: "Error Creating Course!"
        })
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    try {
        const get_course = await Course.findOne({})
        res.status(200).json({
            message: "Succesfully Retrieved!",
            get_course: get_course
        })
    } catch(error) {
        res.status(200).json({
            msg: "Error in retriving"
        })
    }
});

module.exports = router;