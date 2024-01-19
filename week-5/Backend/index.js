const express = require('express')
const {Card} = require('./db')
const cors = require('cors')

const app = express()

const port = 3001

app.use(express.json())
app.use(cors())

app.post("/card", async (req, res)=>{
    const {name,group, interest} = req.body

    const countCard = await Card.countDocuments()

    await Card.create(
        {
            cardId: countCard,
            name: name,
            group: group,
            interest: interest
        }
    )

    res.status(200).json("Your Card is created")

})

app.get("/cards", async(req, res)=>{
    const cards = await Card.find({})

    res.status(200).json({
        cards
    })
})

app.listen(port, ()=>{
    console.log(`your app is listening at ${port}`)
})