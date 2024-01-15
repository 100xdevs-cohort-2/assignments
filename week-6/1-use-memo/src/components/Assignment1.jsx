import { useState } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = 0; 
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}