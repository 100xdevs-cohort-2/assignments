import React, { useEffect, useRef, useState } from "react";

export function Assignment1() {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
   
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
   
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here"
        ref={inputRef} 
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
