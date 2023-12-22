require('dotenv').config()
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    hashedPassword:{type:String,required:true},

});
const Admin = mongoose.model('Admin', AdminSchema);

const CourseSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    imageLink:{type:String},
    published:{type:Boolean},
});
const Course = mongoose.model('Course', CourseSchema);


const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    hashedPassword:{type:String,required:true},
    coursesPurchased:[{type:mongoose.Schema.Types.ObjectId,ref:Course}]
});
const User = mongoose.model('User', UserSchema);



module.exports = {
    Admin,
    User,
    Course
}