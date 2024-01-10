import { useEffect, useRef, useState } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const [inputText, setInputText] = useState('');

    useEffect(() => {

    }, []);

    const handleButtonClick = () => {
        useRef(inputText)
    };

    return (
        <div>
            <input type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
