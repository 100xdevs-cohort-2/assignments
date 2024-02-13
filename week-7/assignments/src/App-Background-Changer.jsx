import { useState } from 'react'

function App() {

  const [color, setColor] = useState("white");

  function handleClick(e) {
    // console.log(e)
    // document.getElementById("main-div").classList.remove(`bg-${color}-400`)
    const selectedColor = e.target.innerText.toLowerCase();
    setColor(selectedColor)
    // document.getElementById("main-div").classList.add(`bg-${selectedColor}-400`)
  }

  return (
  <div id="main-div" className={`h-screen w-screen border-2 bg-${color}-400`}>
    <div style={{backgroundColor:'white'}} className='flex flex-row m-5 p-5 justify-between border-2'>
      <button onClick={handleClick} className='bg-red-400 p-2'>Red</button>
      <button onClick={handleClick} className='bg-yellow-400 p-2'>Yellow</button>
      <button onClick={handleClick} className='bg-green-400 p-2'>Green</button>
      <button onClick={handleClick} className='bg-purple-400 p-2'>Purple</button>
      <button onClick={handleClick} className='bg-blue-400 p-2'>Blue</button>
    </div>
    {color}
  </div>
  )
}

export default App
