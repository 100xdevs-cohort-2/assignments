const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Cards, Admin } = require("../db");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/create-admin", async (req, res) => {
  try {
    const userName = req.body.username;
    const hashPass = await bcrypt.hash(req.body.password, 9);
    const jwtToken = jwt.sign(userName, process.env.JWT_PASS);

    await Admin.create({
      userName: userName,
      password: hashPass,
    });

    res.status(200).json({ message: "Admin Created", jwtResponse: jwtToken });
  } catch (error) {
    res.status(500).json({ error });
    console.log(`error -> ${error}`);
  }
});

router.post("/add-card", adminMiddleware, async (req, res) => {
  try {
    console.log(req.body.socialLinks);

    const links = req.body.socialLinks.map((link) => ({
      name: link.name,
      url: link.url,
    }));

    await Cards.create({
      name: req.body.name,
      description: req.body.description,
      interests: req.body.interests,
      socialLinks: links,
    });
    res.status(200).json({ message: "Card Added" });
  } catch (error) {
    res.status(500).json({ error });
    console.log(`error -> ${error}`);
  }
});

module.exports = router;
