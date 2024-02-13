import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Button } from './components/Button'

function App() {
  const colors = ["Red","Yellow","Black","Purple","Green","Blue","Default"];
  const [bg, setBg] = useState('white');

  const divRef = useRef(bg);

  useEffect(() => {
    if(bg === 'Default'){
      setBg('white');
    }
    divRef.current.style.backgroundColor = bg;
  }, [bg]);

  return (
   <div ref={divRef} className='card'>
    {colors.map((color) => {
      return(<Button color={color} setBg={setBg} />)
    })}
   </div>
  )
}

export default App
