import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='grid gird-cols-5'>
      <div className=' b-red-500 col-span-4'>hi</div>
      <div className=' b-cyan-500 col-span-4'>hi</div>
      <div className=' b-orange-500 col-span-4'>hi</div>

     </div>
    </>
  )
}

export default App
