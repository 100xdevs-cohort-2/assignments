const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://NavieoAMW:LplJe9Nq27gwNAfm@cluster0.jv9uspn.mongodb.net/?retryWrites=true');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    purchased : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course',
    }]
}); 

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : {
        type : String,
    },
    description : {
        type : String,
    },
    imageLink : {
        type : String,
    },
    price : {
        type : Number,
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