import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const textRef=useRef(null);
    useEffect(() => {
        textRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        if(textRef.current){
            textRef.current.focus();
        }
        
    };

    return (
        <div>
            <input type="text" ref={textRef} placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
