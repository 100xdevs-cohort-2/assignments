const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://akhilpandey679_db_user:uS8JRa1C4OV0Kki2@cluster0.yiabsuk.mongodb.net');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
    },
    password:{
        type:String,
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    imageLink:{
        type:String,
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