const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://username:password@cluster0.clkvine.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const AdminSchema = new mongoose.Schema({
    adminName: String,
    adminPassword: String,
 /* ->*/   adminCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
   /* ->*/ purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

const CourseSchema = new mongoose.Schema({
    courseTitle: String,
    courseDescription: String,
    price: Number,
    imageLink: String,
   /* ->*/ published: Boolean,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
