let timeout = setTimeout(print, 1000);
let count = 0;
function print() {
	if (count === 10) clearInterval(timer);
	console.log(count++);
	timeout = setTimeout(print, 1000);
}
console.log(count++);
