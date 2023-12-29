const { Router } = require("express");
const { Course } = require("../db");
const { Admin } = require("../db");

const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const user = req.headers.username
    const pass = req.headers.password
    const data = await Admin.find({})
    for(let element of data){
        if(element.username == user){
            return res.status(200).json({message:"Admin name already exists"})
        }
    };
    const obj = new Admin({username : user , password : pass})
    await obj.save()
    res.status(200).json({message:"Admin created successfully"})
});

router.post('/courses', async (req, res) => {
    const id = Math.floor(Math.random() * 100)
    await Course.create({
        id: id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })
    res.status(200).json({message:`Created a course ${id}`})
});

router.get('/courses', async (req, res) => {
    const data = await Course.find({})
    if(data){
        return res.status(200).json(data)
    }
    res.status(200).json({message : "No courses available"})
});

module.exports = router;