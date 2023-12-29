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

exports.getCourse = catchAsync(async (req, res, next) => {
  const course = await db.Course.findById(req.params.courseId);
  res.status(200).json({
    status: 'success',
    data: {
      course
    }
  });
}); 
