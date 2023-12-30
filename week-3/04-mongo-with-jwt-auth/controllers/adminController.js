const catchAsync = require('../utils/catchAsync');
const db = require('../db/index');
const jwt = require('jsonwebtoken');

exports.createNewAdmin = catchAsync(async (req, res, next) => {
  const admin = await db.Admin.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Admin created successfully'
  });
});

exports.createNewCourse = catchAsync(async (req, res, next) => {
  const course = await db.Course.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      course
    }
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

exports.signInAdmin = catchAsync(async (req, res, next) => {
  const admin = await db.Admin.findOne(req.body);

  if (!admin) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Username or Password'
    });
  }

  const token = jwt.sign(admin.username, '12345678');
  res.status(200).json({
    status: 'success',
    data: {
      token
    }
  });
});
