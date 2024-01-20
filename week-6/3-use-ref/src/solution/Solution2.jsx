import { useState } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
function Solution2() {
    const [, forceRender] = useState(0);

    const numberOfTImesReRendered = useRef(0)

    const handleReRender = () => {
        console.log("forecd re rendered")
        // Update state to force re-render
        forceRender(Math.random());
    };
    numberOfTImesReRendered.current = numberOfTImesReRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfTImesReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}

export default Solution2
