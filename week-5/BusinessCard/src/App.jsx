import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card Name = "Lokeshwar"  description = "A TA in the 100xDevs Cohort 2.0" I1 = "Iconic" I2 = "Open Source"  I3 = "App Dev"/>
    </>
  )
}

function Card(props){
  return (
    <div>
      <h1>{props.Name}</h1>
      <p>{props.description}</p>
      <h3>Interest</h3>
      <p>{props.I1}</p>
      <p>{props.I2}</p>
      <p>{props.I3}</p>
      <button>LinkedIn</button>
      <button>Twitter</button>
    </div>
  )
}

export default App
