const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Vijay:mmYVHo2KsiR2HsYN@cluster0.btjkz2i.mongodb.net/udemy');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
        unique: true
    },

    // email: {
    //     type: email, 
    //     required: true,
    //     unique: true
    // },

    password: {
        type: String,
        required: true,
    }

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
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

module.exports = {
    Admin,
    User,
    Course
}