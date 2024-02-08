const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username,
    password,
  });
  res.json({
    msg: "User created Successfully",
  });
});

router.get("/courses", async(req, res) => {
  // Implement listing all courses logic
  const response=await User.find({});
  res.json({
    course:response
  })

});

router.post("/courses/:courseId", userMiddleware, async(req, res) => {
    const courseId=req.params.courseId;
    const username=req.headers.username;
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
        username:req.headers.username
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
