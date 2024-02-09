const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET}=require("../config")

const { User,Course } = require("../db");
// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    message: "User created Successfully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user =await User.findOne({
    username,
    password,
  });
  if (user) {
   const token= jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
        token
    })
  }else{
    res.status(411).json({
       msg:"Incorrect email and password"
    })
  }
});

router.post("/courses", adminMiddleware, async(req, res) => {
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    const newCourse= await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg:"Course created Succesfully",couseId: newCourse._id
    })
});

router.get("/courses", adminMiddleware,async (req, res) => {
    const response=await Course.find({});
    res.json({
       couses:response
    })
});

module.exports = router;
