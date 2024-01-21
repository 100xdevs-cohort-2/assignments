import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    let inputRef = useRef();
    const [r, setR] = useState(0);
    useEffect(() => {
        inputRef.current.focus();
    }, [r]);

    const handleButtonClick = () => {
        setR(r+1);
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
