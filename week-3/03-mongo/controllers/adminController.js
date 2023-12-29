const catchAsync = require('../utils/catchAsync');
const db = require('../db/index');

exports.createNewAdmin = catchAsync(async (req, res, next) => {
  const admin = await db.Admin.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Admin created successfully'
  });
}); 
