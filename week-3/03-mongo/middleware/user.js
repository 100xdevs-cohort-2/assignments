const { User, Course } = require("../db");


async function userMiddleware(req, res, next) {
    try {
        const username = req.headers.username;
        const password = req.headers.password;

        const user = await User.findOne({ username, password });

        if (password) {
            next();
        }
        else {
            res.status(500).json({ error: unauthorised })
        }
    }
    catch (err) {
        console.error(err);
    }
}

const postSignup = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        await User.create({username,password})
        res.status(500).json({message: "user created successfully"})
    }
    catch(err){
        console.log(err);
    }
}


const postPurchasedCourses = async (req, res, next) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
    res.json({
      message: "Course purchased successfully",
    });
}

const getCourses = async (req, res, next) => {
    const courses = await Course.find()
    res.json(courses);  
}

const getPurchasedCourses = async (req, res, next) => {
    const username = req.headers.username;
  const user = await User.findOne({
    username: username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({ couses_purchased: courses });

}

module.exports = {
    userMiddleware,
    postPurchasedCourses,
    postSignup,
    getCourses,
    getPurchasedCourses
};