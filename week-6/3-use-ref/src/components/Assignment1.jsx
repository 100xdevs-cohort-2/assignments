import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const textFieldRef = useRef(null);

  useEffect(() => {
    textFieldRef.current.focus();
  }, []);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    textFieldRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={textFieldRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
