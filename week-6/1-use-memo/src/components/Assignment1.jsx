import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
const factorial = (i)=>{
    if(i<0) return 0
    if(i==0){
return 1;
    }
    if(i==1){
        return 1;
    }else{
        return i*factorial(i-1);
    }
}

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here


    const expensiveValue = useMemo(()=>{
        console.log(factorial(input));
        return factorial(input);
    },[input]); 
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