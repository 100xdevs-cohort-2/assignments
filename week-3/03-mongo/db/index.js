const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://McACE007:MrinalBaba007mc@cluster0.0gbxyhp.mongodb.net/week3-03?retryWrites=true');

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A user must have a username'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    trim: true,
    minlength: [8, 'Password must have greater than equal to 8 characters'],
    maxlength: [16, 'Password must have less than equal to 16 characters']
  }
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A user must have a username'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    trim: true,
    minlength: [8, 'Password must have greater than equal to 8 characters'],
    maxlength: [16, 'Password must have less than equal to 16 characters'],
  },
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }]
});

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A course must have a title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A course must have a description'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A course must have a price'],
    min: [0,]
  },
  imageLink: {
    type: String,
    required: [true, 'A course must have a cover image']
  },
  published: {
    type: Boolean,
    default: true,
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
