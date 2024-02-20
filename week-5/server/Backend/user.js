const { Router } = require("express");
const { Card } = require("../db");

const router = Router();

//User Routes
//User can hit this route to post or to get the Card.

router.post('/card',async (req,res)=>{
    //this route is to create the Card.
    //Once user hit this route, User can create a new Card by providing the nessescity details.
    const card = await Card.create({
        name: req.body.name,
        description: req.body.description,
        interest: req.body.interest,
        linkedin_link: req.body.linkedin_link,
        twitter_link: req.body.twitter_link,
    })
    if (!card) {
        //If there is any issue while creating the card, send the error message.
        return res.status(400).json({
            msg: "Error in creating a Card!"
        })
    } else {
        //If the card creation is succesfull, save it in database and send the success msg.
        return res.status(200).json({
            msg: "Card created succesfully!"
        })
    }
})

router.get("/cards",async (req,res) => {
    //this syntax returns all the card created by different users.
    const card_res = await Card.find({});
    if (!card_res) {
        return res.status(400).json({
            msg: "No card Found!",
        })
    } else {
        return res.status(200).json(card_res)
    }
})


module.exports = router