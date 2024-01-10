import { useEffect, useRef, useState } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const myref = useRef(null);
//   useEffect(() => {
//     text.current = textInput;
//   }, [textInput]);

  const handleButtonClick = () => {
    myref.current.focus();
  };


  return (
    <div>
      <input ref={myref} type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
