const express = require('express')
const app = express();
const cors = require('cors') 
app.use(cors());
app.use(express.json())
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhay1234:********@cluster1.l2dt7dg.mongodb.net/Cards-Assignment')

const cardSchema = new mongoose.Schema({
    name:String,
    description:String,
    interest1: String,
    interest2: String,
    interest3: String
})

const Card = mongoose.model('Card',cardSchema);

app.get('/cards' , async(req,res)=>{
  try{
   const cards = await Card.find();
   res.json(cards);
}catch(error){
  console.error(error);
}
})

app.post('/cards' , async(req,res)=>{
   try{
   const newCard = await Card.create(req.body);
   res.json(newCard)

}catch(error){
 console.error(error)
}
} )

app.put('/cards/:id', async(req,res)=>{
   try{
   const updatedCards = await Card.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
);
res.json(updatedCards);
} catch(error){
console.error(error)
}

})

app.delete('/cards/:id',async(req,res)=>{
  try{
  await Card.findByIdAndDelete(req.params.id);
  res.json({message: 'Card deleted successfully '});
}catch(error){
console.error(error)
}
})


const PORT = 3001

app.listen(PORT,()=>{
console.log("Server is running on "+PORT)
})

