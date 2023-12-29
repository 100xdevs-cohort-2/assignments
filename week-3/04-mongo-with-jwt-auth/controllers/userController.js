const catchAsync = require('../utils/catchAsync');
const db = require('../db/index');

exports.createNewUser = catchAsync(async (req, res, next) => {
  const user = await db.User.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'User created successfully'
  });
});

exports.getAllCourses = catchAsync(async (req, res, next) => {
  const courses = await db.Course.find();
  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: {
      courses
    }
  });
});

exports.purchaseCourse = catchAsync(async (req, res, next) => {
  const course = await db.Course.findById(req.params.courseId);

  if (!course) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Course Id'
    });
  }

  const user = await db.User.findOneAndUpdate(
    { username: req.headers.username },
    { $push: { purchasedCourses: course._id } },
    { new: true }
  );

  res.status(200).json({
    status: 'success',
    message: 'Course purchased successfully'
  });
});

exports.getAllPurchasedCourses = catchAsync(async (req, res, next) => {
  const user = await db.User.findOne({ username: req.headers.username }).populate('purchasedCourses');

  res.status(200).json({
    status: 'success',
    results: user.purchasedCourses.length,
    data: {
      purchasedCourses: user.purchasedCourses
    }
  });
}); 
