const {z}=require("zod");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course}=require("../db");


// Admin Routes
router.post('/signup',async  (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const existingAdmin= await Admin.findOne({username:username})
    if(existingAdmin){
        return res.status(400).json({message:"Username Already Exists"})
    }

    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin created Successfully"
    })
});

const CourseSchema=z.object({
        title:z.string(),
        description:z.string(),
        photoLink:z.string().url(),
        price:z.number()
})

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    // const title=req.body.title;
    // const description=req.body.description;
    // const price=rqe.body.price;
    // const photoLink=req.body.photoLink;
    //OR
    const validCourse=CourseSchema.parse(req.body)

    const newCourse=await Course.create(validCourse)

    // const newCourse=await Course.create({
    //     title:z.string(),
    //     description:z.string(),
    //     photoLink:string().url(),
    //     price:z.number()
    // })

    res.json({
        message:"Course Created Successfully",
        courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response= await Course.find({});

    res.json({
        courses:response
    })
});

module.exports = router;