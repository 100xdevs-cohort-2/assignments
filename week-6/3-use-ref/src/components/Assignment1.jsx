import React, { useEffect, useRef } from "react";

export function Assignment1() {

  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus()
  },[inputRef]);

  const handleButtonClick = () => {
  
    inputRef.current.focus();
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
