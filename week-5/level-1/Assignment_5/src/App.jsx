import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  return (
    <div>
      <HeaderWithButton/>
      <Header title = "My name is abhinandan"/>
    </div>
  )
}

function HeaderWithButton(){
  const [firstTitle, setFirstTitle] = useState("my name is abhinandan");

  function changeTitle(){
    setFirstTitle("My name is "+ Math.random());
  }

  return <>

  <button onClick={changeTitle}>Click me to change the title</button>
  <Header title={firstTitle}/>
  
  
  
  </>



}




function Header({title}){
  console.log("re-rendered");
  return <div>
    {title}
  </div>
}

export default App
