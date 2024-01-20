import React, { useState, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered.
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [renderCount, setRenderCount] = useState(1);

    const handleReRender = () => {
        setRenderCount(renderCount+1);
    };

    return (
        <div>
            <TestComponent renderCount={renderCount} />
            <p>This component has rendered {renderCount} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};
function TestComponent({renderCount}){
    return(
        <h1>Hello Wolrd</h1>
    )
}