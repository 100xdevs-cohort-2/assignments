import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
let count = 0
export function Assignment2() {
    count++;
    const [, forceRender] = useState(count);
    const pRef = useRef()
    
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    useEffect(()=>{
        pRef.current.innerHTML = count
    })

    return (
        <div>
            <p ref={pRef}>This component has rendered {0} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};