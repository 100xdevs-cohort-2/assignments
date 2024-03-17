function getCurrentTime() {
	const time = new Date();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	return `${hours}:${minutes}:${seconds}`;
}
const timer = setInterval(print, 1000);

console.log(getCurrentTime());
function print() {
	console.log(getCurrentTime());
}
