// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function Count() {
	console.log("Counter : ", counter);
	counter++;

	if (counter <= 5) {
		setTimeout(Count, 1000);
	}
}

Count();
