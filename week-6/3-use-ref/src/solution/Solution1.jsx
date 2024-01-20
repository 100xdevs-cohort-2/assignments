import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

function Solution1() {

    const inputref = useRef()

    useEffect(() => {
        console.log("mounted")
        inputref.current.focus()
    }, []);

    const handleButtonClick = () => {
        console.log("button clicked")
        inputref.current.focus()
    };

    return (
        <div>
            <input type="text" ref={inputref} placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
}

export default Solution1

