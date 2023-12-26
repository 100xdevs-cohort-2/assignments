const { Router } = require("express");
const bcrypt=require("bcrypt");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const z=require("zod");
const jwt=require("jsonwebtoken");
const jwtSecret="ynscuywuiqhdsnwer";
const {Admin,User,Course}=require("../db/index");
let courseCount=1;
const signupobject=z.object({
    username:z.string(),
    password:z.string().min(6),
})
const courseObject=z.object({
    title:z.string(),
    description:z.string(),
    price:z.number(),
    imageLink:z.string(),
})
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    if(!(signupobject.safeParse(req.body).success)){
        return res.status(401).send("send username and password with atleast 6 characters");
    }
    try{
        const hpass=await bcrypt.hash(req.body.password,10);
        console.log(hpass);
        await Admin.create({
        username:req.body.username,
        password:hpass,
    });
    }
    catch(err){
        return res.status(500).send(err.message);
    }
    res.status(200).send("admin sucessfully created");
    
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    if(!(signupobject.safeParse(req.body).success)){
        return res.status(401).send("send username and password in body");
    }
    try{
        const username=req.body.username;
        const user=await Admin.findOne({username:username});
        if(!user){
            res.status(404).send("invalid credentials");
        }
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if(err || !result){
                return res.status(401).send("invalid credentials");
            }
        })
        const token=jwt.sign({username:req.body.username},jwtSecret);
        res.status(200).send({"token":token});
    }
    catch(err){
        return res.send(err.message);
    }
    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    if(!(courseObject.safeParse(req.body).success)){
        return res.send("send correct details of course");
    }
    try{
       await Course.create({
            id:courseCount,
            title:req.body.title,
            description:req.body.description,
            price:req.body.price,
            imageLink:req.body.imageLink,
       });
    }
    catch(err){
        res.send(err.message);
    }
    courseCount+=1;
    res.status(200).send("course created successfully");
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try{
        const list=await Course.find({});
        res.status(200).send({"courses":list});
    }
    catch(err){
       return  res.send(err.message);
    }
});

module.exports = router;