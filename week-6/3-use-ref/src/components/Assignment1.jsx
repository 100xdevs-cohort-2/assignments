import { useRef } from 'react'
import { useEffect } from 'react'

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const refContainer = useRef(null)

  useEffect(() => {}, [])
  const handleButtonClick = () => {
    refContainer.current.focus()
  }

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={refContainer} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  )
}
