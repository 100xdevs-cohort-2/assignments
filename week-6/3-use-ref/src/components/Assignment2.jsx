import React, { useState, useCallback, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const renderRef = useRef(0);
  const [, forceRender] = useState(0);

  const handleReRender = useCallback(() => {
    // Update state to force re-render
    renderRef.current++;
    console.log(renderRef.current);
    forceRender(Math.random());
  }, []);

  return (
    <>
      <p>This component has rendered {renderRef.current} times.</p>
      <RenderButton onClick={handleReRender}></RenderButton>
    </>
  );
}

const RenderButton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>Force Re-render</button>
    </>
  );
};
