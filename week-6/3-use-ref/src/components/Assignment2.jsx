import React, { useState, useCallback } from 'react'
import { useRef } from 'react'

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [render, forceRender] = useState(0)
  const [count, setCount] = useState(0)
  const renderTime = useRef(0)

  const handleReRender = () => {
    // Update state to force re-render
    renderTime.current.value = setCount(count + 1)

    forceRender(Math.random())
  }

  return (
    <div>
      <p ref={renderTime}>This component has rendered {count} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  )
}
