// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function currTime() {
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	const suffix = hours >= 12 ? "PM" : "AM";
	const secPrefix = seconds < 10 ? "0" : "";
	console.log(
		`current time is ${hours} : ${minutes} : ${secPrefix}${seconds} ${suffix}`
	);
}

setInterval(() => {
	console.clear();
	currTime();
}, 1000);
