/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
	let a = 0;
	return new Promise((resolve) => {
		for(let i = 0;i < milliseconds;i++){
			a += i;
		};
		resolve("resolved data");
	})
}

async function main(){
	let value = await sleep(1000000000000);
	console.log(value);
}

main();

module.exports = sleep;
