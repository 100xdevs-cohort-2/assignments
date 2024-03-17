const { Router } = require("express");
const router = Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const { User,Course } = require("../db");

const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.create({
    username,
    password,
  });
  res.json({
    msg: "User Created Successfully!",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
        token,
      });
  }else{
    res.status(403).json({
        msg: "User Created Successfully!",
      });

  }
 
});

router.get("/courses", async(req, res) => {
  const response=await Course.find({});
  res.json({
    response
  })
});

router.post("/courses/:courseId", userMiddleware,async (req, res) => {
   const courseId=req.params.courseId;
   const username=req.username;
   console.log(username);
   await User.updateOne({
    username:username
   },{
    "$push":{
        purchasedCourses:courseId
    }
   })
   res.json({
    msg:"Purchased complete"
})

});

router.get("/purchasedCourses", userMiddleware, async(req, res) => {
    const user= await User.findOne({
        username:req.username
    })
    
    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })
});

module.exports = router;
