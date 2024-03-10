const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const profileSchema = new mongoose.Schema({
  fullName: String,
  description: String,
  interests: [String],
  socialMediaHandles: {
    type: Map,
    of: String
  },
})

const Admin = mongoose.model('Admin', adminSchema)
const Profile = mongoose.model('Profile', profileSchema)

module.exports = {
  Admin,
  Profile
}