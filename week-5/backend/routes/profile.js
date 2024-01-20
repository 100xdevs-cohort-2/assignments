const { Router } = require("express");
const { Profile } = require('../db');
const { authenticateToken } = require('../middlewares/auth');
const router = Router();

//Profile routes

router.get("/", (req, res) => {
  try {
    Profile.find()
      .then((data) => {
        res.status(200).json(data)
      })
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving profiles' })
    next(error)
  }
})

router.post("/profile/create", authenticateToken, (req, res) => {
  try {
    const { fullName, description, interests, socialMediaHandles } = req.body;
    const newProfile = new Profile({ fullName, description, interests, socialMediaHandles })
    newProfile.save()
      .then(() => {
        res.status(201).json({ message: 'Profile created successfully' })
      })
  } catch (error) {
    res.status(400).json({ message: 'Error creating profile' })
    next(error)
  }
})

router.patch("/profile/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      res.status(404).json({ message: 'Profile not found' })
    } else {
      let query = { $set: {} }
      for (let key in req.body) {
        if (profile[key] && profile[key] != req.body[key]) {
          query.$set[key] = req.body[key]
        }
      }
      const updatedProfile = await Profile.save({ _id: req.params.id, query })
      res.status(200).json(updatedProfile)
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'Error updating profile' })
  }
})

router.delete("/profile/:id", authenticateToken, async (req, res) => {
  try {
    const result = await Profile.deleteOne({ _id: req.params.id })
    if (result.deletedCount == 1) {
      res.status(200).json({ message: 'Profile deleted successfully' })
    }
    else {
      res.status(404).json({ message: 'Profile not found' })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router;