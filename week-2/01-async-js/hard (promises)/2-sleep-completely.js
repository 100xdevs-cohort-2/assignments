/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
	console.time("time");
	let value = 0;
	while (value < seconds) {
		//it blocks the thread until the while condition becomes false and then exits the while loop
		value += 1;
		console.log(value);
	}
	console.log(
		`finally while loop exits after blocking JS thread for some time`
	);
	console.timeEnd("time");
}

console.log(sleep(6000));
