const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('connected to DB')
    })
    .catch(error => {
      console.log('some Error:', error)
    })

}

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  purchasedCourses: [String]
});

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    required: true
  }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
  connectDB
}