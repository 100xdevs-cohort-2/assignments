import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
	const [input, setInput] = React.useState(0);
	// Your solution starts here
	// Your solution ends here

	const ExpensiveCaluction = React.useCallback((input) => {
		if (input <= 1) return input;
		return input * ExpensiveCaluction(input - 1);
	}, []);

	const expensiveValue = React.useMemo(() => {
		const value = ExpensiveCaluction(input);
		return value;
	}, [ExpensiveCaluction, input]);

	console.log(expensiveValue);

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
