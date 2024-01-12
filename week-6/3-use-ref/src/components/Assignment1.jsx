import React, { useRef } from "react";

export function Assignment1() {

  const inputRef = useRef(null);

  const handleButtonClick = () => {
  
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div>
    
      <input
        type="text"
        placeholder="Enter text here"
        ref={inputRef}
        autoFocus />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
