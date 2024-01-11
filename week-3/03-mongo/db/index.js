const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('MONGODB_SECRET_KEY');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    courses :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : {
       type : String,
       required : true
    },
    description : String,
    price : {
        type : Number,
        required : true
    },
    imageLink : String,
    published : Boolean    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}