const { zCardTypeValidation } = require("./types");

function cardValidation(req, res, next) {
  const cardInfo = req.body;
  if (
    !cardInfo.name ||
    !cardInfo.description ||
    !cardInfo.social ||
    !cardInfo.interest
  ) {
    return res.status(400).json({ error: "Missing fields for card creation!" });
  }

  const validated = zCardTypeValidation.safeParse(cardInfo);

  if (!validated.success) {
    return res.status(404).json({ error: "Input validation failed!" });
  } else {
    req.parsedCardData = validated.data;
    res.status(200);
    next();
  }
  // Add the parsed data to the request body
}

module.exports = {
  cardValidation,
};
