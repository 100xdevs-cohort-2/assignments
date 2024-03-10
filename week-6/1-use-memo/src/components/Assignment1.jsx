import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);

    const dp = useMemo(() => new Map(), []);

    const factorial = function(value) {
        if (value <= 1) return 1;

        if (dp.has(value)) return dp.get(value);

        const result = value * factorial(value - 1); 

        dp.set(value, result);

        return result;
    }

    const expensiveValue = useMemo(() => {
        return factorial(input);
    }, [input]);

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