const { Router } = require("express");
const { Cards } = require("../db");
const router = Router();

router.get("/business-cards", async (req, res) => {
  try {
    const businessCards = await Cards.find({});
    res.json({ businessCards });
  } catch (error) {
    res.status(500).json({ error });
    console.log(`error -> ${error}`);
  }
});

module.exports = router;
