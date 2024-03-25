import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  useEffect(()=>{
    
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <>
      <div className="flex min-h-screen flex-col">
      <div className="flex-grow"></div>
      <div className="m-10 flex items-center justify-center">
        <div className="flex h-[60px] items-center shadow-lg">
          <button onClick={()=>{setColor('red')}} className="mx-7 w-16 rounded-lg bg-red-600">Red</button>
          <button onClick={()=>{setColor('yellow')}} className="mx-7 w-20 rounded-lg bg-yellow-400">Yellow</button>
          <button onClick={()=>{setColor('black')}} className="mx-7 w-16 rounded-lg bg-black text-white">Black</button>
          <button onClick={()=>{setColor('purple')}} className="mx-7 w-16 rounded-lg bg-purple-600">Purple</button>
          <button onClick={()=>{setColor('green')}} className="mx-7 w-20 rounded-lg bg-green-500">Green</button>
          <button onClick={()=>{setColor('blue')}} className="mx-7 w-16 rounded-lg bg-blue-600">Blue</button>
          <button onClick={()=>{setColor('white')}} className="mx-7 w-16 rounded-lg bg-white">Default</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
