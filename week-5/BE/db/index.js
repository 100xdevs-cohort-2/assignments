const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (err) {
    console.log(`DB Connection Failed . error ${err}`);
  }
};

const adminSchema = new mongoose.Schema({
  userName: String,
  password: String,
});

const socialLinkSchema = new mongoose.Schema({
  url: String,
  name: String,
});

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
  socialLinks: [socialLinkSchema],
});

const Admin = mongoose.model("Admin", adminSchema);
const Cards = mongoose.model("BusinessCards", cardSchema);

module.exports = {
  connectDb,
  Admin,
  Cards,
};
