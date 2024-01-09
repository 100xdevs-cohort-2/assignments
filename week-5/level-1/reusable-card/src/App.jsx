import { useCallback, useEffect, useState } from "react"
import Card from "./assets/Card"
import Input from "./assets/Input"
import './app.css'
import axios from 'axios';


function App() {
  // const [count, setCount] = useState(0)
const [cardList,setCardList] = useState([])

useEffect(()=>{
  const fetchdata = async () => {
  try{
    const response = await axios.get('http://localhost:3001/cards')
    setCardList(response.data)
  }catch(error){
    console.error(error);
  }
};

fetchdata();
},[]);


const addCard = useCallback(async (formData) =>{
  try{
    const response = await axios.post('http://localhost:3001/cards',formData)
    setCardList([...cardList,response.data])
  }catch(error){
    console.error(error)
  }
},[])






  return (
    <div className="container">
    <Input onInputchange={addCard} />
    {cardList.map((data, index)=>(
      <Card key={index} data={data} className="card"/>
    ))}
   

    </div>
  )
}

export default App
