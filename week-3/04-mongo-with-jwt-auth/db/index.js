const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    userName : String,
    password : String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  userName: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    definitions: String,
    price : Number,
    imageUrl : String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}