import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const renderedCount = useRef(0)
    // so it increament any time function re-render so for that 
    renderedCount.current++;
    // so use ref is used to store value or do something which not changes after the re-render also 
    const [, forceRender] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    return (
        <div>
            <p>This component has rendered {renderedCount.current}times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};