import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
let expensiveValue = useMemo(() => {
    let expensiveValue = 1;    
    for (let i = 1; i <= input; i++){
        expensiveValue = expensiveValue * i        
    }
    return expensiveValue
},[input])
    

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