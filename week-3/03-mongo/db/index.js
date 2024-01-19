const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://op1999namdeo:Omprakash@cluster0.qet9xzd.mongodb.net/harikirat');
    // .catch(error => handleError(error));                                // /cohort2_week4 -> mongoose will connect you to this collections or if collection dosen't exit it will create one and connect.
// console.log("connection sucessful");                                    // by default it creates test database

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchagedCourses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
// console.log("Schema creation done")
module.exports = {
    Admin,
    User,
    Course
}