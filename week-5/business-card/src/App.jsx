
import { useState } from 'react'
import './App.css'
import BusinessCard from './BusinessCard'
function App() {
  console.log("app satrted");
  const[data,setData]=useState([
    {name:"Rocker",description:"On the way to build Brand",interest:["Play video game","Coding","Hitting Gym"]},
    {name:"Satyam",description:"Rocktech Owner",interest:["Content Creator","Drummer"]}]);
  return (
    <>
    {data.map(function(id){
       return <BusinessCard  name={id.name} description={id.description} interests={id.interest} />
    })}
    </>
  )
}

export default App
