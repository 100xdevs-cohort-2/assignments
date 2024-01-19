import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const inputRef = useRef(0);

  useEffect(() => {
    console.log("UseEffect focus when component mounts");
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

/*
- useRef() hook is used to manipulate the DOM elements directly.
- Instead of writing document.getElementById.innerHTML it lets you give references to the components to be changed.
*/
