import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function factorial(n){
    let ans=1;
    if(n==0) return ans;
    for(let i=2;i<=n;i++){
        ans*=i;
    }
    return ans;
}

export function Assignment1() {
    const [input, setInput] = useState(0);
    const expensiveValue=useMemo(()=>{
        console.log('Calculating expensive result...');
        return factorial(input);
    },[input]);
    
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