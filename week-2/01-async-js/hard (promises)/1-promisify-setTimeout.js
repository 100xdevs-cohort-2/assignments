/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`the promise has resolved after ${n} seconds`);
		}, n);
	});
}

//have to chain using then methods to return the result
wait(3000)
	.then((data) => {
		console.log(data); //the argumet passed to the resolve callback function will be logged here.
	})
	.catch((err) => {
		//err will be caught and error object will be logged here
		console.log(`error has occured: ${err.message}`, err);
	});
