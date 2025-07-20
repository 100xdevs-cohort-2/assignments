import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [count, setCount] = useState(0);
    // Your solution starts here
    // useMemo is used to remember the result of expensive function call (factorial) that result depends on the other state_variables => when the value of the state_variable changes then the re-computation happens


    const expensiveValue = useMemo(function() {
        // calculating factorial
        // factorial is only defined for positive numbers => negative numbers are neglected and return 1
        console.log("This expensive function will be executed intially + when the value of input state_variable changes")
        let factorial = 1;

        if(input <= 1) {
            return factorial;
        } 
        
        for( let index = 1; index <= input; index++ ) {
            factorial*=index;
        }

        return factorial;

        // [] -> if the dependency_array is empty than than it will be called when components re-renders / mounts intially.
    }, [input]) // if no dependency array is provided that the expensive function will be called everytime when the component re-renders
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>

            <button onClick={() => setCount((value) => value + 1)}>Count is {count}</button>
        </div>
    );
}

// useMemo hook is used to "remember" / "memoize" the result of an expensive function call, so that on every re-render of the component the value does not gets computed again and again, and if the result depends on any variable => that will be added inside the dependency_array, 

// "useMemo" hook should be used when we want to compute any logic ( expensive function call ) that "depends" on the other state_variable, => that state_variable will be added inside the dependency_array and will the new value will be computed again when it changes

// useMemo "persist / maintains" the result between the re-renders

// Example is finding factorial of number that user provides, ( this is an expensive task (recursion) ) if not using useMemo inside the component, if any other state_variable changes the value will again be re-calculated