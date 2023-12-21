require('dotenv').config()
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String,
});
const Admin = mongoose.model('Admin', AdminSchema);

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    link:String,
});
const Course = mongoose.model('Course', CourseSchema);

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{type:mongoose.Schema.Types.ObjectId, ref:Course}]
});
const User = mongoose.model('User', UserSchema);


module.exports = {
    Admin,
    User,
    Course
}