/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
	return new Promise((res, rej) => {
		setTimeout(res("resolved after 1 second delay"), 1000);
	});
}

function waitTwoSecond() {
	return new Promise((res, rej) => {
		setTimeout(res("resolved after 2 second delay"), 2000);
	});
}

function waitThreeSecond() {
	return new Promise((res, rej) => {
		setTimeout(res("resolved after 3 second delay"), 3000);
	});
}

function calculateTime() {
	console.time("time took for all the promises to finish");

	waitOneSecond()
		.then((res) => {
			console.log(res);
			return waitTwoSecond();
		})
		.then((res) => {
			console.log(res);
			return waitThreeSecond();
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err));

	console.timeEnd("time took for all the promises to finish");
	return `promises were processed`;
}

console.log(calculateTime());
