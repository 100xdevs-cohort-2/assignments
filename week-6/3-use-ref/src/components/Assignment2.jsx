import React, { useState, useCallback, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [count, setCount] = useState(0);

  const numberOfTimesReRendered = useRef(0);

  const increaseStateAndRefAndRender = () => {
    // Update state to force re-render
    setCount(count + 1);
  };

  //Try moving this to increaseStateAndRefAndRender function
  numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

  return (
    <div>
      <p>State variable count - updates DOM after re-render: {count} times.</p>
      <p>
        Reference variable count - does not need DOM re-render to update:{" "}
        {numberOfTimesReRendered.current}
      </p>
      <button onClick={increaseStateAndRefAndRender}>Force Re-render</button>
    </div>
  );
}

/*
The useRef() persists across render - updates even without any need of render.
When the useRef variable is outside of any function and updates on each render, you will see it render twice on 1 render.

However, when moved to the function increaseStateAndRefAndRender it will update only once when the button is clicked
*/
