const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    userName: req.headers.userName,
    password: req.headers.password,
  });
  res.json('admin created successfully');

  //   var saveData = new Admin({
  //     userName: userName,
  //     password: password,
  //     courseCreated: [],
  //   }).save(function (err, data) {
  //     if (err) throw err;
  //     if (data) res.json(data);
  //   });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
   title : req.body.title,
   description : req.body.description,
   price : req.Admin.price,
   imageLink : req.body.imageLink
});
   res.json('course Created ')
//   var saveData = new Course({
//     id: id,
//     title: title,
//     description: description,
//     price: price,
//     imageLink: imageLink,
//     published: published,
//   }).save(function (err, course) {
//     if (err) throw err;
//     if (course) res.json(course);
//   });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then(course => {
    res.json(course);
  })

});

module.exports = router;
