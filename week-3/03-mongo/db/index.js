const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://nitin2n33:nitin2n33@cluster0.f8nje.mongodb.net/padhaikarle');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    courseId: String,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

const UserCourseMapping = new mongoose.Schema({
    courseId: String,
    username: String,
    purchaseData: Date,
    status: {
        type: String,
        enum: ["ACTIVE", "EXPIRED"],
        default: "ACTIVE"
    }
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const UserCourseMap = mongoose.model('UserCourseMapping', UserCourseMapping, 'user_course_mapping');

module.exports = {
    Admin,
    User,
    Course,
    UserCourseMap
}