/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait(t) {

	const p = new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, t*1000)});

	return p;
}

function calculateTime(t1, t2, t3) {

    let start = new Date();

    return Promise.all([wait(t1), wait(t2), wait(t3)]).then(() => {
        let end = new Date();
        console.log("All promises have resolved after", (end - start)/1000, "seconds");
        return (end - start);
    })
}

module.exports = calculateTime;
