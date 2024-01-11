const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongo_url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:[true,'Username is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    }

},{
    timestamps:true
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:[true,'username is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
},{
    timestamps:true,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type:String,
        required:[true,"title is required"]
    },
    description: String,
    price: Number,
    imageLink: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
