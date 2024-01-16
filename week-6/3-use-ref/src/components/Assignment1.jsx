import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputReference = useRef();
    useEffect(() => {
        inputReference.current.focus();
    }, [inputReference]);

    const handleButtonClick = () => {
        inputReference.current.focus();
    };

    return (
        <div>
            <input ref={inputReference} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
