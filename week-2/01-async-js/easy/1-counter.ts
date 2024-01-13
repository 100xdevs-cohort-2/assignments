const timer = setInterval(print, 1000);
let count = 0;
console.log(count++);
function print() {
	console.log(count++);
}

setTimeout(() => {
	clearInterval(timer);
}, 10000);
