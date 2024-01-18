 import { useEffect, useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */ 
import './App.css'
/* import { Button } from './components/Button' */
import  {Task1 } from './components/Task1'

function App() {
  const [bgcolor, setbgcolor] = useState("orange");
  const click = bgcolor => {
    setbgcolor(bgcolor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  },[bgcolor])

  return (
    <>
      <Task1 />

      <button onClick={() => {
        click("red");
      }}> change color to red</button>

      <button onClick={() => {
        click("yellow");
      }}> change color to yellow</button>

      <button onClick={() => {
        click("black");
      }}> change color to black</button>

      <button onClick={() => {
        click("purple");
      }}> change color to purple</button>

      <button onClick={() => {
        click("green");
      }}> change color to green</button>


      <button onClick={() => {
        click("blue");
      }}> change color to blue</button>



      <button onClick={() => {
        click("orange");
      }}> default</button>

      {/* <Button /> */}
    </>
  )
}

export default App
