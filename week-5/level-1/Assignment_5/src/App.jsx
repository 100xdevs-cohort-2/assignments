import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Abhinandan1")

  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }

  return (

    <React.Fragment>

         <button onClick={updateTitle}>Update the title</button>
         <Header title={title}></Header>
         <Header title="Abhinandan2"></Header>


    </React.Fragment>
  )
}


function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
