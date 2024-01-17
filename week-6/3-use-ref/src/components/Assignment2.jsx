import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [forceRender,setForceRender] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        setForceRender(prevCount=> prevCount+1);
    };
    useEffect(()=>{
        console.log("Componenet has been rerendered")
    },[handleReRender])

    return (
        <div>
            <p>This component has rendered {forceRender} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};