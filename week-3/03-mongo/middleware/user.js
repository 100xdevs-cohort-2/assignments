const { User, Course, PurchasedCourses } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const { username } = req.headers;
  const checkUserInDb = await User.findOne({ username });

  if (checkUserInDb) {
    next();
  } else {
    res.status(400).json({
      message: `no user exist with ${username} email`,
    });
  }
}

async function checkCourseAvailable(req, res, next) {
  const courseId = req.params.courseId;
  try {
    let checkCourseId = await Course.findOne({ _id: courseId });
    const { title, description, price, imageLink, published } = checkCourseId;
    if (checkCourseId) {
      let addToPurchaseList = new PurchasedCourses({
        title,
        description,
        price,
        imageLink,
        published,
        purchased: true,
      });
      addToPurchaseList.save().then(() => {
        next();
      });
    } else {
      res.json({
        message: `No Course is available with course id ${courseId}`,
      });
    }
  } catch (error) {
    res.status(400).json(error);
    console.log("error: ", error);
  }
}

module.exports = { userMiddleware, checkCourseAvailable };
