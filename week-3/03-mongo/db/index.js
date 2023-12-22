const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://swapnilsindhur85:PEFHBm3MtQmwomRn@cluster0.vetgbr0.mongodb.net/courseSellingData');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    purchasedCourses:[
        {
            type:Object
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description:String,
    price:Number,
    imageLink:String,
    published:{
        type: Boolean,
        default:true,
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}