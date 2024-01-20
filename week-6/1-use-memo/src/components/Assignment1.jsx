import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [expensiveValue,setexpensiveValue]=useState(0);
    // Your solution starts here
    const calculateFactorial=(input)=>{
        if(input===0 || input===1)return 1;
        else{
            let fact=1;
          for(let i=2;i<input+1;i++){
            fact*=i;
          }
          return fact
        }
    }
    const factorial=useMemo(()=>setexpensiveValue(calculateFactorial(input)),[input]);
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