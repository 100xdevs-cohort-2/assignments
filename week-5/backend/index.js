const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');
const profileRoutes = require('./routes/profile');

const app = express();
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(`mongodb+srv://rajpratim001:${process.env.DB_PASSWORD}@cluster0.lrhp51g.mongodb.net/`)
mongoose.connection.on('connected', () => console.log("connected"))

app.use(express.json());
app.use('/', profileRoutes)
app.use('/admin', adminRoutes);

app.use(function (err, req, res, next) {
  console.error(err);
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});