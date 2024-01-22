const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vishnubv944:vishnubv2002@cluster0.30sovri.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    coursesCreated:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    coursesPurchased:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type: String
    },
    imageLink:{
        type:String
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