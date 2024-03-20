import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const renderCountRef = useRef(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    renderCountRef.current++;
  });
  const handleReRender = () => {
    // Update state to force re-render
    forceRender(Math.random());
  };

  return (
    <div>
      <p>This component has rendered {renderCountRef.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
