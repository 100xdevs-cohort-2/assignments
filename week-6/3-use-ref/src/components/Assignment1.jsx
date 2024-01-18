import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const inputRef = useRef();

    useEffect(() => {
        console.log("component mounted")
        inputRef.current.focus()
    }, []);

    const handleButtonClick = () => {
        console.log("button clicked")
        inputRef.current.focus()
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={inputRef}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
