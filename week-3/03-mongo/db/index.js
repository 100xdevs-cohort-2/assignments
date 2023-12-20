const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://nothuman2718:iVRt4iVPYntJTlXX@cluster0.mbxopog.mongodb.net/courseApp')
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err))

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true },
    password: { type: String, required: true },
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageLink: { type: String, required: true }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}