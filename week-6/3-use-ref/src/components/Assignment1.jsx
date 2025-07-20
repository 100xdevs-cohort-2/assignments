import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    // by default undefined is set as current value
    const inputReference = useRef();
    const value = useRef(1);
    useEffect(() => {
        // useEffect will be called whenever component mounts / renders on the screen. (think of DOMContentLoaded)
        handleButtonClick();
    }, []);

    const handleButtonClick = useCallback(function() {
        // this will points to the input DOM node
        console.log(value.current);
        inputReference.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputReference} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
            <button onClick={function() {
                value.current++;
            }}>Change value</button>
        </div>
    );
};


// useRef hook returns us the an "object with current property" whose value is set to the passed value in the useRef, the value inside current is mutable and does not causes the component to re-render when changed + persist between the re-renders

// use case of useRef
// 1. This hook lets developer to interact with the old school DOM elements inside the React component life cycle (using the ref attribute ), major uses case is interacting with input nodes 

// 2. If we want to maintain / persist the value between re-renders + a value that is mutable + does not causes re-renders on  being changed -> useRef lets you do these all