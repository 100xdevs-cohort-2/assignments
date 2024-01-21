import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='card' className='shimmer-div'>
      <h2 id='name'>Lokesh Mishra</h2>
      <h3 id='descp'>Learning Fullstack from 100xDevs</h3>

      <h3 className='heading'>Interests</h3>
      <li>Flutter</li>
      <li>Next</li>
      <li>FireBase</li>
      <button>LinkedIn</button>
      <button>Twitter</button>
    </div>
  )
}

export default App
