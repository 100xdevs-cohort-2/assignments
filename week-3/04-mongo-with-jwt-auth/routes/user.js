const z=require("zod");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require("../db/index");
const userObject=z.object({
    username:z.string(),
    password:z.string().min(6),
})
const jwtSecret="ynscuywuiqhdsnwer";
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    if(!(userObject.safeParse(req.body).success)){
        return res.send("send details in body of request");
    }
    const username=req.body.username;
    const password=req.body.password;
    try{
        const hash=await bcrypt.hash(password,10);
        await User.create({
            username:username,
            password:hash,
        })
    }
    catch(err){
       return  res.status(500).send(err.message);
    }
    res.status(200).send("user created successfully");
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    if(!(userObject.safeParse(req.body).success)){
        return res.send("send details in body of request");
    }
    const username=req.body.username;
    try{
        const user=await User.findOne({username:username});
        if(!user){
            res.status(401).send("ivalid creadentials");
        }
        const passMatch=bcrypt.compare(req.body.password, user.password);
        if(!passMatch){
            return res.status(401).send("invalid credentials"); 
        }
        const token=jwt.sign({username:username},jwtSecret);
        res.status(200).send({"token":token});
    }
    catch(err){
        res.send(err.message);
    }
});

router.get('/courses', userMiddleware,async(req, res) => {
    // Implement listing all courses logic
    try{
        const courses=await Course.find({});
        res.status(200).send({courses:courses})   
     }
     catch(err){
        res.send(err.message);
     }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try{
        const cid=parseInt(req.params.courseId.replace(/[^0-9]/g,""));
        const username=req.headers['username'];
        const user=await User.findOne({username:username});
        if(!(await Course.findOne({id:cid}))){
            return res.status(401).send("requested course is not present");
        }
        if(user.purchasedcourses.includes(cid)){
            return res.status(401).send("Course already Purchased");
        }
        user.purchasedcourses.push(cid);
        await user.save();
        res.status(200).send("Course sucessfully Purchased");
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers['username'];
    try{
        const user=User.findOne({username:username});
        if(!user){
            return res.status(404).send("user not found");
        }
        res.status(200).send({courses:user.purchasedcourses});
    }
    catch(err){
        res.status(201).send(err.message);
    }
});

module.exports = router