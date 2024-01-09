const { model, Schema } = require('mongoose');
const environment = require('../utils/constants');
const connectDB = require('../utils/mongodb/connect');

// Connect to MongoDB
connectDB(environment.DB_URL);

const AdminSchema = new Schema({ username: String, password: String });

const UserSchema = new Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Admin = model('Admin', AdminSchema);
const User = model('User', UserSchema);
const Course = model('Course', CourseSchema);

module.exports = { Admin, User, Course };
