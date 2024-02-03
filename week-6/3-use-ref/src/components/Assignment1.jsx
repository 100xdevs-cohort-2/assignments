import React, { useEffect, useRef } from "react";

export function Assignment1() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // Focus the input when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
