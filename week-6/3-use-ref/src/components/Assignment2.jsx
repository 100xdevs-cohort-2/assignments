import React, { useRef, useState, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. 
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceRender] = useState(0);

    // rather than storing DOM values, we can also use useRef to store numbers, strings.. , without overriding it same like useState()
    let numberOfTimesRendered = useRef(0);

    // current gives the current value that is useRef storing
    numberOfTimesRendered.current = numberOfTimesRendered.current + 1;
    
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    return (
        <div>
            {/* now we don't need to add attribute of 'ref' here coz we storing values inside useRef */}
            <p > This component has rendered {numberOfTimesRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};