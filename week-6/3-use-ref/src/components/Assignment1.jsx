import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    myRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={myRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
