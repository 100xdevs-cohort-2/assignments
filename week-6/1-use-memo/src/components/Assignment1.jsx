import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(() =>{
        let result = 1;
        if(input <= 1){
            return input;
        }
        for(let i = 1; i <= input; i++){
            result *= i;
        }
        return result;
    },[input]); 
    console.log(expensiveValue);
    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}