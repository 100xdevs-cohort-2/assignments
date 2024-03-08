import ShowCard from "./ShowCard";
import '../Card.css'
import { useState } from "react";

function AddCard()
{
  const [ card , setCard ] = useState([])
  const [name , setName] = useState('');
  ;  const [desc , setDesc] = useState('')
;  const [number , setNumber] = useState('')
const[email , setEmail]=  useState('');

return (<>
    <input type="text " placeholder='Enter Card Name'    onChange={(e) =>{
      setName(e.target.value)
    }} name="" id="" /> <br />
    <input type="text " placeholder='Enter Description  ' onChange={(e) =>{
      setDesc(e.target.value)
    }}  name="" id="" />    <br />
    <input type="text " placeholder='Enter Email  ' onChange={(e) =>{
      setEmail(e.target.value)
    }}  name="" id="" /> <br />    <input type="text " placeholder='Enter Phone Number  ' onChange={(e) =>{
      setNumber(e.target.value)
    }}  name="" id="" /> <br />
    <button onClick={() => {
      setCard([...card , {
        name : name , 
        desc : desc,
        email : email,
        number : number
      }])

    }}>Add</button>
    <br /><br />

    {card.map((card) => {
      return (
          <>
                  <ShowCard card={card} />
        <br></br></>
      )
        })}
</>)
}

export default AddCard