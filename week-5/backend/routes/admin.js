const { Router } = require("express");
const { Admin } = require('../db');
const { generateAccessToken } = require('../utils/auth');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
  try {
    const { username, password } = req.body
    Admin.findOne({ username: username }).then((data) => {
      if (data) res.status(404).json({ message: "username alraeday exist" })
      else {
        const newAdmin = new Admin({ username, password });
        newAdmin.save()
          .then((data) => {
            const token = generateAccessToken(data._id, data.username)
            res.status(201).json({ message: 'Admin created successfully', token });
          })
      }
    })
  }
  catch (error) {
    res.status(400).json({ message: 'Error creating admin' })
    next(error)
  }
});

router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    Admin.findOne({ username: username })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "username not found" })
        }
        else {
          if (data.password === password) {
            const token = generateAccessToken(data._id, data.username)
            res.status(200).json({ message: 'Admin logged in successfully', token });
          }
          else {
            res.status(401).json({ message: "password incorrect" })
          }
        }
      })
  } catch (error) {
    res.status(400).json({ message: 'Error logging in admin' })
    next(error)
  }
})

module.exports = router;