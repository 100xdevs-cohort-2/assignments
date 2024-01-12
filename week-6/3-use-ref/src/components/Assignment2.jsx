import React, { useState, useCallback,useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [render, forceRender] = useState(0);
     const renderRef = useRef(1);
    const handleReRender =useCallback( () => {
     
        
        forceRender(renderRef.current++);
    },[render]);

    return (
        <div>
            <p>This component has rendered {render} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};