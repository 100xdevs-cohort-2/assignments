import React, { useState, useCallback, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [num, setNumber] = useState(0);
  const counter = useRef(0);
  const handleReRender = () => {
    // Update state to force re-render

    setNumber(Math.random());
  };
  counter.current = counter.current + 1;
  console.log(counter.current);
  return (
    <div>
      <p>This component has rendered {num} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
