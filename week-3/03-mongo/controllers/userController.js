const catchAsync = require('../utils/catchAsync');
const db = require('../db/index');

exports.createNewUser = catchAsync(async (req, res, next) => {
  const user = await db.User.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'User created successfully'
  });
});
