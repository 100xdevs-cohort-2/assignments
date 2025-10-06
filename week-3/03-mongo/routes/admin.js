const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        const {username, password} = req.body;
        
        const exsitadmin = await Admin.findOne({username});

        if(exsitadmin) {
            return res.status(401).json({error: "admin already exist"});
        }

        const newadmin = new Admin({username, password});
        await newadmin.save();

        res.status(200).json({msg: "admin created successfully"});
    } catch (error) {
        res.status(500).json({msg: "Internal server error"});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        const {title, description, price, imageLink, published} = req.body;

        const newcourse = new Course({
            title,
            description,
            price,
            imageLink,
            published
        })
        await newcourse.save();

        res.status(200).json({msg: "course created successfully"});
    } catch (error) {
        res.status(500).json({msg: "Internal server error"});
    }
});

router.get('/courses', adminMiddleware, (req, res) => {
    try {
        const courses = Course.find({});
        res.json({courses});
    } catch (error) {
        res.status(500).json({msg: "Internal server error"});
    }
});

module.exports = router;