const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://hashirakb:Th3ngak0!a@cluster100xdev.7ltfsnj.mongodb.net/100xDevsCourseApp');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    purchasedCourseId: [String],
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
   title: String,
   description: String,
   price: Number,
   imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}