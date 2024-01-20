import { useEffect,useRef } from "react";

// Create a component with a text input field and a button. 
//When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const text = useRef();
    useEffect(() => {
       text.current.focus(); 
    }, []);

    const handleButtonClick = () => {
            text.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={text}/>  {/*ref is similar to id it links the DOM element with react component. */}
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
