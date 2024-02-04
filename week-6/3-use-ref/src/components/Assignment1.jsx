import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

// mounts means when the first time component render
export function Assignment1() {
    const [text, SetText] = useState("")
    const inputRef = useRef();

    useEffect(() => {
        handleButtonClick()
    }, []);

    const handleButtonClick = () => {
        // select the input text
        inputRef.current?.select();
        // focus on input field
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here" onChange={(t) => SetText(t)} />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
